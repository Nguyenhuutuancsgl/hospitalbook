const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const { engine } = require("express-handlebars");
const path = require("path");

const SortMiddleware = require("./app/middlewares/sortMiddleware");

const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.use(methodOverride("_method"));

//custom middleware xử lí sx
app.use(SortMiddleware);

// Http logger middleware
app.use(morgan("combined"));

// Template engine setup
app.engine(
    ".hbs",
    engine({ extname: ".hbs", helpers: require("./helpers/handlebar") })
);
app.set("view engine", ".hbs");
app.set("views", "./src/resources/views");

//routes init
route(app);

app.listen(port, () => {
    console.log(` app listening on port ${port}`);
});
