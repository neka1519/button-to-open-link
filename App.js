import React from 'react';
import { render } from 'react-dom';
import {View,Button,Text,StyleSheet, Linking} from 'react-native';

const App =()=>{
  return(
<View style = {styles.body}>
<Text style = {styles.textBody}>
Click the button to open the repository.
</Text>
<Button title = "Open GitHub" color ='#a345bf'  //give onPress at the end only - if you are using color after onPress put ,
 onPress ={()=>{
   Linking.openURL('https://github.com/neka1519?tab=repositories')
   }
   }>
</Button>
</View>
  )
}
const styles = StyleSheet.create({
body :{
  flex:1,
  marginTop : 50,
  backgroundColor : "#abc790",
  alignItems : "center",
  justifyContent :"center"
},

textBody : {
  margin : 10,
  fontStyle : "italic",
  fontSize : 15,
  color : 'black'
}




})
export default App;
