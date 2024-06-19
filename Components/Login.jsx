import { View, Text ,StyleSheet, Image, TouchableOpacity, TextInput, FlatList} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AccountData } from '../mock/Accounts'
import { JobsData } from '../mock/Jobs'

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.salutation}>
     <View style={{flexDirection:'column'}}>
      <Text style={styles.salText}> Eric Atsu</Text>
      <Text style={{color:"#95969D", fontSize:20}}> eric@gmail.com</Text>
     </View>
     <View style={{marginLeft:190}}> 
      <Image source={require('../assets/p.png')}/>
     </View>
    </View>

    <View style={{marginTop:35}}>
      <View style={styles.inContainer}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity>
          <AntDesign name="search1" size={25} color="black" style={styles.icon} />
          </TouchableOpacity>
          <TextInput 
          style={styles.input}
          placeholder="Search a job or position"
          />
        </View>
        <TouchableOpacity style={styles.filterCon}>
          <Image source={require('../assets/Filter.png')} style={styles.filterIcon}/>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{marginTop:38}}>
      <View style={{flexDirection:'row'}}>
       <Text style={{fontWeight:'701', fontSize:24}}> Featured Jobs</Text>
       <Text style={{marginLeft:150, fontSize:20, color:"#95969D"}}>See all</Text>
      </View>
    </View>


    <View>
     <FlatList 
     data ={AccountData}
     renderItem={({item}) => (
      <View style={[styles.AccountDataContainer, {backgroundColor: item.backgroundColor}]}>
      <View style={{flexDirection:"row"}}>
        <View style={{backgroundColor:"white", width:50, borderRadius:10}}>
      <Image style={[styles.image, item.imageStyle]}source={item.image}/>
        </View>

        <View style={{flexDirection:"column", alignItems:"center", marginLeft:5}}>
          <View>
            <Text 
             style={{color:"#fff", fontWeight:"600", fontSize:20}}>{item.job}</Text>
            </View>
            <View>
            <Text style={{color:"#fff", fontWeight:"600"}}>{item.Accounts}</Text>
            </View>
         </View>
      </View>
      <View style={{flexDirection:"row", marginTop:120, justifyContent:"space-between"}}>
          <View>
            <Text style={{color:"#fff", fontWeight:"600", fontSize:15}}>{item.salary}</Text>
             </View>

                              
           <View>
              <Text style={{color:"#fff", fontWeight:"600", fontSize:15}}>{item.location}</Text>
               </View>
           </View>
      </View>

     ) }
     keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator = {false}
      />
    </View>

    <View style={{flexDirection:"row"}}>
      <Text style={{fontWeight:"701", fontSize:25 }}>Popular Jobs</Text>
         <TouchableOpacity>
           <Text style={{color:"#95969D", fontSize:20, marginLeft:150}}>See all</Text>
          </TouchableOpacity>
    </View>
     
    <View>
            
      <FlatList
        data={JobsData}
        renderItem={({item}) => (
        <View style={styles.jobsContainer}>
            <View>
               <Image style={{height:70, width:70}} source={item.image}/>
             </View>
                      
             <View style={{marginLeft:10, justifyContent:"space-between"}}>
               <Text style={{fontSize:20, fontWeight:"700"}}>{item.title}</Text>
               <Text style={{fontSize:21, color:"#95969D"}}>{item.subTitle}</Text>
             </View>
                <View style={{ justifyContent:"space-between"}}>
                  <Text style={{fontWeight:"600"}}>{item.amount}</Text>
                      <Text style={{color:"#95969D"}}>{item.city}</Text>
                 </View>
                      
             </View>
              )}
               keyExtractor={(item) => item.id.toString()}
               showsVerticalScrollIndicator = {false}
               vertical
              />
            </View>



     </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 20,
  },
  salutation:{
      marginTop:30,
      flexDirection:"row"
  },
  salText:{
    fontSize:30,
    fontWeight:"500"
  },
  input:{
    flex:1,
    fontSize:15,
    fontWeight:"700",
     justifyContent:"space-evenly"
  },
  inContainer:{
    borderWidth:1.5,
    borderColor:"gray",
    height:50,
    borderRadius: 30,
    width:"80%",
    alignItems:"center",
    textAlign:"center",
    paddingHorizontal:10,
    flexDirection:"row",
  },
  filterCon:{
    height:50,
    width:50,
    marginLeft:40,
    justifyContent:"flex-end",
    alignItems:"center",
    borderRadius:15,
    borderWidth:1,
    borderColor:"gray"
  },
 icon:{
marginRight:20
 },
 filterIcon:{
  height:39,
  width:40,
 },
 AccountDataContainer:{
  height:215, 
  width:250,
  margin:20,
  borderRadius:20,
  padding:20
 },
 jobsContainer:{
  backgroundColor:"#fff",
  margin:10,
  height:76,
  borderRadius:10,
  flexDirection:"row",
  justifyContent:"space-between"
  }

});