import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';


export default function CheckedOut(){
    let Image_Http_URL ={ uri: 'https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg'};
    return(
        <View style={styles.container}> 
            <Image style={styles.logo} source={Image_Http_URL}  />
            <Text style={styles.text}>Checked Out Successfully.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo:{
        width: 120,
        height: 120,
        marginBottom: 20
    },
    text:{
        fontSize: 20,
        color: '#3d3d3d',
        textAlign: 'center'
    }
})