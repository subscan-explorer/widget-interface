# Subscan Lowcode

✨ This is a Subscan Lowcode Platform.

## Struct

```
src
 ┣ components  # react components
 ┣ config
 ┃ ┣ constants.ts
 ┃ ┗ runtime.ts  # editor default configured components libs
 ┣ editor  # editor interface
 ┃ ┣ LocalStorageManager.ts
 ┃ ┣ index.tsx
 ┃ ┗ services.ts # pro.subscan.io api
 ┣ hooks  # react hooks
 ┃ ┗ useStateValue.ts
 ┣ preview  # decoder interface
 ┣ sunmao  # subscan sunmao
 ┣ types
 ┣ ui   # theme, styled-components
 ┣ utils
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Develop
```bash
# some useful yarn script could help you develop faster

# create a component
yarn run add:component -- --version custom/v1 --name button
# create a trait
yarn run add:trait -- --version custom/v1 --name validation
# create a util method
yarn run add:utilMethod -- --version custom/v1 --name alert
```

## Links

Dev: https://subscan-pro-staging.vercel.app/lowcode

> First log in to https://subscan-pro-staging.vercel.app/apiKey, then open https://subscan-pro-staging.vercel.app/lowcode to use Lowcode, because /lowcode and pro.subscan.io are used together an auth
## Learn More

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).
