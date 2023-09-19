import React from 'react'
import {View,Text,StyleSheet,Alert,Button} from "react-native";

export default function ButtonStateDemo(){
        
       const t = 'จำนวนครั้งที่คลิก :'
       let [count, setCount] = React.useState(0)
       let [text, setText] = React.useState(t+count)
       
       const onPressButton1 = () =>{
         const result = count+1
         setCount(result)
         setText(t+result)
       }
       const onPressButton2 = () =>{
        const result = count=0
        setCount(result)
        setText(t+result)
      }
    
return(

    <View style={styles.container}>
    <View>
       <Button title="Click Here" color = "#FF1493" onPress={ onPressButton1 }/>
       <View><Button title="Reset" color="#FF0033" onPress={ onPressButton2 }/></View>
    </View>
    <View>
        <Text style={{fontSize:18}}>{text}</Text>
    </View>
    
    </View>
)
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'colum',
        marginTop:70,
        alignItems: 'center'
    },
    item:{
        width: 150,
        marginBottom:50
    }
    
})