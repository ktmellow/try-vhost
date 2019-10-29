## About
```
Small project to serve different front-end apps via subdomains. Both share backend routes. 
```

## Setup
```
npm install

change computer's hosts file to include
127.0.0.1 potato.localhost
127.0.0.1 tomato.localhost
```

## Demo
```
  npm start
  potato.localhost:8000  => 'potato'
  tomato.localhost:8000  => 'tomato'
```