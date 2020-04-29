(ns codenames.style.responsive
  (:require [reagent.core :as rc]))

(declare window-breakpoint)

(defn match-media? [query] (. (. js/window matchMedia query) -matches))
(defn width-query [breakpoint] (str "(max-width: " (:breakpoint/width breakpoint) "px)"))

(def breakpoints
  [{:breakpoint/width 700
    :breakpoint/font-size "12px"}
   {:breakpoint/width 1200
    :breakpoint/font-size "25px"}
   {:breakpoint/width  1600
    :breakpoint/font-size "30px"}
   {:breakpoint/name :default
    :breakpoint/font-size "40px"}])

(defn detect-breakpoint []
  (first (filter (fn [breakpoint]
                   (or
                    (= :default (:breakpoint/name breakpoint))
                    (match-media? (width-query breakpoint))))
                 breakpoints)))

(defn window-resize-handler []
  (reset! window-breakpoint (detect-breakpoint)))

(def window-breakpoint (rc/atom (detect-breakpoint)))
(def font-size (rc/cursor window-breakpoint [:breakpoint/font-size]))

(defn watch-window [] (.addEventListener js/window "resize" window-resize-handler))

(comment
  @window-breakpoint)
