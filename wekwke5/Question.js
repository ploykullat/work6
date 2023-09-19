import react from "react";
import {View,Text,StyleSheet} from "react-native";

export default function QuestionTtem(){
    const items =['A','B','C','D']
    return(
        <View style ={styles.container}> 
            {items.map((item,i) => {
                 return(
                    <View key={i} style ={styles.item}>
                        <Text style={styles.text}>{item}</Text>
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
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        marginTop:50,
        padding:5
    },
    item:{
        height:100,
        width:100,
        backgroundColor:'#66CDAA',
        marginBottom:15,
        //paddingLeft:10,
        justifyContent: 'center',
        alignItems:'center',
        margin:10
    },
    text:{
        color:'White',
        fontSize: 20,
        
    }
})