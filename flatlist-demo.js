import react from "react";
import { View, StyleSheet,Text, FlatList, TouchableOpacity,Alert} from 'react-native'

export default function FlatListDemo(){
  const listData = [
      {name: 'iPhone15 ', price: 32900},
      {name: 'iPhone15 Plus', price: 37900},
      {name: 'iPhone15 Pro ', price: 41900},
      {name: 'iPhone15 Pro Max', price: 48900}
  ]
  const onPressItem = (item) =>{
      let name = item.name
      let price = item.price
      Alert.alert(`${name} ราคา ${item.price} THB`)
    }
  const renderFlatListItem = (listData) =>{
    return(
      <TouchableOpacity onPress={() => onPressItem(listData.item)}>
        <View key={listData.item.name} style={styles.flatListItem}>
          <Text style={styles.itemName}>{listData.item.name}</Text>
          <Text style={styles.itemPrice}>{listData.item.price} THB</Text>
        </View>
      </TouchableOpacity>
    )
    
  }
    return(
        <View style={styles.container}>
           <Text style={{alignSelf:'center', fontSize: 20}}>รายการสินค้า</Text>
           <FlatList data={listData}
           renderItem={renderFlatListItem}
           keyExtractor={(item,index) => item+index}
           style={styles.flatList}
           contentContainerStyle={styles.flatListContent}
           
           />
        </View>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
    },
    flatList: {
      marginTop: 10,
    },
    flatListContent: {
      margin: 10,
      paddingBottom: 50,
    },
    flatListItem:{
      flexDirection: 'row',
      justifyContent:'space-between',
      backgroundColor: '#cde',
      marginBottom: 8,
      padding: 10
    },
    itemName:{
      fontSize: 16,
      fontWeight:'bold',
    },
    itemPrice:{
      fontSize: 14,
      color:'gray',
    }
}
)