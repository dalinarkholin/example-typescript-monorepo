# Update 01/29/2020
I would avoid using this project until it has been updated to use Yarn V2. For those wanting to use a typescript monorepo look into Yarn V2. It solves most of the problems this repo tries to solve.

# Example Typescript Monorepo

The purpose of this repository is to provide a clear and concise Typescript architecture based on [clean architecture](https://www.microsoft.com/net/download/thank-you/aspnet-ebook) principles.

## Setup

* Clone the project
* Run `yarn`
* Run `yarn run watch` (builds the javascript from typescript)

You will need to run this before running the below commands for the separate projects.

## React Native IOS

* In a new terminal run `yarn run native:start`
* In a new terminal run `yarn run native:ios`

## API
* run `yarn run api:start` (http://localhost:9229)

## Web
* run `yarn run web:start` (http://localhost:8080)

## Todo:

* React Native Android.
* Tests

## Working with React Native modules

I won't get into all the details , but I would recommend looking into yarns hoisting mechanism. [Check it out here](https://yarnpkg.com/blog/2018/02/15/nohoist/)

I think react-native + modules + yarn workspaces are working more nicely(make sure yarn is up to date). But if you have issues with modules being in the wrong place I would start there.

## Adding a Second Native IOS Project

Please note this steps are mostly untested, and I can't recommend you use this repository for this approach. However, I will support as best as I can.

* checkout a new branch
* copy the `native` folder and paste it into `/packages`
* rename the new folder to your app name, or however you like
* `cd packages/newNativePackage`
* `npm install react-native-rename -g`
* `react-native-rename newNativePackageName` (this can be different from folder name)
* Modify existing `/native/` paths to `/newNativePackage/`
  * including:
    * /package.json (copy paste scripts relating to native and rename the commands and paths associated to `newNativePackage`)
    * Globally search for `/native` and `native/` in newNativePackage and rename those to newNativePackage. (ignore the ios files(I think))
* `cd packages/native` and run react-native upgrade (not sure this is nessasary) *Say yes to everything except .babelrc*
* `cd packages/newNativePackage` and run `react-native upgrade` (not sure this is nessasary) *Say yes to everything except .babelrc*
* In both native projects delete the `ios/build` folders.
* Open the projects one at a time in xcode and build/fix signing certs, etc.
* Try running the projects via package.json scripts.