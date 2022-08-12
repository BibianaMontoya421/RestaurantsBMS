import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Divider } from '@rneui/base';
import {useNavigation} from '@react-navigation/native'


export default function Login() {
  

  return (
    <ScrollView>
      <Image
        source={require("../../assets/Logo.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style ={styles.container}>
        <Text>Login Form</Text>
        <CreateAccount/>
      </View>
      <Divider style={styles.divider}/>
    </ScrollView>

  )
}

function CreateAccount(props){
  const navigation = useNavigation()
  return(
    <Text 
      style={styles.register}
      onPress={()=> navigation.navigate("register-stacks")}
    >
      ¿Aún no tienes una cuenta?{"  "}
      <Text style={styles.btnRegister}>Regístrate</Text>
    </Text> 
  )
}

const styles = StyleSheet.create({
  image:{
    height: 150,
    width:"100%",
    marginBottom:30
  },
  container:{
    marginHorizontal:40

  },
  divider:{
    backgroundColor:"#81d15d",
    margin:40
  },
  register:{
    marginTop: 15,
    marginHorizontal: 10,
    alignSelf:"center"
  },
  btnRegister:{
    color:"#81d15d",
    fontWeight:"bold"
  }

  
})