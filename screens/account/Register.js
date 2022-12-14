import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

export default function Register() {
  return (
    <KeyboardAwareScrollView>
        <Image
            source={require("../../assets/Logo.jpg")}
            resizeMode="contain"
            style={styles.image}
        />
        <RegisterForm/>
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
    image:{
        height: 150,
        width:"100%",
        marginBottom:30
      }

})
