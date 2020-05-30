(ns codenames.components.card
  (:require
   [codenames.state :as state]
   [codenames.style :as style]
   [codenames.style.responsive :as responsive]
   [reagent.core :as rc]
   [re-com.core :refer [h-box, v-box box]]))

(declare card-display card-control team-button)

(defn card [index word-state]
  @responsive/font-size
  (let [{team :words/team} word-state
        controlled? (= index @state/controlled-word-cursor)]
    [box
     :size "20%"
     :style (merge {:font-size @responsive/font-size
                    :cursor :pointer
                    :border-radius "3px"
                    :border (str "1px solid " (:200 style/grey))}
                   style/elevation-high
                   (get-in style/teams [team :style/button]))
     :attr {:on-click #(state/word-clicked index)
            :on-mouse-leave #(reset! state/controlled-word-cursor nil)}
     :child (if controlled?
              [card-control index word-state]
              [card-display word-state])]))

(defn card-display [word-state]
  (let [hovered? (rc/atom false)
        toggle-hover #(swap! hovered? not)]
    (fn [word-state]
      (let [{word :words/word guessed? :words/guessed} word-state]
        [box
         :size "1"
         :width "100%"
         :justify :center
         :align :center
         :attr {:on-mouse-enter toggle-hover
                :on-mouse-leave toggle-hover}
         :child (if (or (not guessed?) @hovered?) word "")]))))

(defn card-control [index word-state]
  (let [{team :words/team} word-state]
    [v-box
     :size "1"
     :width "100%"
     :children (->> (replace {team :none} [:red :blue :neutral :assassin])
                    (map (fn [t] [team-button index t]))
                    (partition 2)
                    (map (fn [ts] [h-box :size "50%" :height "50%" :children ts])))]))

(defn team-button [index team]
  (let [{team-button :style/button shorthand :team/shorthand} (team style/teams)]
    [box
     :size "1"
     :height "100%"
     :justify :center
     :align :center
     :style (merge {:cursor :pointer} team-button)
     :attr {:on-click #(state/set-team index team)}
     :child shorthand]))