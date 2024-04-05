class LandingPage {
    static buttonRedirection() {
        const btn = document.getElementById("redirection")

        btn.addEventListener("click", e => {
            window.location.href = "feed.html"
        })
    }
}

LandingPage.buttonRedirection()