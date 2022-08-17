import express from "express";
import passport from 'passport';
import { loginRouter } from "../routes/login.js";
import "../middlewares/google.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(passport.initialize());

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

// ROUTES
app.use("/auth", passport.authenticate("auth-google", {
  scope: [
    'email',
    'profile',
  ],
  session: false,
  successRedirect: 'http://localhost:3001',

}), loginRouter);


/*app.get('/protected', loginRouter, (req, res) => {
  res.send(`Hello`);
});*/

app.listen(3000, () => console.log("http://localhost:3000"));
