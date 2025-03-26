## Migration

Migratinng from CRA to VITE

# 1. App must be running

- I needed nvm to use my prior node version, the one that works with current node-sass.
- dependency installation was done by `yarn --ignore-engines` to ignore engines for jest-dom.
- I forgot to create an `.env` file.

Now we have the app running.

# 2. Node must be at least @18.x.x to work with vite.

1. Migrate from `node-sass` and use `sass`
2. I upgraded react-scripts to 4.x and eslint to 7.11 (Node 16 works fine.)
3. I thought that maybe I could run a new CRA with Semantic UI project and check how dependencies are featured together, so I cleared semantic-ui, upgrade CRA related dependencies, and included semantic UI again following latests documentation.

Now I'm able to run the app on Node 22.

## Available Scripts

### Standars

### Brainstorming

A user can create a room and manage the brainstorming section on it.
