const express = require('express');
const morgan = require('morgan');
const createError = require("http-errors");
const connectDB = require("./config/db");
const {seedProducts} = require("./seeders/product.seeder");
const cors = require("cors");
const app = express();

// mongodb configuration
connectDB();
// seedProducts();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes config
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials:true, 
    optionsSuccessStatus: 200
}));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

const port = process.env.PORT || 3004;
app.listen(port, () => {
    console.log("Server running at port " + port);
});

module.exports = app;