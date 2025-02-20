class Article {
    constructor(name, stock, threshold = 5) {
        this.name = name
        this.stock = stock
        this.threshold = threshold
    }
}

module.exports = Article