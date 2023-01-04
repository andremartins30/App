import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({message: 'Hello Dev'})
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando no http://localhost:${process.env.PORT}`)
})

