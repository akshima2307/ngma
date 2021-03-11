import React from 'react'; 
import {View, ImageBackground , Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Home({navigation}) {
        const pressHandler = () => {
            navigation.navigate('LogIn');
        };
        const applyLeave = () => {
            navigation.navigate('ApplyLeave');
        };
        const attendenceRecord = () => {
            navigation.navigate('AttendenceRecord');
        };
        const notifications = () => {
            navigation.navigate('Notifictions');
        };
        const userProfile = () => {
            navigation.navigate('UserProfile');
        };
        const qrCode = () => {
            navigation.navigate('QrCode');
        }
        const checkOut = () => {
            navigation.navigate('CheckedOut');
        }
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.img} source={require('./images/Background.jpeg')}>
                    <Ionicons onPress= {pressHandler} style = {styles.backArrow} name="arrow-back" size={35}/>
                </ImageBackground>
                <Text style={styles.text}>
                    Kindly scan your QR code to mark your attendance, Note that your location must be within the specified geofence.
                </Text>
                <TouchableOpacity onPress={qrCode} style = {styles.qrIconbackground}>
                    <MaterialIcons style = {styles.qrIcon}  name="qr-code-scanner" size={30} color="white" />
                </TouchableOpacity>
                <View style={styles.innerContainer}>
                <TouchableOpacity onPress={attendenceRecord} style={styles.btn}>
                        <Text style={styles.btnText}>Attendence Record</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={checkOut} style={styles.btn}>
                        <Text style={styles.btnText}>Check out from Premises</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress= {applyLeave} style={styles.btn}>
                        <Text style={styles.btnText}>Apply for Leave</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={notifications} style = {styles.icon}>
                        <Ionicons name="notifications-outline" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.icon}>
                        <Feather name="home" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={userProfile} style = {styles.icon}>
                        <AntDesign name="user" size={30} color="white" />
                    </TouchableOpacity>   
                </View>
            </View>
        )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backArrow:{
        marginTop: 25,
        marginLeft: 17,
        color: 'white',
    },
    img:{
        flex: 1.1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'        
    },
    textContainer:{
        width: '100%',
        flexDirection: 'row',
    },
    qrIconbackground:{
        backgroundColor: "#304991",
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: -30,
        borderRadius: 10,
        elevation: 10,

    },
    text:{
        height: 70,
        color:'#304991',
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 15,
        paddingTop:7,
        backgroundColor: "rgba(230, 230, 230, 0.9)",
        marginTop: -70,
        paddingRight: 60,
    },
    innerContainer: {
        flex: 1.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        elevation: 8,
        backgroundColor: "#304991",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 30,
        width: 240,
        height: 45,
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    iconsContainer:{
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#304991",
    },
    icon:{
        marginTop: -30,
        backgroundColor: "#304991",
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

