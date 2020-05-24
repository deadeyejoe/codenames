(ns codenames.state
  (:require [reagent.core :as rc]
            [codenames.words :as words]
            [clojure.string :as str]
            [codenames.random :as rand]))

(declare state)

(defn new-seed [] (first (rand/sample words/words 1 (. js/Date now))))

(defn select-words [seed] (rand/sample words/words 25 seed))

(defn generate-word-map [words]
  (into (sorted-map)
        (map-indexed
         (fn [index word]
           [index
            {:words/word (str/upper-case word)
             :words/guessed false
             :words/team :none}])
         words)))

(defn new-state
  ([] (new-state (new-seed)))
  ([seed] {::mode :guesser
           ::modal-active false
           :words/seed seed
           :words/map (generate-word-map (select-words seed))
           ::controlled-word false}))

(defonce state (rc/atom (new-state)))

(def teams-for-shuffling
  {:red (flatten [(repeat 9 :red) (repeat 8 :blue) (repeat 7 :neutral) [:assassin]])
   :blue (flatten [(repeat 8 :red) (repeat 9 :blue) (repeat 7 :neutral) [:assassin]])})

(defn generate-teams [seed first-team]
  (->> (first-team teams-for-shuffling)
       (rand/seed-shuffle seed)
       (into [])))

(defn set-teams [word-map teams]
  (into {} (map (fn [[index word]]
                  [index (merge word {:words/team (nth teams index)
                                      :words/guessed false})])
                word-map)))

(defn guesser-mode [state]
  (let [new-word-map (set-teams (:words/map state) (repeat 25 :none))]
    (merge state {::mode :guesser
                  :key/seed nil
                  :key/first-team nil
                  :words/map new-word-map})))

(defn spymaster-mode
  ([state] (spymaster-mode state (new-seed)))
  ([state key-seed]
   (let [first-team (if (rand/coin-toss key-seed) :red :blue)
         team-vector (generate-teams key-seed first-team)
         new-word-map (set-teams (:words/map state) team-vector)]
     (merge state {::mode :spymaster
                   :key/seed key-seed
                   :key/first-team first-team
                   :words/map new-word-map}))))

(def mode-cursor (rc/cursor state [::mode]))
(def modal-active-cursor (rc/cursor state [::modal-active]))
(def word-seed-cursor (rc/cursor state [:words/seed]))
(def key-seed-cursor (rc/cursor state [:key/seed]))
(def first-team-cursor (rc/cursor state [:key/first-team]))
(def map-cursor (rc/cursor state [:words/map]))
(def controlled-word-cursor (rc/cursor state [::controlled-word]))
(defn word-cursor [index] (rc/cursor state [:words/map index]))

(defn calculate-team-score
  ([[team]] (->> (:words/map @state)
                 (filter (fn [[_k word]]
                           (and (:words/guessed word)
                                (= (or team :none) (:words/team word)))))
                 (count)))
  ([_p _v] nil))

(defn calculate-team-limit
  ([[team]] (if (= team (:key/first-team @state)) 9 8))
  ([_p _v] nil))

(defn score-cursor [team] (rc/cursor calculate-team-score [team]))
(defn limit-cursor [team] (rc/cursor calculate-team-limit [team]))

(defn toggle-mode []
  (swap! state (if (= @mode-cursor :guesser) spymaster-mode guesser-mode)))

(defn random-seed []
  (reset! state ((if (= :guesser @mode-cursor)
                   identity
                   spymaster-mode) (new-state))))

(defn set-seed [word-seed key-seed]
  (reset! state (if (= :guesser @mode-cursor)
                  (new-state word-seed)
                  (spymaster-mode (new-state word-seed) key-seed))))

(defn set-team [index team]
  (swap! (word-cursor index) merge {:words/team team
                                    :words/guessed (not= team :none)})
  (reset! controlled-word-cursor nil))

(defn mark-guessed [index]
  (swap! (word-cursor index) assoc :words/guessed true))

(defn word-clicked [index]
  (if (= @mode-cursor :guesser)
    (reset! controlled-word-cursor index)
    (mark-guessed index)))


