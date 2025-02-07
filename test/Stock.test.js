const Article = require("../src/Article")
const {
    addArticle,
    getQuantityOf,
    withdrawQuantityOf,
    getReport
} = require("../src/Stock")

describe("En tant qu’utilisateur, je souhaite ajouter un article au stock : ", () => {
    test("Si ce n’est pas un article, j’obtiens une erreur", () => {
        let article = {name :"azerty", stock:123}
        expect(()=>addArticle(article,1)).toThrow("Ce n'est pas un article.")
    });
    test("Si la quantité à ajouter n’est pas défini, j'obtiens une erreur", () => {
        let article = new Article("Planche", 1)
        expect(()=>addArticle(article,undefined)).toThrow("La quantité à ajouter à ajouter n'est pas définie.")
    })
    test("Si la quantité à ajouter n’est pas un nombre, j’obtiens une erreur", () => {
        let article = new Article("Livre",10)
        expect(()=>addArticle(article,"A")).toThrow("La quantité à ajouter doit être un nombre.")
    })
    test("Si la quantité à ajouter n’est pas un entier, j’obtiens une erreur", () => {
        let article = new Article("Livre",10)
        expect(()=>addArticle(article,1.5)).toThrow("La quantité à ajouter doit être un entier.")
    })
    test("Si la quantité à ajouter est de 0, j’obtiens un erreur", () => {
        let article = new Article("Livre",10)
        expect(()=>addArticle(article,0)).toThrow("La quantité à ajouter doit être supérieur à 0.")
    })
    test("Si la quantité à ajouter est négative, j’obtiens une erreur", () => {
        let article = new Article("Livre",10)
        expect(()=>addArticle(article,-8)).toThrow("La quantité à ajouter doit être une valeure entière et positive")
    })
    test("Si la quantité à ajouter est superieur à 0, la quantité est ajoutée au stock", () => {
        let article = new Article("Livre",10)
        expect(addArticle(article,5)).toEqual(new Article("Livre",15))
    })

})

describe("En tant qu’utilisateur, je souhaite consulter la quantité d’un article : ", () => {

})

describe("En tant qu’utilisateur, je souhaite retirer un article au stock : ", () => {

})
describe("En tant qu’utilisateur, je souhaite obtenir un rapport sur les stocks restants : ", () => {

})
