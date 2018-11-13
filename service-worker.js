let versao = 1

let arquivos = [
    "/",
    "https://unpkg.com/leaflet@1.0.3/dist/leaflet.css",
    "css/flatly/bootstrap.css",
    "app-images/images/icons/icon-512x512.png",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "font-awesome/css/font-awesome.min.css",
    "https://use.fontawesome.com/releases/v5.5.0/js/all.js",
    "https://code.jquery.com/jquery-3.2.1.min.js",
    "https://unpkg.com/leaflet@1.0.3/dist/leaflet.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
    "SpeechRecognition.js",
    "favicon_package/apple-touch-icon.png",
    "favicon_package/favicon-32x32.png",
    "favicon_package/favicon-16x16.png",
    "favicon_package/safari-pinned-tab.svg",
]

self.addEventListener("install", function () {
    console.log("Instalou")
})

self.addEventListener("activate", function () {
    caches.open("mapafacil-arquivos-" + versao).then(cache => {
        cache.addAll(arquivos)
            .then(function () {
                caches.delete("mapafacil-arquivos-" + (versao - 1))
                caches.delete("mapafacil-arquivos")
            })

    })
})


self.addEventListener("fetch", function (event) {

    let pedido = event.request
    let promiseResposta = caches.match(pedido).then(respostaCache => {
        let resposta = respostaCache ? respostaCache : fetch(pedido)
        return resposta
    })

    event.respondWith(promiseResposta)

})

