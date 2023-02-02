import express from 'express'
import connectDB from './config/db.js'
import products from'./data/products.js'
import dotenv from 'dotenv'
import colors from 'colors'


dotenv.config()
const app = express();

connectDB()

app.get('/',(req, res)=> {
    res.send('API is running like the wind ')
})

app.get('/api/products',(req, res)=> {
    res.json(products)
    
})
app.get('/api/products/:id',(req, res)=> {
    const product =products.find(p =>p._id  === req.params.id)
    res.json(product)
    
})
const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold))