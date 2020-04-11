(ns codenames.utils
  (:require [reagent.core :as rc]))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shadow [atom]
  (let [initial-value (rc/atom @atom)
        current-value (rc/atom @atom)]
    (rc/cursor
     (fn
       ([_k]
        (when-not (identical? @initial-value @atom) (reset! initial-value @atom) (reset! current-value @atom))
        @current-value)
       ([_k v] (reset! current-value v)))
     [])))

(comment
  (def outer-a (rc/atom 5))
  (def inner-a (shadow outer-a))
  @outer-a
  @inner-a
  (swap! inner-a inc)
  (reset! outer-a 2))