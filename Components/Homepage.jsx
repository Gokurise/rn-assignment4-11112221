import { View, Text, TextInput, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'




const Homepage = () => {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")

  return (
    <SafeAreaView>
      <View style={{marginLeft:20}}>
      <Text style={{fontSize:35}}>Jobizz</Text>

      </View>
        <View style={{marginLeft:20}}>
        <Text style={{ fontSize:40}}> Welcome Back </Text>
        <Text> Let's log in. Apply to jobs! </Text>
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
        <View>
          
        </View>

        
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
  }




});

