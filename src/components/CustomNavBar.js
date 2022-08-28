import React from "react";
import {Appbar} from "react-native-paper";

export default function CustomNavBar({navigation, back}) {
    return (
        <Appbar.Header>
            {back ? <Appbar.BackAction color="white" onPress={navigation.goBack} /> : null}
            <Appbar.Content titleStyle={{color: "white", fontSize: 30}} title="Qwisto"/>
        </Appbar.Header>
    );
}
