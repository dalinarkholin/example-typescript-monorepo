# Steps to Reproduce react-native error: This repo was working pre-react-native eject.

- `cd example-typescript-monorepo`
- `rm -rf node_modules api/node_modules infrastructure/node_modules core/node_modules native/node_modules`
- `yarn`
- `yarn run watch` builds js from typescript and watches for changes
- open another terminal tab and `yarn run native` (runs a sym link script and clears cache. Note you will have to repeat steps 2 and 3 to do this again).
- `yarn run ios` to run cd into native folder and run react-native run-ios.