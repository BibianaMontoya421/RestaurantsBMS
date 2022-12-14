import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button,Icon,Input } from '@rneui/base'
import { size } from 'lodash'
import {useNavigation} from '@react-navigation/native'

import { validateEmail } from '../utils/helper'
import {RegisterUser} from '../utils/actions'



export default function RegisterForm() {
    const [showPassword,setShowPassword] = useState(false)
    const [formData,setFormData] = useState(defaultFormValues())
    const [errorEmail,setErrorEmail]=useState("")
    const [errorPassword,setErrorPassword]=useState("")
    const [errorConfirm,setErrorConfirm]=useState("")
    const navigation = useNavigation()

    const onChangeM =(e, type) =>{
        setFormData({...formData, [type]:e.nativeEvent.text})
    }

const doregisterUser = async () =>{
    if(!validateData()){
        return;
    }

    const result = await RegisterUser(formData.email, formData.password)

    if(!result.statusResponse){
        setErrorEmail(result.error)
        return 
    }

    navigation.navigate("account-stacks")

}

const validateData =()=>{
    setErrorConfirm("")
    setErrorEmail("")
    setErrorPassword("")
    let isValid = true 

    if(!validateEmail(formData.email)){
        setErrorEmail ("Debes ingresar un email válido.")
        isValid= false

    }

    if(size(formData.password) < 6){
        setErrorPassword("Debes ingresar una contraseña de al menos 6 carácteres.")
        isValid=false
    }

    if(size(formData.confirm) < 6){
        setErrorConfirm("Debes ingresar una confirmación de al menos 6 carácteres.")
        isValid=false
    }

    if(formData.password!== formData.confirm){
        setErrorPassword("La contraseña y la confirmación no son iguales")
        setErrorConfirm("La contraseña y la confirmación no son iguales")
        isValid=false
    }

    return isValid 
}


  return (
    <View style={styles.form}>
      <Input
        containerStyle={styles.input}
        placeholder='Ingresa tu email...'
        onChange={(e)=>onChangeM(e,"email")}
        keyboardType="email-address"
        errorMessage={errorEmail}
        defaultValue={formData.email}

      />
      <Input
        containerStyle={styles.input}
        placeholder='Ingresa tu contraseña...'
        passwordRules={true}
        secureTextEntry={!showPassword}
        onChange={(e)=>onChangeM(e,"password")}
        errorMessage={errorPassword}
        defaultValue={formData.password}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}      
            onPress={()=> setShowPassword(!showPassword)}
          />
         }
      />
      <Input
        containerStyle={styles.input}
         placeholder='Confirma tu contraseña...'
        passwordRules={true}
        secureTextEntry={!showPassword}
        onChange={(e)=>onChangeM(e,"confirm")}
        errorMessage={errorConfirm}
        defaultValue={formData.confirm}
        rightIcon={
        <Icon
          type="material-community"
          name={showPassword ? "eye-off-outline" : "eye-outline"} 
          iconStyle={styles.icon}   
          onPress={()=> setShowPassword(!showPassword)}   
        />
       }
      />
      <Button
        containerStyle={styles.btnContainer}
        title="Registrar nuevo usuario"
        buttonStyle={styles.btn}
        onPress= {()=>doregisterUser()}
      />
    </View>
  )
}

const defaultFormValues = ()=>{
    return {email:"", password:"", confirm:""}
}

const styles = StyleSheet.create({
form:{
    marginTop:30
},
input:{
    width: "100%"
},
btnContainer:{
    marginTop:20,
    width:"95%",
    alignSelf:"center"
},
btn:{
    backgroundColor:"#ca8536"
},
icon:{
    color:"#ca8536"
}


})