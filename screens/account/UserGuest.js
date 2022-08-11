import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image } from 'react-native'
import { Button } from '@rneui/base';
import {useNavigation} from '@react-navigation/native'

export default function UserGuest() {
  const navigation = useNavigation()

  return (
    <ScrollView
      centerContent
      style={styles.ViewBody}
    >
      <Image
        source={require("../../assets/Logo.jpg")}
        resizeMode="contain"
        style={styles.image}
    
      />
      <Text style={styles.title}>Consulta tu pérfil en Restaurantes</Text>
      <Text style={styles.description}>
      {`¿Cómo describirías tu mejor restaurante? \nBusca y visualiza los mejores restaurantes de una forma sencilla,  vota cuál te ha gustado más y comenta cómo ha sido tu experiencia.`}
      </Text>
      <Button
        buttonStyle={styles.button}
        title="Ver tu perfil"
        onPress={()=> navigation.navigate("login-stacks")}
      />
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ViewBody:{
    marginHorizontal:30
  },
  Image:{
    height: 300,
    width: "100%",
    marginBottom: 10,
    textAlign:"center",
  },
  title:{
    fontWeight: "bold",
    fontSize:19,
    marginBottom:10,
    textAlign:"center",
    color:"#81d15d"

  },
  description: {
    textAlign: "left",
    marginBottom: 10,
    color: "#a65273"
},
  button:{
    backgroundColor:'#ca8536'
  }

})

