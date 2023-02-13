import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import * as React from 'react';
import First from './components/First';
import Aboutme from './components/Aboutme';
import ProgressBar from './components/ProgressBar';
import Skills from './components/Skills';
import MoreSkill from './components/MoreSkill';
import FileSaver from 'file-saver'
import Icon from 'react-native-vector-icons/FontAwesome';
export default function App() {
  const Download=()=>{
    FileSaver.saveAs(
      process.env.REACT_APP_CLIENT_URL + "./assest/cv.pdf"
    )
  }
 
  return (
    <View style={styles.container}>
     <View style={{ backgroundColor:'#1b1b1e'}}>
     <First/>
     <Aboutme/>
     <ProgressBar/>
     <Skills/>
     <MoreSkill/>
<Button title='Download cv'  color={'orange'} onPress={Download}></Button>
     </View>
 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
   
  }


});
