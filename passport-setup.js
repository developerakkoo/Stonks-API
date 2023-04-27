const passport = require("passport");
const axios = require('axios');
require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.serializeUser(function(user, done){

    done(null, user);
})

passport.deserializeUser(function(user, done){

    done(null, user);
})

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT_URL,
    passReqToCallback: true
},function(request, accessToken, refreshToken, profile, done){
    console.log(profile)
    const UserData = {name:profile.displayName, email:profile.emails[0].value , photo:profile.photos[0].value,token:accessToken}
    console.log(UserData)
    let data = JSON.stringify({
        "email": UserData.email,
        "name": UserData.name,
        "photo": UserData.photo
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8000/App/api/v1/create',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log("Data inserted successfully.!",JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
    return done(null, profile)
}
))




