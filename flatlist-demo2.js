import react from "react";
import { View, StyleSheet,Text,Image, FlatList,Alert, TouchableOpacity} from 'react-native'

export default function FlatListDemo2(){
  let a = <Image source={require('./iphone15.jpg')} style={styles.img}/>
  let b = <Image source={require('./iphone15 Plus.jpg')} style={styles.img}/>
  let c = <Image source={require('./iphone15 Pro.jpg')} style={styles.img}/>
  let d = <Image source={require('./iphone15 Pro Max.jpg')} style={styles.img}/>
  const listData = [
      {img: a, name:'iPhone15 ', price: 32900},
      {img: b, name: 'iPhone15 Plus', price: 37900},
      {img: c, name: 'iPhone15 Pro ', price: 41900},
      {img: d, name: 'iPhone15 Pro Max', price: 48900}
  ]
  const onPressItem = (item) => {
    let name = item.Name
    let price = item.Price
    Alert.alert(`${name} ราคา ${item.price} THB`)
  }
  const renderFlatListItem = (listData) =>{
    return(
      <TouchableOpacity on onPress={() => onPressItem(listData.item)}>
      <View key={listData.item.name} style={styles.flatListItem}>
          <Text style={styles.itemName}>{listData.item.img}</Text>
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
           numColumns={2}
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
      alignItems:'center'
    },
    flatListItem:{
      width: 150,
      flexDirection: 'column',
      justifyContent:'space-between',
      backgroundColor: '#cde',
      margin: 10,
      padding: 10,
      alignItems: 'center',
    },
    itemName:{
      fontSize: 14,
      fontWeight:'bold',
    },
    itemPrice:{
      fontSize: 14,
      color:'gray',
    },
     img:{
      width:30,
      height: 30,
      marginRight: 10,
     },
     viewImgTextContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    }
}
)