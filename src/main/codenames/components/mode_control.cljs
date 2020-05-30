(ns codenames.components.mode-control
  (:require [codenames.state :as state]
            [codenames.style :as style]
            [re-com.core :refer [h-box box gap]]))

(defn base-style [selected]
  (merge {:border (str "1px solid " (style/grey :300))
          :cursor :pointer
          :padding "3px 5px"}
         (when selected style/elevation-low)
         (when-not selected {:background-color (style/grey :300)})))

(defn mode-control []
  (let [current-mode @state/mode-cursor
        guesser? (= :guesser current-mode)
        spymaster? (= :spymaster current-mode)]
    [box
     :child [h-box
             :align :center
             :children [[box :child [:strong "Mode"]]
                        [gap :size "5px"]
                        [box
                         :style (merge {:border-radius "3px 0 0 3px"}
                                       (base-style guesser?))
                         :attr {:on-click state/toggle-mode}
                         :child "Guesser"]
                        [box
                         :style (merge {:border-radius "0 3px 3px 0"}
                                       (base-style spymaster?))
                         :attr {:on-click state/toggle-mode}
                         :child "Spymaster"]]]]))