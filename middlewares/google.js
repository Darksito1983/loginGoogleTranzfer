import passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import { config } from "dotenv";
config();


passport.use(
    "auth-google",
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google',
        },
        function (request, accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }

    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});