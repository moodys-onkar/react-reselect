Reference:

https://redux.js.org/usage/deriving-data-selectors

Reselect provides a function called createSelector to generate memoized selectors. createSelector accepts one or more "input selector" functions, plus an "output selector" function, and returns a new selector function for you to use.

createSelector is included as part of our official Redux Toolkit package, and is re-exported for ease of use.

createSelector can accept multiple input selectors, which can be provided as separate arguments or as an array. The results from all the input selectors are provided as separate arguments to the output selector.

## Technologies

- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://github.com/css-modules/css-modules)
