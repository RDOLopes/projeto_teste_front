import React, {useState,useEffect} from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View} from 'react-native';
import "./estilo.css";

export default function Login()
{
    return(
        <KeyboardAvoidingView className='background'>
            <View className='containerlogo'>
                <Image source={require('src\assets\logo-teste.png')} />
            </View>

            <View className='container'>
                <TextInput className='input' placeholder='Email:' />
                <TextInput className='input' placeholder='Senha:' secureTextEntry={true} />
                <TouchableOpacity className='btnsubmit' onPress={()=>setDisplay('flex')}>
                    <Text className='btnsubmittext'>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}