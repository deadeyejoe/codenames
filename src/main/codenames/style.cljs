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

(def teams
  {:none {:color (:900 grey) :background-color (:100 grey)}
   :red {:color (:light red) :background-color (:dark red)}
   :blue {:color (:light blue) :background-color (:dark blue)}
   :neutral {:color (:dark beige) :background-color (:light beige)}
   :assassin {:color (:200 grey) :background-color (:900 grey)}})

(def elevation-low {:box-shadow "0 4px 6px hsla(0, 0%, 0%, .2)"})
(def elevation-high {:box-shadow "0 15px 35px hsla(0, 0%, 0%, .2)"})

(def base-css
  {:font-family "arial"
   :background-color (:100 grey)
   :color (:900 grey)})


