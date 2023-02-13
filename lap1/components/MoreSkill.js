import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function MoreSkill(){
    return(
        <>
        <Text style={{alignSelf:'center', fontSize:'30px',color:'white'}}>Extra Skills</Text>
  <View>

<Icon name='certificate' size={20} color={'orange'} >
<Text style={{color:'white'}}>BootStrap</Text>

</Icon>
<Icon name='certificate' size={20} color={'orange'} >
<Text style={{color:'white'}}>Anglar</Text>

</Icon>
<Icon name='certificate' size={20} color={'orange'} >
<Text style={{color:'white'}}>React</Text>

</Icon>
  </View>
  <hr
        style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '2px',
          width:'200px'
        }}/>
  </>
    )
}
export default MoreSkill