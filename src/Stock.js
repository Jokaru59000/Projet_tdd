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
