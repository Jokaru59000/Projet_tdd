const Article = require("../src/Article")

function addArticle(article, quantity) {
    if (!(article instanceof Article)){
        throw new Error("Ce n'est pas un article.")
    }

    if (typeof quantity != "number"){
        throw new Error("La quantité à ajouter doit être un nombre entier.")
    }
    
    if (quantity <= 0){
        throw new Error("La quantité à ajouter doit être supérieur à 0.")
    }
    if (quantity % 1 > 0){
        throw new Error("La quantité à ajouter doit être un nombre entier.")
    }
    if (quantity > 0){
        article.stock = quantity + article.stock
    }
    return article;
}

function getQuantityOf(article) {

}

function withdrawQuantityOf(article, quantity) {
    if (!(article instanceof Article)) {
        throw new Error("L'élément doit être un Article")
    }

    if (typeof quantity != 'number') {
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

function getReport() {
    let warningLimit = 10
}

module.exports = {
    addArticle,
    getQuantityOf,
    withdrawQuantityOf,
    getReport
}
