import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

 function Aboutme(){
return(
    <View>

    <View  style={style.container}>
        <Text  style={style.section1}  >Age</Text>
        <Text style={{color:'white'}} >24</Text>
    </View>
    <View  style={style.container}>
        <Text style={style.section2}>Residence</Text>
        <Text style={{color:'white'}}>BO</Text>
    </View>
    <View  style={style.container} >
        <Text style={style.section3}>FreeLancer</Text>
        <Text style={{color:'green'}}>Avaliable</Text>
    </View>
    <View  style={style.container}>
        <Text  style={style.section4}>Address</Text>
        <Text style={{color:'white'}}>Cairo</Text>
    </View> 
    <hr
        style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '2px',
          width:'200px'
        }}/>
    </View>
)

}
const style = StyleSheet.create({
    container: {
      
        flex:1,
    flexDirection: "row", 
  
    padding:10,
    justifyContent: "space-between"
      
       
      },section1: { 
        padding:10,
         backgroundColor: "orange",
         justifyContent: "center",
         alignItems: "center",
         color:"white"
        
     
       }, 
       section2: { 
        padding:10,
         backgroundColor: "orange",
         justifyContent: "center",
         alignItems: "center",
         color:"white"
       }, 
       section3: { 
        padding:10,
         backgroundColor: "orange",
         justifyContent: "center",
         alignItems: "center",
         color:"white"
       },
       section4: { 
        padding:10,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        color:"white"
      }
     
    
    })
export default Aboutme