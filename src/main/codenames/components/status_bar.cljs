(ns codenames.components.status-bar
  (:require [codenames.state :as state]
            [codenames.style :as style]
            [codenames.style.responsive :as responsive]))

(def space-between {:display :flex
                    :justify-content :space-between})

(defn seed-control []
  [:div
   [:div
    [:div " Word Seed: " (:words/seed @state/state)]
    (when (= :spymaster @state/mode-cursor)
      [:div "Key Seed: " (:key/seed @state/state)])]
   [:input {:type "button"
            :value "Random"
            :on-click state/random-seed}]
   [:input {:type "button"
            :value "Set"
            :on-click #(swap! state/modal-active-cursor not)}]])

(defn score-card []
  [:div
   [:div "Red: " @(state/score-cursor :red)]
   [:div "Blue: " @(state/score-cursor :blue)]])

(def mode-antonym {:guesser "Spymaster"
                   :spymaster "Guesser"})

(defn mode-control []
  (let [current-mode @state/mode-cursor]
    [:div
     [:div "Mode: " current-mode]
     [:input {:type "button"
              :value (str ({:guesser "Spymaster" :spymaster "Guesser"} current-mode) " mode")
              :on-click state/toggle-mode}]]))

(defn status-bar []
  [:div {:style space-between}
   [seed-control]
   [score-card]
   [mode-control]])