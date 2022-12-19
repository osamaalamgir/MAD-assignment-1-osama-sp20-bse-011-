import React from 'react';
import { View, StyleSheet,TextInput,ScrollView,TouchableOpacity,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login!</Text>
      <Button
        title="Go to Signup_Screen"
        onPress={() => navigation.navigate('Sign_in')}
      />
    </View>
  );
}

function Signin({navigation}) {
    return (
        <ScrollView>
        <View style={styles.Container1}>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={styles.Title}>Fill this form to join as Customer !</Text>
          <Text style={{marginTop:202,fontSize: 18, fontWeight: 'bold', fontStyle: 'italic', color: 'BLACK', }}>Customer Information</Text>
                <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={styles.subtitle} >  Name                 </Text>

                    <TextInput
                        style={styles.textinput}
                        placeholder={'Enter Your full Name '}>
                    </TextInput>
                </View>

                <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={styles.subtitle} >Home Address </Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder={'Home Address'}>
                    </TextInput>
                </View>
                <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>

                <View style={{ marginTop: 8, flexDirection: 'row' }}>
                    <Text style={styles.subtitle} >Email                   </Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder={'Enter Email address'}>
                    </TextInput>
                    <Text style={styles.subtitle} ></Text>
                    
                </View>
                <View style={{ marginTop: 8, flexDirection: 'row' }}>
                    <Text style={styles.subtitle} >Phone Number     </Text>
                    <TextInput
                        style={styles.textinput}
                        placeholder={'Enter Your Phone Number'}>
                    </TextInput>
                    <Text style={styles.subtitle} ></Text>
                    
                </View>
                <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                
                <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={styles.subtitle} >Password              </Text>

                    <TextInput
                        style={styles.textinput}
                        placeholder={'Enter Password '}>
                    </TextInput>
                </View>
                <View style={{ marginTop: 5, backgroundColor: 'white', width: '90%', height: 1 }}></View>
                
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text style={styles.subtitle} >Confirm Password</Text>

                    <TextInput
                        style={styles.textinput}
                        placeholder={'Confirm Password'}>
                    </TextInput>
                </View>
               
                </View>
                <TouchableOpacity style={{justifyContent:'flex-end'}}
                >
                <View style={{ marginTop:20, marginBottom:39,alignItems: 'center', padding: 5, borderRadius: 25, borderWidth: 4, borderColor: 'b', width: 100, height: 35, backgroundColor: 'white' }}>
                    <Text>Submit</Text>
                </View>
            </TouchableOpacity>
            </View>
         
     
    </ScrollView>

    );
}
const styles = StyleSheet.create({
    Container1: {
        width: '100%',
        backgroundColor: 'darksalmon',
        alignItems: 'center',

    },
   
    Title: {
        marginTop: 70,
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'navajowhite',

    },
    subtitle: {

        fontSize: 16,
        fontStyle: 'italic',
        color: 'black',
        fontWeight: 'bold',
    },
    textinput: {
        borderWidth: 3,
        padding: 6,
        marginLeft: 25,
        borderColor: 'black',
        borderRadius: 8,
        height: 30,
        width: '45%',
        backgroundColor: 'navajowhite',
    },
    smalltextinput: {
        borderWidth: 3,
        padding: 6,
        marginLeft: 10,
        borderColor: 'black',
        borderRadius: 8,
        height: 30,
        width: '28%',
        backgroundColor: 'navajowhite',
    },


});
export default Sign_in;
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Sign_up" component={Sign_inScreen} />
     />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}