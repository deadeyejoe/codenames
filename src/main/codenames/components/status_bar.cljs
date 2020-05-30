(ns codenames.components.status-bar
  (:require [codenames.state :as state]
            [codenames.style :as style]
            [codenames.components.mode-control :refer [mode-control]]
            [codenames.components.button :refer [button]]
            [clojure.string :as string]
            [re-com.core :refer [h-box box gap]]))

(declare status-bar seed-control score-card)

(defn status-bar []
  [h-box
   :size "0 0 4vh"
   :style style/elevation-low
   :children [[gap :size "1vw"]
              [seed-control]
              [score-card]

              ;; [box :size "1" :justify :end :child [mode-control]]
              [h-box :size "1" :justify :end :children [[mode-control]]]
              [gap :size "1vw"]]])

(defn seed-control []
  [h-box
   :size "1"
   :justify :start
   :align :center
   :gap "5px"
   :children [[box
               :size "1"
               :min-width "120px"
               :style {:white-space "nowrap"}
               :child [:div [:strong "Word: "] (:words/seed @state/state)]]
              [box
               :size "1"
               :min-width "120px"
               :style {:white-space "nowrap"}
               :child (or (and (= :spymaster @state/mode-cursor) [:div [:strong "Key: "] (:key/seed @state/state)]) "")]
              [h-box
               :size "2"
               :gap "4px"
               :children [[button "Random" state/random-seed]
                          [button "Set" #(swap! state/modal-active-cursor not)]]]]])

(defn team-score [team]
  (let [guesser? (= @state/mode-cursor :guesser)
        is-first? (= @state/first-team-cursor team)
        team-name (string/capitalize (name team))]
    [box
     :size "0"
     :style (merge {:padding "5px 10px"
                    :border-radius "2px"
                    :white-space "nowrap"}
                   (get-in style/teams [team :style/button])
                   (when guesser? {:cursor "pointer"}))
     :attr {:on-click #(when guesser? (reset! state/first-team-cursor team))
            :title (cond
                     is-first? (str team-name " is first team")
                     guesser? (str "Click to set " team-name " as first team"))}
     :child (str team-name ": " @(state/score-cursor team) " / " @(state/limit-cursor team))]))

(defn score-card []
  [h-box
   :size "1"
   :justify :center
   :align :center
   :gap "5px"
   :children [[team-score :red] [team-score :blue]]])

