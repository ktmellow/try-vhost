
// Module dependencies.
express = require( 'express' ),
vhost = require( 'vhost' ),
path = require('path');

// Create parent app
var app = express();

// Create separate apps for subdomains
var tomatoApp = express();
tomatoApp.get('/', (req, res) => {
    res.sendFile(path.resolve('./src/client/tomato/index.html'));
})
var potatoApp = express();
potatoApp.get('/', (req, res) => {
    res.sendFile(path.resolve('./src/client/potato/index.html'));
})

// Create the virtual hosts
var potatoHost = vhost("potato.localhost", potatoApp);
var tomatoHost = vhost("tomato.localhost", tomatoApp);

// Use the virtual hosts
app.use(potatoHost);
app.use(tomatoHost);

app.get('/healthcheck', (req, res) => res.end(JSON.stringify({ status: 'ok' })))

// Add api to both subdomain apps here
const router = require('./router');
app.use('/api/', router)

// Start server
var port = 8000;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});
