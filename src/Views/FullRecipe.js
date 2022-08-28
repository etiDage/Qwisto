import * as React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {Title, Text, Headline} from "react-native-paper";

const FullRecipeScreen = ({route, navigation}) => {
    const recipe = route.params 
    return (
            <View style={style.header}>
                <Headline style={style.title}>{recipe.title}</Headline>
                <Text>{recipe.description}</Text>
            </View> 
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 10
    },
    header: {
        justifyContent: "center",
    },
    title: {
        fontSize: 30
    }
})

export default FullRecipeScreen;