import React from 'react';
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';

import LogIn from '../components/LogIn';
import Home from '../components/Home';
import ApplyLeave from '../components/ApplyLeave';
import Schedule from '../components/AttendenceRecord';
import Notifictions from '../components/Notifictions';
import UserProfile from '../components/UserProfile';
import QrCode from '../components/QrCode';
import CheckedOut from '../components/CheckedOut';

import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


const screens = {
    LogIn: {
        screen: LogIn,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: '',
            headerShown: false
        },
    },
    ApplyLeave: {
        screen: ApplyLeave,
        navigationOptions: {
            title: 'Apply for a leave',
            headerStyle: {
                backgroundColor: "#304991"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        },
    },
    AttendenceRecord: {
        screen: Schedule,
        navigationOptions: {
            title: 'Attendence records',
            headerStyle: {
                backgroundColor: "#304991"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        },
    },
    Notifictions: {
        screen: Notifictions,
        navigationOptions: {
            title: 'Notifications',
            headerStyle: {
                backgroundColor: "#304991"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        },
    },
    UserProfile: {
        screen: UserProfile,
        navigationOptions:{
            title: 'UserProfile',
            headerStyle: {
                backgroundColor: "#304991"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        },
    },
    QrCode: {
        screen: QrCode,
        navigationOptions:{
            title: 'Scan QR code',
            headerStyle: {
                backgroundColor: "#304991"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        },
    },
    CheckedOut: {
        screen: CheckedOut,
        navigationOptions:{
            title: '',
            headerStyle: {
                backgroundColor: "#304991"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        },
    },

    
};
const LogInStack = createStackNavigator(screens);

export default createAppContainer(LogInStack);