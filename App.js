import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View ,TextInput, Button} from 'react-native';
const pic={uri:'https://www.jing.fm/clipimg/detail/77-776797_laboratory-clipart-science-supply-conical-flask-clip-art.png .png'}
export default function App() {
  return (
    <View style={styles.container}>
      
 
 <Image source = {{uri:'https://www.jing.fm/clipimg/detail/77-776797_laboratory-clipart-science-supply-conical-flask-clip-art.png .png'}}
   style = {{ width: 100, height: 100,top:120,right:170}}
   />

<Text style={styles.txt}> Visual website Optimizer</Text>
      <TextInput style={styles.iinput} 
      placeholder = 'userName' 
      ></TextInput>
<TextInput style={styles.iinput} 
      placeholder = 'Password'
      ></TextInput>
      <View style={{height:200,width:200,top:30}}>
    <Button  title="Login" color="blue"> </Button>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
    height:600,
    width:500,
    alignSelf:'center',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iinput: {
    
    borderWidth : 1,
    borderColor : 'green',
    backgroundColor:'transparent',
    textShadowColor:'green',
    borderRadius : 3,
    bottom:5,
    width : 300,
    height : 10,
    padding : 10,
    margin : 10,
    color: 'green',
  },
  txt:
  {flex:1,
    color:'white',
  textAlign:'center',
  top:40,
  fontSize:30,
  alignItems:'center', 
  fontWeight: 'bold',width:250}
});
