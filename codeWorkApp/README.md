# Code Work App

In this application developed with React Native, the current location of the device is obtained and displayed on the map. In addition, the locations of people coming from the fake API are marked on the map along with their profile photos. When you click on a person's profile photo, the map focuses on that person and a card with the person's information becomes visible.

## Preview

![Map App Preview](./assets/ios.gif)

### Used Technologies

- [React Native](https://reactnative.dev/)
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)
- [Random Data API](https://random-data-api.com/)

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
