 var crypto =require('crypto')
  var mykey = crypto.createHash('sha256')
  var mystr = mykey.update('Man oh man do I love node!')
//  mystr +=mykey.digest('hex');
 //mystr +=mykey.digest('binary');
 mystr +=mykey.digest('binary64');






console.log(mystr);