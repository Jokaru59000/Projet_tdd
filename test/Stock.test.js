const Article = require("../src/Article")
const {
    addArticle,
    getQuantityOf,
    withdrawQuantityOf,
    getReport
} = require("../src/Stock")

describe("En tant qu’utilisateur, je souhaite ajouter un article au stock : ", () => {

})

describe("En tant qu’utilisateur, je souhaite consulter la quantité d’un article : ", () => {

})

describe("En tant qu’utilisateur, je souhaite retirer une quantité donnée sur un stock : ", () => {
    test("Si l’élément demandé n’est pas un article, j’obtiens une erreur", () => {
        let article = { name: "ofje", stock: 15 }
        expect(() => withdrawQuantityOf(article, 1)).toThrow("Un article est attendu")

    })

    test("Si la quantité à retirer est supérieur au stock, j’obtiens une erreur", () => {
        let article = new Article("pomme", 15)
        expect(() => withdrawQuantityOf(article, 16)).toThrow("Stock insuffisant")
    })
    test("Si la quantité à retirer est négative, j’obtiens une erreur", () => {
        let article = new Article("pomme", 15)
        expect(() => withdrawQuantityOf(article, -10)).toThrow("Impossible de retirer une quantité négative")
    })
    test("Si la quantité à retirer est de 0, j’obtiens une erreur", () => {
        let article = new Article("pomme", 15)
        expect(() => withdrawQuantityOf(article, 0)).toThrow("Impossible de retirer 0")
    })
    test("Si la quantité à retirer n'est pas un entier, j’obtiens une erreur", () => {
        let article = new Article("pomme", 15)
        expect(() => withdrawQuantityOf(article, 1.5)).toThrow("Impossible de retirer 0")
    })
    test("Si la quantité à retirer est inférieur au stock, je retire la quantité au stock", () => {
        let article = new Article("pomme", 15)
        expect(withdrawQuantityOf(article, 5)).toBe(new Article("pomme", 10))
    })

})
describe("En tant qu’utilisateur, je souhaite obtenir un rapport sur les stocks restants : ", () => {
    test("Si aucune liste d’article n’est fournie, j’obtiens une erreur", () => {
        let lstArticle = []
        expect(() => getReport("fe,v")).toThrow("Un liste d'article est attendu")
    })
    test("Si aucune liste d’article n’est fournie, j’obtiens une erreur", () => {
        let lstArticle = []
        expect(() => getReport(lstArticle)).toThrow("Un liste est vide")
    })
    test("Si la liste contient des articles, afficher le nom et la quantité de chaque article ", () => {
        let lstArticle = [new Article("pomme", 15), new Article("poire", 10)]
        expect(getReport(lstArticle)).toMatch("/pomme 15; poire 10 /")
    })
})
