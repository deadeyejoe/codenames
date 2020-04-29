(ns codenames.app
  (:require [reagent.dom :as rd]
            [codenames.components.card :refer [card]]
            [codenames.state :as state :refer [state]]
            [codenames.style :as style]
            [codenames.style.responsive :as responsive]
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
        [:input {:type "button" :value "Random" :on-click #(state/random-word-seed)}]]])))

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
    {:style style/root-element-css}
    [seed-control state/seed-cursor]
    [:hr {:style {:margin 0 :border (str "1px solid " (:500 style/grey)) :margin-top "2px"}}]
    [word-grid]]
   (js/document.getElementById "root")))


(defn init []
  (render-app)
  (responsive/watch-window))

(defn ^:dev/after-load start [] (render-app))