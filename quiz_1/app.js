const express = require("express")
const path = require("path")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const clucksRouter = require("./routes/clucks")
const methodOverride = require("method-override")

const app = express()

app.set("view engine", "ejs")

app.use(logger('dev'))

app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride((req, res) => {
  if (req.body && req.body._method) {
    const method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use((req, res, next) => {
  res.locals.username = req.cookies.username || ""
  next()
})

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/sign_in", (req, res) => {
  res.render("signIn")
})

app.delete("/sign_out", (req, res) => {
  res.clearCookie("username")
  res.redirect("/")
})

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7
app.post("/sign_in", (req, res) => {
  console.log(req.body)
  res.cookie("username", req.body.username, { maxAge: COOKIE_MAX_AGE })
  res.redirect("/") 
})

app.use("/clucks", clucksRouter)

const PORT = process.env.PORT || 3000
const ADDRESS = "localhost"
const ENVIRONMENT = app.get('env') 

app.listen(PORT, ADDRESS, () => {
  console.log(`Server is listenning on http://${ADDRESS}:${PORT} in ${ENVIRONMENT}.`)
})