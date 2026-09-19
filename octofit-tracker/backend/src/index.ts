import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const mongoUrl = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db'
const codespaceName = process.env.CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    baseUrl: apiBaseUrl,
  })
})

app.get('/api/users', (_request, response) => {
  response.json([])
})

app.get('/api/activities', (_request, response) => {
  response.json([])
})

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`OctoFit API listening at ${apiBaseUrl}`)
    })
  })
  .catch((error: unknown) => {
    console.error('Unable to connect to MongoDB', error)
    process.exitCode = 1
  })