import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { useAuth } from '../AuthContext';

export const Login = ({ navigation }) => {
    const [loading, setLoading] = React.useState(false);
    const { login } = useAuth();

    const loginApi = () => {
        setLoading(true);
        setTimeout(() => {
            login();
            setLoading(false);
        }, 1000);
    };

    return (
        <View style={styles.form}>
            <TextInput label="Username" style={styles.textInput} />
            <TextInput label="Password" style={styles.textInput} secureTextEntry={true} />
            <Button mode="outlined" onPress={() => loginApi()} style={styles.button}>
                {loading? "Loading...": "Login"}
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 8,
    },
    form: {
        flex: 1,
        padding: 8,
        paddingTop: 140,
        //justifyContent: 'center',
    },
    textInput: {
        marginVertical: 20,
        backgroundColor: 'grey',
    },
});


