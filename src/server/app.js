
// Module dependencies.
var application_root = __dirname,
express = require( 'express' ),
vhost = require( 'vhost' );
var path = require('path')
var serveStatic = require('serve-static')
// function createVirtualHost(domainName, dirPath) {
//     return vhost(domainName, express.static( dirPath ));
// }

// Create parent app
var app = express();

// Create separate apps for subdomains
var tomatoApp = express();
tomatoApp.use(serveStatic(path.join(__dirname, '../tomato')))
var potatoApp = express();
potatoApp.use(serveStatic(path.join(__dirname, '../potato')))

// Create the virtual hosts
var potatoHost = vhost("potato.localhost", potatoApp);
var tomatoHost = vhost("tomato.localhost", tomatoApp);

// Use the virtual hosts
app.use(potatoHost);
app.use(tomatoHost);

// Start server
var port = 8000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});