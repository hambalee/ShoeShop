import express from 'express'
import products from './data/Products.js'

const app = express()

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

app.get('/', (req, res) => {
    res.send("API is running ...")
})

app.listen(5000, () => {
    console.log("server running ...")
})