import React from "react";
import { StyleSheet } from "react-native";
import {Card, Title, Paragraph, Button} from "react-native-paper";

const RecipePreview = ({recipe, openRecipe}) => (
    <Card style={styles.card} onPress={() => openRecipe(recipe)}>
        <Card.Content>
            <Title>{recipe.title}</Title>
            <Paragraph>{recipe.description}</Paragraph>
        </Card.Content>
        <Card.Actions style={styles.actions}>
            <Button onPress={() => {openRecipe(recipe)}}>Ouvrir</Button>
        </Card.Actions>
    </Card>
)

const styles = StyleSheet.create({
    actions : {
        justifyContent: "flex-end"
    },
    card: {
        margin: 4
    }
});

export default RecipePreview;