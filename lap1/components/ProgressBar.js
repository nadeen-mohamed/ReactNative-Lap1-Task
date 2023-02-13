import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { LinearProgress } from '@rneui/themed';

 function ProgressBar() {
  return (
    <>
     <Text style={{alignSelf:'center', fontSize:'30px',color:'white'}}>Languages</Text>
    <View  style={style.container}>
        <Text  style={style.section1}  >Arabic</Text>
        <Text style={{color:'white'}} >100%</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc'}}>
  <View style={{backgroundColor:'orange',height:'15px',width:'100%'}}></View>
</View>
    <View  style={style.container}>
        <Text style={style.section2}>English</Text>
        <Text style={{color:'white'}}>90%</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc'}}>
  <View style={{backgroundColor:'orange',height:'15px',width:'90%'}}></View>
</View>
    <View  style={style.container} >
        <Text style={style.section3}>Spanish</Text>
        <Text style={{color:'white'}}>60%</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc'}}>
  <View style={{backgroundColor:'orange',height:'15px',width:'60%'}}></View>
</View>
    <View  style={style.container}>
        <Text  style={style.section4}>Hendi</Text>
        <Text style={{color:'white'}}>80%</Text>
    </View> 
    <View style={{backgroundColor:'#dcdcdc'}}>
   
  <View style={{backgroundColor:'orange',height:'12px',width:'80%'}}>
    
  </View>

</View>

<hr
        style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '2px',
          width:'200px',
        }}/>
    </>
  );
};

const style = StyleSheet.create({
    container: {
      
        flex:1,
    flexDirection: "row", 
  
    padding:5,
    justifyContent: "space-between"
      
       
      },section1: { 
        padding:5,
      
         justifyContent: "center",
         alignItems: "center",
         color:"white"
        
     
       }, 
       section2: { 
        padding:5,
      
         justifyContent: "center",
         alignItems: "center",
         color:"white"
       }, 
       section3: { 
        padding:5,
      
         justifyContent: "center",
         alignItems: "center",
         color:"white"
       },
       section4: { 
        padding:5,
     
        justifyContent: "center",
        alignItems: "center",
        color:"white"
      }
     
    
    })

export default ProgressBar 
    