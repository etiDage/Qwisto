/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import * as React from "react";
import { AppRegistry } from "react-native";
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import {Provider as ReduxProvider} from "react-redux";
import {name as appName} from "./app.json";
import App from "./App";

import {store} from "./store/store.js";

const theme = {
    ...DefaultTheme,
    roundnes: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#50C878",
        accent: "#AAFF00"
    },
};

export default function Main() {
  return (
    <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
            <App/>
        </PaperProvider>
    </ReduxProvider>
  )
}

// const RNQwisto = () => {
//     <ReduxProvider store={store}>
//         <PaperProvider>
//             <App/>
//         </PaperProvider>
//     </ReduxProvider>
// }

AppRegistry.registerComponent(appName, () => Main);
