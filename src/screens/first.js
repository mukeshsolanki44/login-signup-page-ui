import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import logo from '../imges/logo.png';

const First = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#AFEEEE', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <Image source={logo} style={{ width: 200, height: 200 }} />
      </TouchableOpacity>
    </View>
  );
};

export default First;
