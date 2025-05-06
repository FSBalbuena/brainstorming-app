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

**Adding linterns**

- The eslint config file is a copy from the react-vite example.
- on `eslint.config.js` need to extend the `globals` used, for node, and jest.
- fix lint errors
- Remove `craco.config` file because is no longer used

**Adding tests**

- `yarn add -D jest jest-environment-jsdom`
- I remove enzyme because is outdated.`yarn remove enzyme enzyme-adapter-react-16 jest-enzyme`
- Re-organize my test dependencies

```bash
yarn remove @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event

yarn add -D @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

- create a config file for jest `yarn create jest`
- add babel config file and preset dependencies `yarn add -D @babel/preset-react @babel/preset-env` and place it as `cjs`
- remove enzyme from setupFile.
- Add configs for `collectCoverageFrom` `coverageReporters` `coveragePathIgnorePatterns`
- Isolate `setupTests.js` and rename `src/utils/test.js` to avoid matching
- disable all tests, in order to re-write each one of them with rtl.
- our app alliases are not resolved by jest, I must add them AND our styles, could not be managed, so in order to return an empty object I can use `identity-obj-proxy`

```js
//jest.config.js
{
  //...config,
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  }
}
```

- add `verbose:true` in order to find legacy errors
- add `"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js"` to `moduleNameMapper` for png
- I needed to mock `uuid` and in order to do it, I must include a mock file, under `__mocks__` and reference it on `jest.config.js` (`moduleNameMapper`)
- I'm not using enzyme anymore, and want to later test my app integrated to redux's store, so I started to test `app.js` with their providers, just a snapshot. My store config uses `BrainstormingApi` an instance of `BranstormingService` class where I have all my declared methods to use firebase real time. As I do not want to call firebase directly, I must include a mock file for this class, update jest.config.js to reference it, and also call it with alias `@/...` in order to match the new `moduleNameMapper` config.

### Clean up

- `yarn remove web-vitals moxios @babel/runtime` are not used.

## Available Scripts

- In order to install dependencies:
  `yarn`
- run dev server
  `yarn dev`
- run lint
  `yarn lint`
- run tests
  `yarn test`
- test a particular file
  `yarn test <file_relative_path>`

## Brainstorming

1. Create a new session
2. Share the link with your team
3. Allow everyone to add ideas
4. click on the next step, where only you are able to score ideas.
5. Advance to the next step and download your session as a CVS file.

## Adding typescript.
- add dependencies
`yarn add -D @types/jest @types/node @types/react @types/react-dom typescript`
- Add config files: Copying the current structure for a vite/ts project.
- Add aliases support `yarn add -D vite-tsconfig-paths`
- Update vite.config.ts to Enforce configuration by tsconfig file: move from `build` folder to a common `dist`
- We are going to use the same ts config structure as a new vite project and that is:
  - `tsconfig.json` This is the main config file
  - `tsconfig.app.json` This is the configuration for your application code — mostly the stuff used in the browser, like React components.
  - `tsconfig.node.json` This is for Node-specific code, lets Node-compatible tooling (e.g. Vite, ESLint, scripts) use a TypeScript config with appropriate settings, and avoids problems with ESM vs CommonJS when dealing with Node environments.
- Change files extensions under `/src`
- Update test config: we can drop Babel entirely and just use ts-jest, a transformer that compiles TypeScript code in Jest... unless:
  - You’re using non-standard syntax TypeScript can’t handle (like custom Babel plugins).
  - You need some Babel transforms that ts-jest doesn’t support (rare).
- Keep semantic ui aliases, and @ paths because are used on scss files, and css preprocessor does not understand it. 
- keep preprocessorOptions on viteconfig, because is related to vite's build process.
- Keep consistency on commonJs and ESM in test mocks

### Gradual opt-in
we start strict but don't block the app from running due to TS errors:
Run app with TypeScript errors allowed, so I can:

- Check if aliases and imports resolve

- See if the app renders and behaves as expected

- Gradually fix TypeScript errors later

## Going serverless
- Update brainstorming app
- Create a route for each session need
- Use `firebase-admin` for writing and `firebase` to subscribe.

## Next steps

- Upgrade dependencies
- Refactor code to use firebase with vercel server functions
- Add strict mode on typescript
- Refactor legacy code
- Add E2E testing and extend coverage.
- Add internationalization.
- Add CI/CD
