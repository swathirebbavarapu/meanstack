var crypto =require('crypto')
  var mykey = crypto.createHmac('sha256','password')
  var mystr = mykey.update('Man oh man do I love node!')
 //mystr +=mykey.digest('hex'); 
// O/P:[object Object]d177b696160ada8815f4349b65509624f3303f02034dabf977bb590df1960b05

mystr +=mykey.digest('binary'); 
//[object Object]�w�?
//�?4P?$�0?M��w�Y
 mystr +=mykey.digest('binary64');
//O/p:????D??P??T ?3?m?y??t???w




console.log(mystr);