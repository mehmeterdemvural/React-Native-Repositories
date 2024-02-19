# Store App

## Description

In this application developed with React Native, a store application was simulated.

You must register to use the application. Therefore, the application opens with the login page. If you are not registered, there is a link that will direct you to the registration page. These connections are made using [Stack Navigation](https://reactnavigation.org/).

Data entry during the registration process and login was done using [Formik](https://www.npmjs.com/package/formik). [Yes](https://www.npmjs.com/package/yup) was used in form validation operations. User data in the application was used for registration and login operations.

When logging into the application, user information was saved to the device using [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage). Thus, the user is automatically logged in every time the application is opened.

When you log in to the application, a page with items for sale opens. On this page, FlatList is used and data taken from [Fake Store API](https://fakestoreapi.com) is shown. When the user clicks on the items, he is directed to the detail page.

Products can be filtered with the input element at the top of the page where all items are located. This filtering occurs based on product titles and is case-insensitive.

When an error is encountered while retrieving data from the API, Loading and Error animations are shown using [Lottie React Native](https://www.npmjs.com/package/lottie-react-native).

Finally, you can log out with the button at the top right of the pages.

## Preview

![Map App Preview](./src/assets/ios.gif)

### Used Technologies

- [Axios](https://www.npmjs.com/package/axios)
- [Fake Store API](https://fakestoreapi.com)
- [Formik](https://www.npmjs.com/package/formik)
- [Lottie React Native](https://www.npmjs.com/package/lottie-react-native)
- [React Context](https://react.dev/learn/passing-data-deeply-with-context)
- [React Native](https://reactnative.dev/)
- [React Native Async Storage](https://www.npmjs.com/package/@react-native-async-storage/async-storage)
- [React Native Flash Message](https://www.npmjs.com/package/react-native-flash-message)
- [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons)
- [React Navigation (Native - Native Stack)](https://reactnavigation.org/)
- [Yup](https://www.npmjs.com/package/yup)

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
