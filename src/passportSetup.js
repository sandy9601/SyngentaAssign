const passport=require('passport')
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const userModel=require("../src/model/user/userModel")

passport.use(new GoogleStrategy({
    clientID:    "135045554811-s816f3l51a85jtnmekk8b9latifvv0lb.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback   : true
  }, (async(request, accessToken, refreshToken, profile, done)=>{
    let findUser=await userModel.findOne({email:profile._json.email})
    if(!findUser){
      await userModel.create({email:profile._json.email,name:profile.displayName,outhLogin:true})
    }
  
    return done(null, profile);
  }) 
));


passport.serializeUser(function(user,done){
  done(null,user)
})
passport.deserializeUser(function(user,done){
  done(null,user)
})









// profile
// {
//   provider: 'google',
//   sub: '113716187547235266866',
//   id: '113716187547235266866',
//   displayName: 'Samir Lohiya',
//   name: { givenName: 'Samir', familyName: 'Lohiya' },
//   given_name: 'Samir',
//   family_name: 'Lohiya',
//   email_verified: true,
//   verified: true,
//   language: 'en-GB',
//   locale: undefined,
//   email: 'samirlohiya101@gmail.com',
//   emails: [ { value: 'samirlohiya101@gmail.com', type: 'account' } ],
//   photos: [
//     {
//       value: 'https://lh3.googleusercontent.com/a/ALm5wu2DxkSiOYRSiXqgCph54kAZoYwXj8yBkviLqSsB=s96-c',
//       type: 'default'
//     }
//   ],
//   picture: 'https://lh3.googleusercontent.com/a/ALm5wu2DxkSiOYRSiXqgCph54kAZoYwXj8yBkviLqSsB=s96-c',
//   _raw: '{\n' +
//     '  "sub": "113716187547235266866",\n' +
//     '  "name": "Samir Lohiya",\n' +
//     '  "given_name": "Samir",\n' +
//     '  "family_name": "Lohiya",\n' +
//     '  "picture": "https://lh3.googleusercontent.com/a/ALm5wu2DxkSiOYRSiXqgCph54kAZoYwXj8yBkviLqSsB\\u003ds96-c",\n' +
//     '  "email": "samirlohiya101@gmail.com",\n' +
//     '  "email_verified": true,\n' +
//     '  "locale": "en-GB"\n' +
//     '}',
//   _json: {
//     sub: '113716187547235266866',
//     name: 'Samir Lohiya',
//     given_name: 'Samir',
//     family_name: 'Lohiya',
//     picture: 'https://lh3.googleusercontent.com/a/ALm5wu2DxkSiOYRSiXqgCph54kAZoYwXj8yBkviLqSsB=s96-c',
//     email: 'samirlohiya101@gmail.com',
//     email_verified: true,
//     locale: 'en-GB'
//   }
// }