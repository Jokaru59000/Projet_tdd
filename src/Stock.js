const Article = require("../src/Article")
const fs = require("fs/promises")

function addArticle(article, quantity) {
    if (!(article instanceof Article)) {
        throw new Error("Ce n'est pas un article.")
    }

    if (typeof quantity != "number") {
        throw new Error("La quantité à ajouter doit être un nombre entier.")
    }

    if (quantity <= 0) {
        throw new Error("La quantité à ajouter doit être supérieur à 0.")
    }
    if (quantity % 1 > 0) {
        throw new Error("La quantité à ajouter doit être un nombre entier.")
    }
    if (quantity > 0) {
        article.stock = quantity + article.stock
    }
    return article;
}

function getQuantityOf(article, id) {
    if (!(article instanceof Article)) {
        throw new Error("L'article demandé n'est pas un article.")
    }
    if (article instanceof Article) {
        return article.stock
    }
    return article.stock;
}

function withdrawQuantityOf(article, quantity) {
    if (!(article instanceof Article)) {
        throw new Error("Un article est attendu")
    }

    if (typeof quantity != 'number' || !Number.isInteger(quantity)) {
        throw new Error("La quantité à ajouter doit être un nombre entier")
    }
    if (quantity > article.stock) {
        throw new Error("Stock insuffisant")
    }


    if (quantity <= 0) {
        throw new Error("Impossible de retirer 0 ou moins article")
    }

    article.stock = article.stock - quantity
    try {
        const warning = setWarning(article, 10)
        console.log(warning)
    } catch (e) {
        console.log(e.message)
    }
    return article
}

function getReport(lstArticle) {
    let warningLimit = 10
    if (!(Array.isArray(lstArticle) && lstArticle.every((article) => article instanceof Article))) {
        throw new Error("Une liste d'article est attendu")
    }

    if (lstArticle.length <= 0) {
        throw new Error("Au moins un article est attendu")
    }

    let report = "";
    lstArticle.forEach((article => {
        const warniing = (article.stock <= article.threshold) ? " /!\\ Stock bientot vide/!\\" : ''
        report += `${article.name} ${article.stock}${warniing}; `
    }))

    return report
}

function setWarning(article, threshold) {
    if (typeof threshold != "number" || threshold == 'undefined') {
        throw new Error("Un seuil est attendu")
    }
    if (!(article instanceof Article)) {
        throw new Error("Un article est attendu")
    }
    if (threshold <= 0) {
        throw new Error("Le seuil doit être positif")
    }
    if (threshold == 'undefined') {
        throw new Error("Un seuil est attendu")
    }
    if (article.stock <= threshold) {
        return "/!\\ Stock bientot vide/!\\;"
    }
    return ""
}

async function addHistory(article, qte) {
    if (!(article instanceof Article)) { 
        throw new Error("Un article est attendu")
    }

    if (!article.name || typeof article.name !== 'string' || article.name.length === 0) {
        throw new Error("Il faut renseigner le nom et la quantité de l'article.")
    }

    if (typeof qte !== 'number' || qte === undefined) {
        throw new Error("Il faut renseigner le nom et la quantité de l'article.")
    }

    try {
        try {
            await fs.access("/history")
        } catch {
            await fs.mkdir("/history")
        }

        const fichier = await fs.open("/history/history.csv", "a")
        await fichier.write(`${article.name},${qte},${new Date().toISOString()}\n`)
        await fichier.close()

    } catch (e) {
        throw new Error(e.message)
    }
}
module.exports = {
    addArticle,
    getQuantityOf,
    withdrawQuantityOf,
    getReport,
    setWarning,
    addHistory
}
