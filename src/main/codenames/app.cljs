(ns codenames.app
  (:require [reagent.dom :as rd]
            [reagent.core :as rc]
            [codenames.state :as state :refer [state]]
            [codenames.style :as style]
            [codenames.utils :as u]))

(enable-console-print!)

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

(def teams [:none :red :blue :assassin :neutral])

(def card-base
  {:box-sizing :border-box
   :flex "1 0 15%"
   :max-width "17%"
   :min-width "17%"
   :max-height "15%"
   :min-height "15%"
   :border-radius "2px"
   :border (str "1px solid " (:200 style/grey))})

(def card-css
  (merge card-base {:display :flex
                    :align-items :center
                    :justify-content :center
                    :font-size "40px"} style/elevation-low))

(def team-button-base {:border-radius "20px"
                       :border "1px solid #000"
                       :padding "6px 10px"
                       :cursor :pointer})

(def team-buttons {:none {:team/shorthand "X"}
                   :red {:team/shorthand "R"}
                   :blue {:team/shorthand "B"}
                   :assassin {:team/shorthand "A"}
                   :neutral {:team/shorthand "N"}})


(defn team-button [team]
  [:div {:style (merge team-button-base (team style/teams))
         :on-click #(state/set-team team)}
   (get-in team-buttons [team :team/shorthand])])

(defn card [[index word-state]]
  (let [{word :words/word team :words/team} word-state]
    (if (= index @state/controlled-word-cursor)
      [:div {:key index
             :style card-base}
       [:div {:style {:padding-left "10px"
                      :padding-top  "5px"}} word]
       [:hr {:style {:border :none :height "1px" :background-color (:500 style/grey) :width "95%" :margin-top "5px"}}]
       [:div {:style {:display :flex :justify-content :space-around :align-content :center}}
        (map team-button teams)]]

      [:div
       {:key index
        :class ["word-card" team]
        :style (merge card-css (team style/teams))
        :on-click #(reset! state/controlled-word-cursor index)}
       [:div {:class "card-content"} [:span  word]]])))




(comment (:words/map @state)
         (card (first (:words/map @state))))

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

(defn word-control []
  (when-let [controlled-index @state/controlled-word-cursor]
    (let [word-cursor (state/word-cursor controlled-index)]
      [:div "controlling:" controlled-index
       (map (fn [team]
              [:input {:key team
                       :type "button"
                       :value team
                       :on-click #((swap! word-cursor assoc :words/team team) (reset! state/controlled-word-cursor nil))}])
            teams)])))


(defn render-app []
  (rd/render
   [:div
    {:style style/base-css}
    [seed-control state/seed-cursor]
    ;; [word-control]
    [word-grid]]
   (.-body js/document)))


(defn init []
  (render-app))

(defn ^:dev/after-load start [] (render-app))