(function() {
    // recuperation de l'ele
    var menu = document.querySelector("[menu-fixe]")
        // craetion du faux element
    var fake = document.createElement("div")
        // ajouter la class menus dans notre element header
    menu.classList.add("menus")
        // recuperation de h et l de l'ele header
    var rect = menu.getBoundingClientRect()
    var height = rect.height
    var width = rect.width
        // on verifie que notre elements a bien etait ajouter
    var classe = menu.classList.contains("menus")
    if (classe) {
        menu.parentNode.insertBefore(fake, menu)
        fake.style.height = height + "px"
        fake.style.width = width + "px"
    }

    var Redimensionnement = function() {

        rect = menu.getBoundingClientRect()
        height = rect.height
        width = rect.width
        fake.style.height = height + "px"
        fake.style.width = width + "px"
    }

    window.addEventListener("resize", Redimensionnement)



})()