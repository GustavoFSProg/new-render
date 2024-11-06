import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const { PORT } = process.env

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Api Running: ${PORT}`)
})

app.get('/', (req, res) => {
  // biome-ignore lint/style/noUnusedTemplateLiteral: <explanation>
  return res.status(200).send({ msg: `Api Running: ` })
})

export default app
