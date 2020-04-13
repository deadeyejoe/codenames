(ns codenames.state
  (:require [reagent.core :as rc]
            [codenames.words :as words]
            [clojure.string :as str]
            [codenames.random :as rand]))

(declare state)

(comment (words/words))

(defn new-seed [] (first (rand/sample words/words 1 (. js/Date now))))

(comment
  (new-seed))

(defn select-words [seed] (rand/sample words/words 25 seed))

(comment
  (select-words 5)
  (select-words "a")
  (select-words "polic"))

(defn generate-word-map [words]
  (into (sorted-map)
        (map-indexed
         (fn [index word]
           [index
            {:words/word (str/upper-case word)
             :words/team :none}])
         words)))

(defn new-state
  ([] (new-state (new-seed)))
  ([seed] {:words/seed seed :words/map (generate-word-map (select-words seed)) ::controlled-word false}))

(defonce state (rc/atom (new-state)))

(def seed-cursor (rc/cursor state [:words/seed]))
(def controlled-word-cursor (rc/cursor state [::controlled-word]))
(defn word-cursor [index] (rc/cursor state [:words/map index]))

(defn random-seed []
  (reset! state (new-state)))

(defn set-seed [seed]
  (reset! state (new-state seed)))

(defn set-team [team]
  (swap! state assoc-in [:words/map @controlled-word-cursor :words/team] team)
  (reset! controlled-word-cursor nil))
