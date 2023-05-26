import { View, StyleSheet, Text, TextInput } from "react-native"
import { FontAwesome } from '@expo/vector-icons';
import colors from "../constants/colors";

const Input = props =>{
    return <View style={styles.container}>
        <Text style={styles.label}>{props.label}</Text>

        <View style={styles.inputContainer}>
        { 
            props.icon && <props.iconPack 
                name= {props.icon} 
                size={props.iconSize || 15} 
                style={styles.icon} />
        }
            <TextInput />
        </View>
    </View>
}


const styles = StyleSheet.create({
    container:{
        width: '100%'
    },

    label:{
        marginVertical: 8,
        fontFamily:'bold',
        letterSpacing: 0.3,
        color:colors.textColor
    },

    inputContainer:{
        width:'100%',
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 2,
        backgroundColor: colors.nearlyWhite,
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon:{
        marginRight: 10,
        color: colors.grey
    }
})

export default Input; 