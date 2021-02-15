let backToTop = document.getElementById("back-top-btn")

let pageTop = document.documentElement

function scrollToTop() {
    pageTop.scrollTo({
        top: 0,
        behaviour: "smooth"
    })
}

backToTop.addEventListener("click", scrollToTop)