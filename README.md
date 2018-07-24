# Example Typescript Monorepo

The purpose of this repository is to provide a clear and concise Typescript architecture based on [clean architecture](https://www.microsoft.com/net/download/thank-you/aspnet-ebook) principles.

## Setup

- Clone the project
- Run `yarn`
- Run `yarn run watch` (builds the javascript from typescript)

You will need to run this before running the below commands for the seperate projects.

## React Native IOS

- In a new terminal run `yarn run native:start`
- In a new terminal run `yarn run native:ios`

## API
- run `yarn run api:start`

## Web
- run `yarn run web:start`

## Todo:

- React Native Android.
- Tests

## Working with React Native modules

I won't get into all the details , but I would recommend looking into yarns hoisting mechanism. [Check it out here](https://yarnpkg.com/blog/2018/02/15/nohoist/)

I think react-native + modules + yarn workspaces are working more nicely(make sure yarn is up to date). But if you have issues with modules being in the wrong place I would start there.