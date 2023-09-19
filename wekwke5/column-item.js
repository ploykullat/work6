import React from 'react'
import {View,Text,StyleSheet} from "react-native";

export default function ColumnTtem(){
    const item = ['Question']
    const items = ['Image']
    return(
        <View style={styles.container}> 
            {items.map((item, i) => {
                 return(
                    <View key={i} style = {styles.item}>
                        <Text style = {styles.text}>{item}</Text>
                    </View>
                 )
            }

            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'colum',
        marginTop:70,
        padding:50
    },
    item:{
        height:300,
        backgroundColor:'#6A5ACD',
        marginBottom:15,
        paddingLeft:120,
        justifyContent: 'center'
    },
    text:{
        color:'White',
        fontSize: 20,
    }
})