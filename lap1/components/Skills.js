import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


 function Skills() {
  return (
    <>
    <Text style={{alignSelf:'center', fontSize:'30px',color:'white'}}>Skills</Text>
    <View  style={style.container}>
        <Text  style={style.section1}  >Html</Text>
        <Text style={{color:'white'}} >100%</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc'}}>
  <View style={{backgroundColor:'orange',height:'20px',width:'100%'}}></View>
</View>
    <View  style={style.container}>
        <Text style={style.section2}>css</Text>
        <Text style={{color:'white'}}>90%</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc'}}>
  <View style={{backgroundColor:'orange',height:'20px',width:'90%'}}></View>
</View>
<View  style={style.container}>
        <Text style={style.section2}>Bootstrap</Text>
        <Text style={{color:'white'}}>99%</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc'}}>
  <View style={{backgroundColor:'orange',height:'20px',width:'99%'}}></View>
</View>
    <View  style={style.container} >
        <Text style={style.section3}>js</Text>
        <Text style={{color:'white'}}>80%</Text>
    </View>
    <View style={{backgroundColor:'#dcdcdc'}}>
  <View style={{backgroundColor:'orange',height:'20px',width:'80%'}}></View>
</View>
    <View  style={style.container}>
        <Text  style={style.section4}>PHP</Text>
        <Text style={{color:'white'}}>40%</Text>
    </View> 
    <View style={{backgroundColor:'#dcdcdc'}}>
   
  <View style={{backgroundColor:'orange',height:'20px',width:'40%'}}>
    
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

export default Skills 
    