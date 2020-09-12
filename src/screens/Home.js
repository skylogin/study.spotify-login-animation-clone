import * as React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import { Albums } from "./Albums";

export const Home = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={StyleSheet.albums}>
            <Albums />
        </ScrollView>
    );
};
