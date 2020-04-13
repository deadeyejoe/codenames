(ns codenames.style)

(def grey
  {:100 "hsl(0, 0%, 98%)"
   :200 "hsl(0, 0%, 90%)"
   :300 "hsl(0, 0%, 80%)"
   :400 "hsl(0, 0%, 70%)"
   :500 "hsl(0, 0%, 60%)"
   :600 "hsl(0, 0%, 50%)"
   :700 "hsl(0, 0%, 40%)"
   :800 "hsl(0, 0%, 25%)"
   :900 "hsl(0, 0%, 10%)"})

(def red
  {:light "hsl(350, 100%, 96%)"
   :dark "hsl(350, 100%, 28%)"})

(def blue
  {:light "hsl(220, 100%, 95%)"
   :dark "hsl(220, 100%, 18%)"})

(def beige
  {:light "hsl(50, 100%, 90%)"
   :dark "hsl(40, 100%, 25%)"})

(def teams {:none {:team/shorthand "X"
                   :style/border {:border (str "1px solid " (:200 grey))}
                   :style/button {:color "hsl(0, 0%, 10%)"
                                  :background-color "hsl(0, 0%, 98%)"}
                   :style/text {:color (:900 grey)}}
            :red {:team/shorthand "R"
                  :style/button {:color "hsl(350, 100%, 96%)"
                                 :background-color "hsl(350, 100%, 28%)"}
                  :style/text {:color (:dark red)}}
            :blue {:team/shorthand "B"
                   :style/button {:color "hsl(220, 100%, 95%)"
                                  :background-color "hsl(220, 100%, 18%)"}
                   :style/text {:color (:dark blue)}}
            :neutral {:team/shorthand "N"
                      :style/button {:color "hsl(40, 100%, 25%)"
                                     :background-color "hsl(50, 100%, 90%)"}
                      :style/text {:color (:dark beige)}}
            :assassin {:team/shorthand "A"
                       :style/button {:color "hsl(0, 0%, 90%)"
                                      :background-color "hsl(0, 0%, 10%)"}
                       :style/text {:color (:900 grey)}}})

(def elevation-low {:box-shadow "0 4px 6px hsla(0, 0%, 0%, .2)"})
(def elevation-high {:box-shadow "0 15px 35px hsla(0, 0%, 0%, .2)"})

(def root-element-css
  {:font-family "arial"
   :background-color (:100 grey)
   :color (:900 grey)})


