(ns codenames.app
  (:require [reagent.dom :as rd]
            [codenames.components.card :refer [card]]
            [codenames.components.status-bar :refer [status-bar]]
            [codenames.components.modal :refer [modal-container modal-overlay]]
            [codenames.state :as state :refer [state]]
            [codenames.style :as style]
            [codenames.style.responsive :as responsive]
            [re-com.core :refer [v-box h-box gap]]))


(defn word-grid []
  [v-box
   :size "1"
   :min-width "700px"
   :align :center
   :gap "3vh"
   :children (->> (:words/map @state)
                  (map (fn [[index word]] [card index word]))
                  (partition 5)
                  (map (fn [ws] [h-box :size "20%" :width "100%" :gap "3vw" :children ws])))])

(defn render-app []
  (rd/render
   [v-box
    :style style/root-element-css
    :min-height "100vh"
    :children [[status-bar]
               [gap :size "2vh"]
               [h-box
                :size "1"
                :justify :center
                :children [[gap :size "0 1 10vw"] [word-grid] [gap :size "0 1 10vw"]]]
               [gap :size "2vh"]
               [modal-overlay]
               [modal-container]]]
   (js/document.getElementById "root")))


(defn init []
  (render-app)
  (responsive/watch-window))

(defn ^:dev/after-load start [] (render-app))