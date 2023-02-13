import * as React from 'react';
import { StyleSheet, Text, View,Image,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function First(){
    

    return (
        <View style={style.container}>
        <Image 
        source={require('../assets/Capture.PNG')}
  style={style.img}
    />
        <Text style={style.myText}>Nadeen Mohamed</Text>
        <Text style={style.text}>Front End Developer</Text>
       
       <Text style={style.icon}>
       <Icon 
        name='facebook-square' size={30} color={'orange'} style={{margin:'6px'}}onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }} ></Icon>
       <Icon
        name='twitter-square' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }}></Icon>
         <Icon
        name='phone-square' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }}></Icon>
         <Icon
        name='instagram' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://www.instagram.com/');
        }}></Icon>
         <Icon
        name='linkedin-square' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }}></Icon>
        
        </Text> 
        <hr
        style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '2px',
          width:'200px'
        }}/>

       
        </View>
      );
    }
    export default First

  
    
const style = StyleSheet.create({
    container: {
      
       
      
       
      },
    
    myText: {
      fontSize: 25,
      color:"white"
    }
  ,
  img:{
    width:200,
    height:200,
    borderRadius:400 ,

  },
  text:{
    color:"gray",
    padding: 20,
  alignSelf:'center'
  },
  icon:{
    justifyContent: "space-between",
    alignSelf:'center'
  }
 
  })