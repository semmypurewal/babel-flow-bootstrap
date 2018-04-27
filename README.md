This is a minimal setup for Flow and ES2015 via babel. It's not production ready, but it should be a good launching point if you want to play around.

Install deps:
```
npm install
```

Build:
```
npm build
```

Run:
```
node ./lib/main.js
```

The main entry point for the code is `./src/app-main.js`. The `./src/main.js` file is used to load the babel polyfill which is required for async/await.