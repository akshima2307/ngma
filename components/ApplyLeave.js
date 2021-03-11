import React  from 'react'; 
import {View,Text,TextInput,TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class ApplyLeave extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reason: 'Medical',
        }
    };
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.inputField}
                    placeholder = "Reason for leave"
                />
                
                <RNPickerSelect
                    items= {[
                        { label: 'Medical', value: 'Mediacal' },
                        { label: 'Casual', value: 'Casual' },
                        { label: 'On Leave(EL)', value: 'On Leave(EL)' },
                        { label: 'Maternity leaves', value: 'Maternity leaves' }
                    ]}
                    value={this.state.reason}
                    onValueChange={(itemValue, itemIndex) => this.setState({ reason: itemValue })}
                    style={{
                        placeholder: {color: 'grey', width: 250, alignSelf: 'center'},
                        borderWidth: 1,
                        borderColor: 'grey',
                        
                        inputIOS: { color: 'grey', width: 250 ,alignSelf: 'center'},
                        inputAndroid: { color: 'grey', width: 250, alignSelf: 'center'},
                      }}
                />
                
                <View style={styles.dateContainer}>
                    <TextInput 
                        style={styles.inputFields}
                        placeholder = "Start date"
                    />
                    <TextInput 
                        style={styles.inputFields}
                        placeholder = "End date"
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>Login</Text>
            </TouchableOpacity>
            <ImageBackground style={styles.imgContainer} source={require('./images/Background.jpeg')}></ImageBackground>
        </View>
        );
    }
        
    
};

const styles = StyleSheet.create({
    container:{flex: 1},
    formContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputField:{
        backgroundColor: 'white',
        width: 250,
        height: 45,
        borderRadius: 5,
        padding: 15,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 5
    },
    dateContainer:{
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-between'
    },
    inputFields:{
        backgroundColor: 'white',
        width: '45%',
        height: 45,
        borderRadius: 5,
        padding: 15,
        borderWidth: 1,
        borderColor: 'gray'
    },
    appButtonContainer:{
        elevation: 8,
        backgroundColor: "#304991",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: -20,
        width: 120,
        height: 45,
        alignSelf: 'center'
    },
    appButtonText:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    imgContainer:{
        flex: 1,
        resizeMode: 'cover'
    }

});
