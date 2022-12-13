# Rubicon challenge

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

Welcome to Rubicon challenge task

### Local setup

```sh
git clone
```

After git clone, change directory to project folder run command below to install needed dependencies

```sh
npm install
```
After `npm install` is done, run command below to run the app

```sh 
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

``` sh
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Project Architecture
- `Src -> Pages` - page components
- `Src -> Components` - components from which we build pages (mini atomic design)
- `Src -> Enums` - enums we use as "string" managements
- `Src -> Interfaces` - interfaces for components and objects we need
- `Src -> Reducers` - registered reducers for redux
- `Src -> utils.tsx` - file for API fetching methods

