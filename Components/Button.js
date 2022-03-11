import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function CustomButton(props) {

    const {text, color, displayColor, setTextParent, ...restProps} = props

    console.log(text, color)
    return (
        <Button
            onPress={() => setTextParent(color)}
            title={text}
            color={color}
            accessibilityLabel="Learn more about this purple button"
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
