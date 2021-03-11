import React, { useState} from 'react';
import {View, StyleSheet ,Text, ScrollView} from 'react-native';


export default function UserProfile(){
    const [notifiction, setNotification] = useState([
        {name: 'Employee name', key:'1'},
        {name: 'Employee ID', key:'2'},
        {name: 'Phone number', key:'3'},
        {name: 'Email address', key:'4'},
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