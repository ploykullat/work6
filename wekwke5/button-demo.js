import React from 'react'
import {View,Text,StyleSheet,Alert,Button} from "react-native";

export default function ButtonDemo(){
    const onPressButton2 =() => {
        Alert.alert('คุณกดปุ่มที่ 2  ครับ')
    }
    const onPressButton3 =() => {
        Alert.alert(
         'การลบข้อมูล',
         'ต้องการลบข้อมูลนี้ใช่หรือไม่',
         [
            {
                text:'ตกลง',
                onPress:() => {}
            }
            ,
            {
                text:'ยกเลิก',
                onPress:() => {}
            },
            {
                text:'ภายหลัง',
                onPress:() => {}
            }

         ]

        )
    }

return(

    <View style={styles.container}>

       <View  style={styles.item}>
       <Button title="ปุ่มที่ 1" color="#2F4F4F" onPress={() => Alert.alert('คุณกดปุ่มที่ 1  ครับ')}/>
       </View>
       <Button title="ปุ่มที่ 2" color="blue" onPress={ onPressButton2 }/>
       <Button title="ปุ่มที่ 3" color = "#7FFF00" onPress={ onPressButton3 }/>
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