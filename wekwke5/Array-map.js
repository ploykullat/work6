import React from 'react'
import {View,Txet} from 'react-native'

export default function ArrayMap(){
 const cars = ['Hondo','Toyota','Ford','BMW']
 return(
     <View>
        <Txet>การแสดงข้อมูลใน Array ด้วยเมธอด Map </Txet>
        {cars.map(list => {
            return(
                <View>
                    <Text>{list}</Text>
                </View>
            )
        }) 
        }
     
     </View>


 )
}