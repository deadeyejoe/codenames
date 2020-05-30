(ns codenames.components.modal
  (:require
   [codenames.state :as state]
   [codenames.style :as style]
   [codenames.components.mode-control :refer [mode-control]]
   [codenames.components.button :refer [button]]
   [codenames.utils :as u]
   [reagent.core :as rc]
   [re-com.core :refer [h-box v-box box gap]]))

(declare modal-overlay modal-container modal-content)

(defn toggle-modal [] (swap! state/modal-active-cursor not))

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
           :on-click toggle-modal}]))

(defn modal-container []
  (when @state/modal-active-cursor
    [:div {:style {:z-index style/modal-layer
                   :position :fixed
                   :top "50%"
                   :left "50%"
                   :transform "translate(-50%, -50%)"
                   :width "600px"
                   :max-width "100%"
                   :height "400px"
                   :max-height "100%"
                   :background-color :white}}
     [box
      :height "360px"
      :margin "10px"
      :padding "10px"
      :style {:border (str "1px solid " (style/grey :300))}
      :child [modal-content]]]))

(defn modal-content []
  (let [word-atom (rc/atom @state/word-seed-cursor)
        key-atom (rc/atom @state/key-seed-cursor)]
    [v-box
     :size "1"
     :justify :between
     :gap "1"
     :children [[h-box :children [[gap :size "1"] [box :size "2" :child [mode-control]]]]
                [h-box
                 :size "1"
                 :align :center
                 :gap "10px"
                 :children [[box :size "1" :justify :end :child [:strong "Word Seed"]]
                            [box :size "2" :child [u/atom-input word-atom]]]]
                [h-box
                 :size "1"
                 :align :center
                 :gap "10px"
                 :children (if (= @state/mode-cursor :spymaster)
                             [[box :size "1" :justify :end :child [:strong "Key Seed"]]
                              [box :size "2" :child [u/atom-input key-atom]]]
                             [])]
                [h-box
                 :justify :end
                 :gap "5px"
                 :children [[button "Set" #(state/set-seed @word-atom @key-atom)]
                            [button  "Cancel" toggle-modal]]]]]))