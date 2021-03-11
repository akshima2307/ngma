import React, { useState} from 'react';
import {View, StyleSheet ,Text, ScrollView} from 'react-native';


export default function Notifictions(){
    const [notifiction, setNotification] = useState([
        {name: 'Important updates', key:'1'},
        {name: 'Meeting', key:'2'},
        {name: 'Building B is closed', key:'3'},
    ]);
    return(
        <View style= {styles.container}>
            <ScrollView>
                {notifiction.map((item) => {
                    return(
                        <View key={item.key}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        paddingTop: 17,
        paddingHorizontal: 20,
    },
    text:{
        marginTop: 20,
        padding: 16,
        backgroundColor: '#E8E8E8',
        fontSize: 18,
        borderRadius: 5
    }
});





