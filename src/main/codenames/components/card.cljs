(ns codenames.components.card
  (:require
   [codenames.state :as state]
   [codenames.style :as style]
   [codenames.style.responsive :as responsive]))

(defn card-display [index word team]
  @responsive/font-size
  (let [team-styling (team style/teams)]
    [:div {:style (merge {:flex "0 0 100%"
                          :display :flex
                          :align-items :center
                          :justify-content :center
                          :font-size @responsive/font-size
                          :cursor :pointer}
                         (:style/button team-styling))} word]))

(def team-button-base {:cursor :pointer
                       :display :flex
                       :flex "0 0 50%"
                       :min-height "50%"
                       :box-sizing :border-box
                       :justify-content :center
                       :align-items :center})

(defn team-button [team]
  (let [team-styling (team style/teams)]
    [:div {:key team
           :style (merge team-button-base (:style/button team-styling))
           :on-click #(state/set-controlled-team team)}
     (:team/shorthand team-styling)]))

(defn card-control [index word team]
  [:<>
   [:div {:style
          (merge {:display :flex
                  :align-items :center
                  :flex "0 0 50%"
                  :box-sizing :border-box
                  :justify-content :center}
                 (get-in style/teams [team :style/button]))}
    word]
   [:div {:style {:display :flex
                  :flex-wrap :wrap
                  :align-content :center
                  :flex "0 0 50%"
                  :height "100%"}}
    (map team-button
         (map #(if (= team %) :none %) [:red :blue :neutral :assassin]))]])

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
  (let [{word :words/word team :words/team} word-state
        controlled (= index @state/controlled-word-cursor)]
    [:div {:key index
           :style (merge card-base
                         (if controlled style/elevation-high style/elevation-low))
           :on-click #(reset! state/controlled-word-cursor index)
           :on-mouse-leave #(reset! state/controlled-word-cursor nil)}
     (if controlled
       [card-control index word team]
       [card-display index word team])]))