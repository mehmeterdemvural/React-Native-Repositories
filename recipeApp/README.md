# Recipe App

## Description

In this application developed with React Native, a recipe application has been simulated.

In this application, data extracted from [The Meal DB API](https://www.themealdb.com/api.php) using [Axios](https://www.npmjs.com/package/axios) was used.

When the application is first opened, you see a page with food categories. Filtering can be done from the field at the top of this page.

When one of the category fields is selected, the list page of the dishes belonging to the category appears. Filtering can be done from the field at the top of this page.

When one of the dishes is selected, a page with the image of the dish and the recipe appears. At the bottom of this page there is a YouTube link button on how to make the dish. When this button is clicked, you are directed to YouTube.

> **Note**: There is also a version of this application that displays YouTube videos within the application, but the current version only provides guidance. The version that displays YouTube videos in the application fulfills this function by using [React Native WebView](https://www.npmjs.com/package/react-native-webview) and [React Native TouTube Iframe](https://www.npmjs.com/package/react-native-youtube-iframe).

When an error is encountered while retrieving data from the API, loading and error animations are shown using [Lottie React Native](https://www.npmjs.com/package/lottie-react-native).

## Preview

![Map App Preview](./src/assets/ios.gif)

### Used Technologies

- [Axios](https://www.npmjs.com/package/axios)
- [Lottie React Native](https://www.npmjs.com/package/lottie-react-native)
- [React](https://react.dev)
- [React Native](https://reactnative.dev/)
- [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
- [React Navigation (Native - Native Stack)](https://reactnavigation.org/)
- [The Meal DB API](https://www.themealdb.com/api.php)

## Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! :tada:

You have successfully run. :partying_face:

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
