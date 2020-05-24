(ns codenames.components.status-bar
  (:require [codenames.state :as state]
            [codenames.style :as style]
            [codenames.style.responsive :as responsive]
            [clojure.string :as string]))

(def space-between {:display :flex
                    :justify-content :space-between})

(defn seed-control []
  [:div {:style {:display :flex
                 :flex "row nowrap"
                 :justify-content :space-between
                 :width "390px"}}
   [:div {:style {:display :flex
                  :flex "row nowrap"
                  :width "250px"
                  :justify-content :space-between
                  :align-items :center}}
    [:div [:strong "Word:"] (:words/seed @state/state)]
    (when (= :spymaster @state/mode-cursor)
      [:div [:strong "Key:"] (:key/seed @state/state)])]
   [:div
    [:input {:type "button"
             :value "Random"
             :on-click state/random-seed}]
    [:input {:type "button"
             :value "Set"
             :on-click #(swap! state/modal-active-cursor not)}]]])

(defn score-card []
  (let [guesser? (= @state/mode-cursor :guesser)
        score-style {:padding "5px 10px"
                     :border-radius "2px"
                     :cursor (when guesser? "pointer")}]
    [:div {:style {:display :flex
                   :flex "row nowrap"
                   :width "190px"
                   :height "100%"
                   :justify-content :space-between
                   :align-items :center}}
     [:div {:style (merge score-style (get-in style/teams [:red :style/button]))
            :on-click #(when guesser? (reset! state/first-team-cursor :red))
            :title (when guesser? "Click to set red as first team")}
      "Red: " @(state/score-cursor :red) " / " @(state/limit-cursor :red)]
     [:div {:style (merge score-style (get-in style/teams [:blue :style/button]))
            :on-click #(when guesser? (reset! state/first-team-cursor :blue))
            :title (when guesser? "Click to set blue as first team")}
      "Blue: " @(state/score-cursor :blue) " / " @(state/limit-cursor :blue)]]))

(def mode-antonym {:guesser "Spymaster"
                   :spymaster "Guesser"})

(defn mode-control []
  (let [current-mode @state/mode-cursor]
    [:div {:style {:display :flex
                   :flex "row-reverse nowrap"
                   :justify-content :space-between
                   :align-items :center
                   :width :260px}}
     [:div "Mode: " (string/capitalize (name current-mode))]
     [:input {:type "button"
              :value (str (mode-antonym current-mode) " mode")
              :on-click state/toggle-mode}]]))

(defn status-bar []
  [:div {:style space-between}
   [seed-control]
   [score-card]
   [mode-control]])