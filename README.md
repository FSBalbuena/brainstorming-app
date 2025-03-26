## Migration

Migratinng from CRA to VITE

### 1. App must be running

- I needed nvm to use my prior node version, the one that works with current node-sass.
- dependency installation was done by `yarn --ignore-engines` to ignore engines for jest-dom.
- I forgot to create an `.env` file.

Now we have the app running.

### 2. Node must be at least @18.x.x to work with vite.

1. Migrate from `node-sass` and use `sass`
2. I upgraded react-scripts to 4.x and eslint to 7.11 (Node 16 works fine.)
3. I thought that maybe I could run a new CRA with Semantic UI project and check how dependencies are featured together, so I cleared semantic-ui, upgrade CRA related dependencies, and included semantic UI again following latests documentation.

Now I'm able to run the app on Node 22.

### 3. Migrate to vite

As I learned upgrading the app, my approach was to first run a new react/vite app and try to understand the current state of dependencies, and files.
Based on it, I followed the next steps:

- Deleted yarn.lock and node_modules then installed vite dev-dependencies
  `yarn add -D @eslint/js@^9.21.0 @types/react@^19.0.10 @types/react-dom@^19.0.4 @vitejs/plugin-react@^4.3.4 eslint@^9.21.0 eslint-plugin-react-hooks@^5.1.0 eslint-plugin-react-refresh@^0.4.19 globals@^15.15.0 vite@^6.2.0`
- I delete `yarn remove react-scripts`, removing CRA dependency.
- I remove craco scripts from `package.json` and added vite's, with a `test` one for later.
- I also deleted `browserslist` and `eslintConfig` from `package.json`
- I deleted my `jsconfig.json` because is no longer needed
- When using vite, enviromental variables are accessed differently:

```JS
process.env // with CRA
import.meta.env // with vite
```

And only the ones starting with `VITE_` are exposed to client. So I have to update my firebase config file, because at this point, this was a flacky demo app exposing keys to client.

- Vite search for our main `index.html` file on root level, so I moved `src/index.html` to `index.html` and updated public folder's routing and included a new `script` tag needed on vite.
- I created a `vite.config.js` file and added a `build` and `server` properties to match CRA's.

## Available Scripts

### Standars

### Brainstorming

A user can create a room and manage the brainstorming section on it.
