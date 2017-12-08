module.exports = {

   //mongoUri: 'mongodb://localhost:27017/project',
    // or use 
     mongoUri: 'mongodb://admin:password@ds133746.mlab.com:33746/marsshop',
    debug: true,
    sessionSecret: 'dev_secret_key',
    
    google: {
      clientID: '98896871793-bdekdb22i6gpsnai9moccugnpv88i21v.apps.googleusercontent.com',
      clientSecret: 'V9TKaf-6J9ieiwHsRsxLB24R',
      callbackURL: 'http://localhost:3000/oauth/google/callback'
},
twitter: {
  clientID: 'xMmRqQb9CC5yfCsEf6IM643lr',
  clientSecret: 'CgFLR4A0UDFZFTCJeglMvanaHvePXBqiVX6kh7cklNsemeWnov',
  callbackURL: 'http://marsshop.herokuapp.com/oauth/twitter/callback'
}
}