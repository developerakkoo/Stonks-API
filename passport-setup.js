const GoogleStrategy = require('passport-google-oauth2').Strategy
require('dotenv').config();
const passport = require("passport");
const User = require('./model/users.model')

module.exports = function(passport) {
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT_URL,
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




// const passport = require("passport");
// const axios = require('axios');
// const User = require('./model/users.model')
// require('dotenv').config();

// const GoogleStrategy = require('passport-google-oauth2').Strategy

// passport.serializeUser(function(user, done){

//     done(null, user);
// })

// passport.deserializeUser(function(user, done){

//     done(null, user);
// })

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: process.env.GOOGLE_REDIRECT_URL,
//     // passReqToCallback: true
// },
//     async function( request,next,accessToken, refreshToken, profile, done){
    
//     console.log(profile)
//     // try{
//     const UserData = {name:profile.displayName, email:profile.emails[0].value , photo:profile.photos[0].value,token:accessToken}
//     console.log(UserData)
//     return done(null, profile)
//     // let data = JSON.stringify({
//     //     "email": UserData.email,
//     //     "name": UserData.name,
//     //     "photo": UserData.photo
//     //   });
//   //     const user = await User.findOne({
//   //       email:UserData.email,
//   //       name:UserData.name
//   //     });
//   //     if(user){
//   //       const err = new Error("User with this email or name already exist exists please try with different email");
//   //       err.status = 'fail';
//   //       err.statusCode = 404;
//   //       next(err)
//   //       // return res.status(400).send({message:"User with this email or name already exist exists please try with different email"})
//   //   }
//   //   const userCreated = await User.create(UserData)
//   //   const postResponse = {
//   //       email: userCreated.email,
//   //       name: userCreated.name,
        
//   //   }
//   //   done(null, profile)
//   //   res.status(201).send(postResponse)
//   //   }catch(error){
//   //     console.log("Something went wrong while saving to DB", error.message);
//   //     const err = new Error("Some internal error while inserting the element");
//   //     err.status = 'fail';
//   //     err.statusCode = 400;
//   //     next(err)
//   //   }

//   }
// ))



// // function create(data){
// //   let config = {
// //     method: 'post',
// //     maxBodyLength: Infinity,
// //     url: 'http://localhost:8000/App/api/v1/create',
// //     headers: { 
// //       'Content-Type': 'application/json'
// //     },
// //     data : data
// //   };
// //   axios.request(config)
// //   .then((response) => {
// //     console.log("Data inserted successfully.!",JSON.stringify(response.data));
// //     //
// //   })
// //   .catch((error) => {
// //     console.log(error);
    
// //   });
// // }
