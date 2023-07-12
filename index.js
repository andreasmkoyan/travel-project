const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const router = require("./routers/router");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8080;
const cors = require("cors");
const managerAuth = require("./middleware/passport");
const { managerRouter } = require("./routers/manager");
const { userRouter } = require("./routers/User");

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(cors());
app.use(
  session({
    secret: "topSecret",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require("./middleware/passport")(passport);

app.use("/", router);
app.use(
  "/manager",
  passport.authenticate("jwt", { session: false }),
  managerRouter
);
app.use("/user", passport.authenticate("jwt", { session: false }), userRouter);

app.listen(port, () => console.log(`listening  http://localhost:${port}`));

/** Միավոր՝ 18
 * /user/deleteMyTravel/:id - պետք է ստուգել որ լոգին եղած  user - ը միայն իր travel ները կարողանա ջնջի
 * /user/addUserTravel - լոգին եղած user - ի id ն պետք է server ում վերցնել
 * տեսնել այն ճանապարհորդությունները որոնցում գրանցված չի ------ Պահանջը սխալ է կատարված
 *
 */
