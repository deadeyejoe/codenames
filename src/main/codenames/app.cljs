(ns codenames.app
  (:require [reagent.dom :as rd]
            [codenames.state :as state :refer [state]]
            [codenames.style :as style]
            [codenames.utils :as u]))

(defn seed-control [seed]
  (let [current-seed (u/shadow seed)]
    (fn []
      [:div
       [:div "Seed: " [u/atom-input current-seed]
        [:input {:type "button"
                 :value "Set"
                 :on-click #(reset! state/state (state/new-state @current-seed))
                 :disabled (= @current-seed @seed)}]
        [:input {:type "button" :value "Random" :on-click #(state/random-seed)}]]])))

(def teams [:none :red :blue :neutral :assassin])

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

(def card-display-css
  (merge card-base {:display :flex
                    :align-items :center
                    :justify-content :center
                    :font-size "40px"
                    :cursor :pointer}))

(defn card-display [index word team]
  [:div {:style (merge {:flex "0 0 100%"
                        :display :flex
                        :align-items :center
                        :justify-content :center
                        :font-size "40px"
                        :cursor :pointer}
                       (team style/teams))} [:span  word]])

(def team-button-base {:cursor :pointer
                       :display :flex
                       :flex "0 0 50%"
                       :min-height "50%"
                       :box-sizing :border-box
                       :justify-content :center
                       :align-items :center})

(def team-buttons {:none {:team/shorthand "X"
                          :style/border {:border (str "1px solid " (:200 style/grey))}
                          :style/button (:none style/teams)
                          :style/badge {:border (str "1px solid " (:200 style/grey))
                                        :border-radius "10px"}
                          :style/text {:color (:900 style/grey)}}
                   :red {:team/shorthand "R"
                         :style/button (:red style/teams)
                         :style/badge {:border (str "1px solid " (:200 style/grey))
                                       :border-radius "10px"
                                       :color (:dark style/red)}
                         :style/text {:color (:dark style/red)}}
                   :blue {:team/shorthand "B"
                          :style/text {:color (:dark style/blue)}}
                   :neutral {:team/shorthand "N"
                             :style/text {:color (:dark style/beige)}}
                   :assassin {:team/shorthand "A"
                              :style/text {:color (:900 style/grey)}}})


(defn team-button [team]
  (let [button-content (team team-buttons)]
    [:div {:key team
           :style (merge team-button-base (team style/teams) (:style/border button-content))
           :on-click #(state/set-team team)}
     (:team/shorthand button-content)]))

(defn card-control [index word team]
  [:<>
   [:div {:style
          {:display :flex
           :align-items :center
           :flex "0 0 50%"
           :box-sizing :border-box
           :justify-content :center}} [:div {:style (get-in team-buttons [team :style/badge])}] word]
   [:div {:style {:display :flex
                  :flex-wrap :wrap
                  :align-content :center
                  :flex "0 0 50%"
                  :height "100%"}}
    (map team-button
         (map #(if (= team %) :none %) [:red :blue :neutral :assassin]))]])

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

(def word-grid-css
  {:display :flex
   :flex-wrap :wrap
   :justify-content :space-around
   :align-items :center
   :align-content :space-around
   :min-height "95vh"
   :height "95vh"})

(defn word-grid []
  [:div
   {:class ["word-grid"]
    :style word-grid-css}
   (doall (map card (:words/map @state)))])

(defn render-app []
  (rd/render
   [:div
    {:style style/base-css}
    [seed-control state/seed-cursor]
    [word-grid]]
   (js/document.getElementById "root")))


(defn init []
  (render-app))

(defn ^:dev/after-load start [] (render-app))