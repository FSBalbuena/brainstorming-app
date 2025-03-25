## Migration

Migratinng from CRA to VITE

# 1. App must be running

- I needed nvm to use my prior node version, the one that works with current node-sass.
- dependency installation was done by `yarn --ignore-engines` to ignore engines for jest-dom.
- I forgot to create an `.env` file.

Now we have the app running.

# 2. Node must be at least @18.x.x to work with vite.

- get rid of `node-sass` and use `sass`

## Available Scripts

### Standars

### Brainstorming

A user can create a room and manage the brainstorming section on it.
