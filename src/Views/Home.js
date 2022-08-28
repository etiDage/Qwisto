import * as React from "react";
import {View, Text, Button, StyleSheet, SafeAreaView, FlatList} from "react-native";
import {FAB} from "react-native-paper";
import { useSelector } from "react-redux";

import RecipePreview from "../components/RecipePreview";

const HomeScreen = ({navigation}) => {
    const recipes = useSelector((state) => state.recipes.values);
    const openRecipe = (recipe) => {
        navigation.navigate("FullRecipe", recipe)
    }

    return (
        // <SafeAreaView style={style.container}>
            <View style={style.container}>
                <FlatList
                    data={recipes}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <RecipePreview recipe={item} openRecipe={openRecipe}/>} />
                {/* <RecipePreview title="Lemon muffins" description="Delicious little muffins"/> */}
                {/* <Button title="Go to details" onPress={() => navigation.navigate("Details")} /> */}
                <FAB style={style.fab} icon="plus" onPress={() => navigation.navigate("RecipeCreation")}/>
            </View>
        // {/* </SafeAreaView> */}
    );
}

const style = StyleSheet.create({
    container: {
        // alignItems: "center",
        justifyContent: "center",
        padding:10,
        flex:1
    },
    text: {
        color: "black"
    },
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0
    }
});

export default HomeScreen;