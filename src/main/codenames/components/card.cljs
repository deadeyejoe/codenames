(ns codenames.components.card
  (:require
   [codenames.state :as state]
   [codenames.style :as style]
   [codenames.style.responsive :as responsive]
   [reagent.core :as rc]))

(defn card-display [index word team guessed]
  @responsive/font-size
  (let [hovered (rc/atom false)]
    (fn [index word team guessed]
      [:div {:style (merge {:flex "0 0 100%"
                            :display :flex
                            :align-items :center
                            :justify-content :center
                            :font-size @responsive/font-size
                            :cursor :pointer}
                           (:style/button (team style/teams)))
             :on-mouse-enter #(swap! hovered not)
             :on-mouse-leave #(swap! hovered not)}
       (when (or (not guessed) @hovered) word)])))

(def team-button-base {:cursor :pointer
                       :display :flex
                       :flex "0 0 50%"
                       :min-height "50%"
                       :box-sizing :border-box
                       :justify-content :center
                       :align-items :center})

(defn team-button [team index]
  (let [team-styling (team style/teams)]
    [:div {:key team
           :style (merge team-button-base (:style/button team-styling))
           :on-click #(state/set-team index team)}
     (:team/shorthand team-styling)]))

(defn card-control [index word team]
  [:div {:style {:display :flex
                 :flex-wrap :wrap
                 :align-content :center
                 :flex "0 0 100%"
                 :height "100%"}}
   (doall
    (map #(team-button % index)
         (map #(if (= team %) :none %) [:red :blue :neutral :assassin])))])

(def card-base
  {:box-sizing :border-box
   :flex "1 0 15%"
   :max-width "17%"
   :min-width "17%"
   :max-height "15%"
   :min-height "15%"
   :height "100%"
   :border-radius "2px"
   :border (str "1px solid " (:200 style/grey))
   :display :flex})

(defn card [[index word-state]]
  (let [{word :words/word team :words/team guessed :words/guessed} word-state
        controlled (= index @state/controlled-word-cursor)]
    [:div {:key index
           :style (merge card-base
                         (if controlled style/elevation-high style/elevation-low))
           :on-click #(state/word-clicked index)
           :on-mouse-leave #(reset! state/controlled-word-cursor nil)}
     (if controlled
       [card-control index word team]
       [card-display index word team guessed])]))