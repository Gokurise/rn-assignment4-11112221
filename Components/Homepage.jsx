import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'




const Homepage = ({navigation}) => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")

  return (
    <SafeAreaView>
      <View style={{marginLeft:20}}>
      <Text style={{fontSize:35, color:'#356899'}}>Jobizz</Text>

      </View>
        <View style={{marginLeft:20}}>
        <Text style={{ fontSize:40}}> Welcome Back </Text>
        <Text style={{color:'#BDBEC2'}}> Let's log in. Apply to jobs! </Text>
      </View>
      <View style={{marginTop:40, justifyContent:'center', marginLeft:15}}>
        <TextInput   
        placeholder='Name'
        style={styles.input}
        value={Name}
        onChangeText={(text) => setName(text)}
        />
        <TextInput   
        placeholder='Email'
        style={styles.input}
        value={Email}
        onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
        <Text style={{color:'white', fontSize:25}}>
          Log In
        </Text>
        </TouchableOpacity>


        
      </View>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:35 ,paddingTop:70}}>
        <View style={styles.line}/>
          <Text style={styles.textLine}> Or continue with</Text>
          <View style={styles.line}/>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:25,justifyContent:'space-evenly'}}>
        <Image source={ require('../assets/apple.png')}/>
        <Image source={ require('../assets/G.png')}/>
        <Image source={ require('../assets/facebook.png')}/>

      </View>
      <View style={{alignContent:'center',justifyContent:'center',marginTop:35, marginLeft:90}}>
        <Text style={{color:'#BDBEC2'}}>Haven't an account? <Text style={{color:'blue'}}>Register</Text></Text>
      </View>
      
    </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({
  input:{
    borderWidth:2,
    height:50,
    margin:10,
    borderRadius:8,
    borderColor:"gray",
    paddingLeft:10,
  },
  loginButton:{
    alignItems:'center',
    marginTop:30,
    backgroundColor:'#356899',
    margin:10,
    height:60,
    justifyContent:'center',
    borderRadius:10,
  
    
    
    


  },
  textLine:{
    fontSize:15,
    lineHeight:17,
    color:'#666',
    marginHorizontal:10,
  },
  line:{
    flex:1,
    height:1,
    backgroundColor:'#ccc'
  }




});
