import passport from "passport";
import GitHubStrategy from "passport-github";
import InstagramStrategy from "passport-instagram";
import User from "./models/User";
import {
  githubLoginCallback,
  instagramLoginCallback
} from "./controller/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new InstagramStrategy(
    {
      clientID: process.env.IG_ID,
      clientSecret: process.env.IG_SECRET,
      callbackURL: `http://localhost:4000${routes.instagramCallback}`
    },
    instagramLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
