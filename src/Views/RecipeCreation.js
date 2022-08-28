import * as React from "react";
import {View, StyleSheet} from "react-native";
import {Text, Divider, TextInput} from "react-native-paper";

const RecipeCreationScreen = () => {
    const [recipeName, setRecipeName] = React.useState("");
    const [prepTime, setPrepTime] = React.useState("");

    return (
        <View style={style.container}>
            <Text style={style.title}>Create Recipe</Text>
            <TextInput 
                mode="outlined"
                label="Recipe name" 
                value={recipeName} 
                onChangeText={name => setRecipeName(name)}
                style={style.input}
            />
            <TextInput
                mode="outlined"
                label="Preparation time"
                value={prepTime}
                onChangeText={prep => setPrepTime(prep)}
                style={style.input}
            />
            <Text style={style.subtitle}>Ingredients</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 28,
    },
    subtitle: {
        fontSize: 20,
        marginTop: 2
    },
    input: {
        marginTop: 2,
        marginBottom: 2,
    }
})

export default RecipeCreationScreen;