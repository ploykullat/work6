import react from "react";
import { View, StyleSheet,Text, Alert, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

export default function TouchableDemo(){
    
    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.50}
            style={styles.items}
            onPress={() =>{Alert.alert('You click button opacity')}}
            >
              <Text style={styles.buttonText}> Opacity </Text>
            </TouchableOpacity>

            <TouchableHighlight underlayColor={'red'}
            style={styles.items}
            onPress={() =>{Alert.alert('You click button opacity')}}
            >
              <Text style={styles.buttonText}> Highlight </Text>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={'red'}
            style={styles.items}
            onPress={() =>{Alert.alert('You click button opacity')}}
            >
            <View style={styles.viewImgTextContainer}>
              <Image source={require('./heart.png')} style={styles.img}/>
              <Text style={styles.buttonText}> Highlight </Text>
            </View>
            </TouchableHighlight>
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column', 
        flexWrap: 'wrap',
        marginTop: 50,
        justifyContent: 'space-evenly',
    },
    items: {
      width: 250,
      height: 45,
      justifyContent:'center',
      alignItems: 'center',
      marginBottom: 15,
      backgroundColor: 'purple',
      borderRadius: 15,
    },
    buttonText:{
      fontSize: 20,
      color: 'white',
    },
    img:{
      width:30,
      height: 30,
      marginRight: 10,
    },
    viewImgTextContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    }
}
)