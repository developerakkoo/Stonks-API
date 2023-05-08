const GoogleStrategy = require('passport-google-oauth2').Strategy
require('dotenv').config();
const passport = require("passport");
const User = require('./model/users.model')

module.exports = function(passport) {
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // callbackURL: process.env.GOOGLE_REDIRECT_URL,
    callbackURL: process.env.GOOGLE_REDIRECT_URL_PRODUCTION,
    // passReqToCallback: true
},
async function(request, accessToken, refreshToken, profile, done){
    // console.log(profile)
    const UserData = {googleId:profile.id,name:profile.displayName, email:profile.emails[0].value , photo:profile.photos[0].value,token:accessToken}
    console.log(UserData)
    try{
      let user =  await User.findOne({email:profile.emails[0].value})
      if (user){
        done(null, user)
      }else{
        user = await User.create(UserData)
        done(null,user)
      }
    }catch(err){
      console.alert("user exist")
      console.error(err)
    }
    done(null, profile)
  }
))


passport.serializeUser(function (user, done) {
  done(null, user.id);
});


passport.deserializeUser(function (id, done) {
  return done(null, id);     
  // await User.findOne(id).then ( (err, user) => done(err, user))
});
}

