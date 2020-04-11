(ns codenames.random
  (:require [clojure.string :as str]))

(def modulus (Math/pow 2 32))
(def multiplier 134775813)
(def increment 1)

(defn step [in]
  (mod (+ (* multiplier in) increment) modulus))

(defn random-lazy-seq
  [seed limit]
  (let [stepped (step seed)
        out (if limit (mod stepped limit) stepped)]
    (lazy-seq (cons out (random-lazy-seq stepped limit)))))

(defn generator [seed limit] (random-lazy-seq seed limit))

(comment
  (step 5)
  (step (step 5))
  (take 2 (generator 5 nil))
  (take 2 (generator 5 5)))

(defn coerce-seed [seed]
  (if (string? seed)
    (hash (str/lower-case seed))
    seed))

(comment
  (hash "abc"))

(defn sample [collection amount seed]
  (loop [gen (generator (coerce-seed seed) (dec (count collection)))
         indices []
         sampled #{}]
    (if (= (count sampled) amount)
      (map #(nth collection %) indices)
      (let [[next-rn & rest-rn] gen
            already-generated? (sampled next-rn)]
        (if already-generated?
          (recur rest-rn indices sampled)
          (recur rest-rn (conj indices next-rn) (conj sampled next-rn)))))))

(comment
  (let [l (range 0 10)]
    [(sample l 2 5)
     (sample l 3 5)
     (sample l 4 5)
     (sample l 4 6)
     (sample l 2 "a")
     (sample l 5 "a")
     (sample l 5 1455541201)])
  (sample (range 10) 2 6)
  (range 10)
  10)
