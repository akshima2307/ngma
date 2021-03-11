import React from 'react';  
import {Dimensions,TouchableOpacity, ImageBackground, StyleSheet,Text, TextInput , Image, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-navigation-stack';

export default function LogIn({navigation}) {
        
        const pressHandler = () => {
            navigation.navigate('Home');
        }
        return (
            <KeyboardAvoidingView style={{flex: 1}}>
                <ImageBackground  source={require('./images/loginBackground.jpg')} style={styles.container} >
                        <Image source={require('./images/NGMA.png')}  style={styles.logo}/>
                        <Text style={styles.heading} >National Gallery of Modern Art</Text>
                        <TextInput 
                            style={styles.inputField}
                            placeholder = "Registered Number/Email id"
                        />
                        <TextInput 
                            style={styles.inputField}
                            placeholder = "password"
                        />
                        <TouchableOpacity onPress= {pressHandler} style={styles.appButtonContainer}>
                            <Text style={styles.appButtonText}>Login</Text>
                        </TouchableOpacity>
                </ImageBackground>
            </KeyboardAvoidingView>
      );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        resizeMode: 'cover',
        position: 'absolute',
        left: 0,
        top: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    logo:{
        marginTop: 120,
        width: 80,
        height: 80
    },
    inputField:{
        backgroundColor: 'white',
        padding: 2,
        width: 250,
        height: 45,
        marginTop: 20,
        borderRadius: 5,
        padding: 15
    },
    heading: {
        height: 100,
        textAlignVertical: 'center',
        width: 290,
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "rgba(230, 230, 230, 0.5)",
        letterSpacing: 3,
        marginTop: 40,
        paddingHorizontal:12,
        borderRadius: 3
      },
      appButtonContainer: {
        elevation: 8,
        backgroundColor: "#304991",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 30,
        width: 120,
        height: 45
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });

