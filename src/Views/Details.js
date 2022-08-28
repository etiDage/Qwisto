import * as React from "react";
import {View, Text, StyleSheet} from "react-native";

const DetailsScreen = () => {
    return (
        <View style={style.container}>
            <Text>DetailsScreen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default DetailsScreen;