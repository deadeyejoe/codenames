(ns codenames.app
  (:require [reagent.dom :as rd]
            [reagent.core :as rc]
            [codenames.components.card :refer [card]]
            [codenames.components.status-bar :refer [status-bar]]
            [codenames.state :as state :refer [state]]
            [codenames.style :as style]
            [codenames.style.responsive :as responsive]
            [codenames.utils :as u]))

(defn modal-content []
  (let [word-atom (rc/atom @state/word-seed-cursor)
        key-atom (rc/atom @state/key-seed-cursor)]
    [:<>
     [:div
      [:span "Words"]
      [u/atom-input word-atom]]
     (when (= @state/mode-cursor :spymaster)
       [:div
        [:span "Key"]
        [u/atom-input key-atom]])
     [:div
      [:input {:type "button"
               :value "Set"
               :on-click #(state/set-seed @word-atom @key-atom)}]
      [:input {:type "button"
               :value "Cancel"
               :on-click #(swap! state/modal-active-cursor not)}]]]))

(defn modal-container []
  (when @state/modal-active-cursor
    [:div {:style (merge {:position :fixed
                          :top "50%"
                          :left "50%"
                          :transform "translate(-50%, -50%)"
                          :width "600px"
                          :max-width "100%"
                          :height "400px"
                          :max-height "100%"
                          :background-color :white
                          :z-index style/modal-layer})}
     [modal-content]]))

(defn modal-overlay []
  (when @state/modal-active-cursor
    [:div {:style {:z-index style/overlay-layer
                   :position :fixed
                   :top 0
                   :left 0
                   :width "100%"
                   :height "100%"
                   :background-color (:700 style/grey)
                   :opacity "35%"}
           :on-click #(swap! state/modal-active-cursor not)}]))

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
    [status-bar]
    [:hr {:style {:margin 0 :border (str "1px solid " (:500 style/grey)) :margin-top "2px"}}]
    [word-grid]
    [modal-overlay]
    [modal-container]]
   (js/document.getElementById "root")))


(defn init []
  (render-app)
  (responsive/watch-window))

(defn ^:dev/after-load start [] (render-app))