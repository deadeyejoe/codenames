(ns codenames.components.button
  (:require [codenames.style :as style]))

(defn button [text click-handler]
  [:div {:style (merge {:cursor :pointer
                        :border-radius "3px"
                        :border (str "1px solid " (:300 style/grey))
                        :padding "2px 5px"}
                       style/elevation-button)
         :on-click click-handler}
   text])