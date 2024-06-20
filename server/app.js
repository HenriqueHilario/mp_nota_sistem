const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 3005;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.engine("hbs", hbs.engine({
    defaultLayout: "main",
    extname: "hbs"
}));

app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "public")))

const indexRoute = require("./routes/indexRoute");
app.use("",indexRoute)

app.listen(PORT, () => {
    console.log("app is running")
})
