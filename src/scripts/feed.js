class feed {
    static createCard(urlImage, name, caption, downloadName) {
        const feed = document.querySelector(".feed")
        const card = document.createElement("li")
        const cardHeader = document.createElement("div")
        const cardProfile = document.createElement("img")
        const cardName = document.createElement("h2")
        const cardPhoto = document.createElement("img")
        const cardButtons = document.createElement("div")
        const cardContent = document.createElement("div")
        const cardIconHeart = document.createElement("img")
        const cardDownload = document.createElement("a")
        const cardIconDownload = document.createElement("img")
        const cardCaption = document.createElement("p")

        card.classList.add("card")
        cardHeader.classList.add("header_card")
        cardButtons.classList.add("buttons_card")
        cardContent.classList.add("content")
        
        cardProfile.setAttribute("id", "profile")
        cardDownload.setAttribute("download", downloadName)

        cardDownload.href = urlImage

        cardProfile.src = "./src/assets/logo-avidus.png"
        cardPhoto.src = urlImage
        cardIconHeart.src = "./src/assets/heart-icon.png"
        cardIconDownload.src = "./src/assets/download-icon.png"

        cardName.innerText = "Avidus"

        cardHeader.append(cardProfile)
        cardHeader.append(cardName)
        cardDownload.append(cardIconDownload)
        cardContent.append(cardIconHeart)
        cardContent.append(cardDownload)
        cardButtons.append(cardContent)

        cardCaption.innerHTML = `<strong>${name}<strong> ${caption}`

        card.append(cardHeader)
        card.append(cardPhoto)
        card.append(cardButtons)
        card.append(cardCaption)

        feed.append(card)
    }

    static listCards() {
        for (let i = 1; i <= 5; i++){
            feed.createCard(`./src/assets/feed/image${i}.jpeg`, "Santa Teresa de Calcutá", "As palavras de amizade e conforto podem ser curtas e sucintas, mas o seu eco é infidável.", `image${i}`)
        }

    }

    static exit() {
        const btn = document.querySelector(".exit")

        btn.addEventListener("click", e => {
            window.location.href = "index.html"
        })
    }
}

feed.listCards()
feed.exit()