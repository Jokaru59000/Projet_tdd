const Article = require("../src/Article")

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

function getQuantityOf(article,id) {
    if(!(article instanceof Article)){
        throw new Error("L'article demandé n'est pas un article.")
    }
    if (article instanceof Article){
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

module.exports = {
    addArticle,
    getQuantityOf,
    withdrawQuantityOf,
    getReport
}
