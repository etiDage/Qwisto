/**
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./src/Redux/counterSlice";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./src/Views/Home";
import DetailsScreen from "./src/Views/Details";
import CustomNavBar from './src/components/CustomNavBar';
import FullRecipeScreen from './src/Views/FullRecipe';
import RecipeCreationScreen from './src/Views/RecipeCreation';
import { setI18nConfig } from './src/utils/i18n';

const Stack = createStackNavigator();


class App extends Component {
  constructor(props) {
    super(props);
    // setI18nConfig();
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavBar {...props} />,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="FullRecipe" component={FullRecipeScreen} />
          <Stack.Screen name="RecipeCreation" component={RecipeCreationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <NavigationContainer>
//       <Stack.Navigator 
//         initialRouteName="Home"
//         screenOptions={{
//           header: (props) => <CustomNavBar {...props} />,
//         }}>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//         <Stack.Screen name="FullRecipe" component={FullRecipeScreen} />
//         <Stack.Screen name="RecipeCreation" component={RecipeCreationScreen} />
//       </Stack.Navigator>
//       {/* <View styles={styles.container}>
//         <Button onPress={() => dispatch(increment())}>
//           Increment
//         </Button>
//         <Text>{count}</Text>
//         <Button onPress={() => dispatch(decrement())}>
//           Decrement
//         </Button>
//       </View> */}
//     </NavigationContainer>
//   )
// }

// class App extends Component {
//   render() {
//     const {count} = this.state;
//     return (
//       <Counter></Counter>
//     );
//   }
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;