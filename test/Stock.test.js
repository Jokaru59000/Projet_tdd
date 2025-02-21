const Article = require("../src/Article")
const {
    addArticle,
    getQuantityOf,
    withdrawQuantityOf,
    getReport,
    setWarning,
    addHistory
} = require("../src/Stock")

describe("En tant qu’utilisateur, je souhaite ajouter un article au stock : ", () => {
    test("Si ce n’est pas un article, j’obtiens une erreur", () => {
        let article = { name: "azerty", stock: 123 }
        expect(() => addArticle(article, 1)).toThrow("Ce n'est pas un article.")
    });
    test("Si la quantité à ajouter n’est pas un nombre, j’obtiens une erreur", () => {
        let article = new Article("Livre", 10)
        expect(() => addArticle(article, "A")).toThrow("La quantité à ajouter doit être un nombre entier.")
    })
    test("Si la quantité à ajouter n’est pas un entier, j’obtiens une erreur", () => {
        let article = new Article("Livre", 10)
        expect(() => addArticle(article, 1.5)).toThrow("La quantité à ajouter doit être un nombre entier.")
    })
    test("Si la quantité à ajouter est de 0, j’obtiens un erreur", () => {
        let article = new Article("Livre", 10)
        expect(() => addArticle(article, 0)).toThrow("La quantité à ajouter doit être supérieur à 0.")
    })
    test("Si la quantité à ajouter est négative, j’obtiens une erreur", () => {
        let article = new Article("Livre", 10)
        expect(() => addArticle(article, -8)).toThrow("La quantité à ajouter doit être supérieur à 0.")
    })
    test("Si la quantité à ajouter est superieur à 0, la quantité est ajoutée au stock", () => {
        let article = new Article("Livre", 10)
        addArticle(article, 5)
        expect(article.stock).toBe(15)
    })

})

describe("En tant qu’utilisateur, je souhaite consulter la quantité d’un article : ", () => {
    test("Si l’élément demandé n’est pas un article, j’obtiens une erreur", () => {
        let article = { name: "azerty", stock: 123 }
        expect(() => getQuantityOf(article, 1)).toThrow("L'article demandé n'est pas un article.")
    });

    test("Si l’élément demandé est un article, j’obtiens la quantité de l'article", () => {
        let article = new Article("Livre", 10)
        expect(getQuantityOf(article)).toEqual(10)
    });
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
        expect(() => withdrawQuantityOf(article, -10)).toThrow("Impossible de retirer 0 ou moins article")
    })
    test("Si la quantité à retirer est de 0, j’obtiens une erreur", () => {
        let article = new Article("pomme", 15)
        expect(() => withdrawQuantityOf(article, 0)).toThrow("Impossible de retirer 0")
    })
    test("Si la quantité à retirer n'est pas un entier, j’obtiens une erreur", () => {
        let article = new Article("pomme", 15)
        expect(() => withdrawQuantityOf(article, 1.5)).toThrow("La quantité à ajouter doit être un nombre entier")
    })

    test("Si la quantité à retirer est inférieur au stock, je retire la quantité au stock", () => {
        let article = new Article("pomme", 15)
        expect(withdrawQuantityOf(article, 5).stock).toBe(10)
    })

})
describe("En tant qu’utilisateur, je souhaite obtenir un rapport sur les stocks restants : ", () => {
    test("Si aucune liste d’article n’est fournie, j’obtiens une erreur", () => {
        let lstArticle = ["ee", "eff"]
        expect(() => getReport(lstArticle)).toThrow("Une liste d'article est attendu")

        expect(() => getReport("fe,v")).toThrow("Une liste d'article est attendu")
    })
    test("Si la liste d’article contient 0 ou moins articles, j’obtiens une erreur", () => {
        let lstArticle = []
        expect(() => getReport(lstArticle)).toThrow("Au moins un article est attendu")
    })
    test("Si la liste contient des articles, afficher le nom et la quantité de chaque article ", () => {
        let lstArticle = [new Article("pomme", 15), new Article("poire", 10)]
        expect(getReport(lstArticle)).toMatch("pomme 15; poire 10;")
    })
    test("Si la quantité d’un article est inférieur ou égale au seuil, afficher une alerte", () => {
        let lstArticle = [new Article("pomme", 15), new Article("poire", 3)]
        expect(getReport(lstArticle)).toMatch(`pomme 15; poire 3 /!\\ Stock bientot vide/!\\;`)

        let lstArticle2 = [new Article("pomme", 15), new Article("poire", 5)]
        expect(getReport(lstArticle2)).toMatch(`pomme 15; poire 5 /!\\ Stock bientot vide/!\\;`)
    })
})

describe("En tant qu'utilisateur, je souhaite recevoir une alerte quand un article atteint un certain seuil après un mouvement", () => {
    test("Si le seuil n'est pas défini, j'obtiens une erreur", () => {
        let article = new Article("poire", 5)
        expect(() => setWarning(article)).toThrow("Un seuil est attendu")
        expect(() => setWarning(article, "test")).toThrow("Un seuil est attendu")
    })
    test("Si l'article n'est pas défini, j'obtiens une erreur", () => {
        let article = new Article("poire", 5)
        expect(() => setWarning({ name: "ofje", stock: 15 }, 12)).toThrow("Un article est attendu")
        expect(() => setWarning("ok", 15)).toThrow("Un article est attendu")
    })

    test("Si le seuil est négatif, j'obtiens une erreur", () => {
        let article = new Article("poire", 6, -5)

        expect(() => setWarning(article, -10)).toThrow("Le seuil doit être positif")
    })

    test("Si le seuil de l'article n'est pas atteint, j'obtiens rien", () => {
        let article = new Article("poire", 30)
        result = setWarning(article, 50)
        expect(result).toMatch(``)
    })


    test("Si le seuil de l'article est atteint, j'affiche un warning,", () => {
        let article = new Article("poire", 15)
        result = setWarning(article, 15)
        expect(result).toMatch(`/!\\ Stock bientot vide/!\\;`)
    })
})

describe("En tant qu’utilisateur, je souhaite pouvoir avoir un historique des mouvements des articles : ", () => {
    test("Si l'article n'est pas défini, j'obtiens une erreur", async () => {
        await expect(() => addHistory({ name: "ofje", stock: 15 }, 12)).rejects.toThrow("Un article est attendu")
    })
    test("Si le nom ou la quantité d'un article est manquant, j'obtiens un erreur", async () => {
        const article = new Article("", 15)
        const article2 = new Article("Livre")
        await expect(() => addHistory(article)).rejects.toThrow("Il faut renseigner le nom et la quantité de l'article.");
        await expect(() => addHistory(article2)).rejects.toThrow("Il faut renseigner le nom et la quantité de l'article.");
    })

    test("Si l'application n'a pas de droit en écriture sur le systeme, j'obtiens une erreur", async () => {
        const article = new Article("Livre", 20)

        await expect(addHistory(article, 10)).rejects.toThrow("ENOENT: no such file or directory, access '/history/history.csv'")
    })
})
