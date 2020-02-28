/**
 * https://alligator.io/nodejs/serving-static-files-in-express/
 * https://scotch.io/tutorials/use-expressjs-to-deliver-html-files
 * https://stackoverflow.com/questions/29357305/nodejs-express-include-local-js-file
 * https://stackoverflow.com/questions/56386307/loading-of-a-resource-blocked-by-content-security-policy
 * https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku */

 var express = require('express');
 var app = express();
 var path = require('path');
 
//  app.use(express.static("code"))
app.use(express.static(path.join(__dirname, '../../code/public/')));

 // viewed at http://localhost:8080
 app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '../../public/main.html'));
 });

//  app.get('/setup.html', function(req, res) {
//     res.sendFile(path.join(__dirname + '../../../setup.html'));
// });

//  app.get('/process.html', function(req, res) {
//     res.sendFile(path.join(__dirname + '../../../process.html'));
// });
 

// // const csp = require('express-csp-header');
// app.use(csp({
//     policies: {
//         'default-src': none,
//         'img-src': self,
//     }
// }));

 app.listen(process.env.PORT || 8080);