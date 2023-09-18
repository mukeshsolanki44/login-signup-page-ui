import React from "react";
import { View, Image, TextInput, Text, SafeAreaView, Button, TouchableOpacity, ScrollView } from "react-native";
import logo from '../imges/logo.png';
import facebook from '../imges/facebook.png';
import google from '../imges/google.png';
import instagram from '../imges/instagram.png';




const SignUp = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#87cefa" }}>
            <ScrollView>

                <View style={{ marginTop: 2, alignItems: "center", }} >
                    <Image source={logo} style={{ width: 200, height: 200 }} />
                    <Text style={{ fontSize: 40, color: "#000", }}> Sign Up </Text>


                </View>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <TextInput placeholder="Email" width={300} style={{ borderColor: "#ff8c00", borderWidth: 1, borderRadius: 5, marginBottom: 20, fontSize: 20, padding: 10 }} keyboardType="email-address" />
                    <TextInput placeholder="Password" width={300} secureTextEntry={true} style={{ borderColor: "#ff8c00", borderWidth: 1, borderRadius: 5, marginBottom: 20, fontSize: 20, padding: 10 }} />
                    <TextInput placeholder="confrom password" width={300} secureTextEntry={true} style={{ borderColor: "#ff8c00", borderWidth: 1, borderRadius: 5, marginBottom: 20, fontSize: 20, padding: 10 }} />
                   
                    <TouchableOpacity style={{ backgroundColor: '#ff8c00', width: 300, padding: 10, borderRadius: 5 }} 
                                   onPress={()=>navigation.navigate("LogIn")}
                    >
                        <Text style={{ color: "blue", fontSize: 25, textAlign: "center", color: "#fff" }}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "#fff", marginTop: 10, marginBottom: 10 }}>OR</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 200, alignSelf: "center" }}>
                    <TouchableOpacity>
                        <Image source={facebook} style={{ width: 40, height: 40, }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={google} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={instagram} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={{ color: "#fff", marginTop: 10, marginBottom: 10, fontSize: 15 }}>
                        I have alredy acount <TouchableOpacity onPress={()=>navigation.navigate("LogIn")}><Text style={{ color: "#1e90ff", fontSize: 15, borderBottomColor: "#1e90ff", borderBottomWidth: 1, }}>log In</Text>
                        </TouchableOpacity></Text>
                </View>


                


            </ScrollView>


        </SafeAreaView>
    )
}
export default SignUp;