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
**Basic Vite Config**

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
- Vite does not allow `jsx` code in `js` extension files, so I needed to add `esbuild` and `optimizeDeps` properties to its config.
- Vite does not recognize the base url setting for src, so i needed to add aliases on config's `resolve` property.
- Now at days, code agents knows how to understand aliases changes, but VS code IntelliSense doesn't. In order to use VS code autocomplete, I needed to add a `jsconfig.json` again.

**Fix Styles**

- remove old styles dependencies `yarn remove @semantic-ui-react/craco-less @craco/craco`
- add `less` `yarn add -D less`
- Craco handled the scripts needed for CRA's internal use, in order to know how to work with semantic UI themes, now that I use Vite, I must handle that in the aliases, and change how theme reference files.
- I'm kinda using to different styling approaches here, because I have less with semantic-UI and custom styles with sass.
- I added `css` preprocesors configs to `vite.config.js` otherwise theme config fails.
- I needed to migrate node-sass api to new dart sass api. `$ npm install -g sass-migrator` to have it global for all my projects, and then use it like `sass-migrator module --migrate-deps <your-entrypoint.scss>`. You can execute this for each failing file too, and for example, on my end, i needed to change `@/data/..` to `../../data` again using the migrator, because does not understand aliases.

Now the app is running but I have "The CJS build of Vite's Node API is deprecated." warning, so I need to add a `"type":"module"` to `package.json`

## Available Scripts

### Standars

### Brainstorming

A user can create a room and manage the brainstorming section on it.
