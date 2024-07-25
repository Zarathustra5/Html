if('serviceWorker' in navigator){
  navigator.serviceWorker.register("js/sw.js")
    .then(() => console.log("Ok"))
    .catch(() => console.log("Error"))
}
