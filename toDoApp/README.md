# To Do App

## Description

In this application developed with React Native, a to-do list application is simulated.

It is not necessary to register and log in to use the application. The application does not have any external dependencies.

When the application is opened, the to do list appears. There is a field at the bottom of the opened page where data can be entered. When data is entered from this field (Empty data entry and re-entering the same data are not allowed, in which case a warning will appear). The data is added to the to do list. At the same time, the corresponding data is also saved on the device using [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage). Thus, there is no data loss when the application is closed.

When you click on a to do, the to do is crossed out and its style changes. When clicked again, it returns to its previous state. If you press long on a todo, a warning appears on the screen that the todo will be deleted. If this warning is acknowledged, the to do will be deleted.

As data is pulled from storage, loading animations are shown using [Lottie React Native](https://www.npmjs.com/package/lottie-react-native).

## Preview

![Map App Preview](./src/assets/ios.gif)

### Used Technologies

- [Lottie React Native](https://www.npmjs.com/package/lottie-react-native)
- [React](https://react.dev/)
- [React Native](https://reactnative.dev/)
- [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)

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
