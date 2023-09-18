import React from 'react';
import { View, Text } from 'react-native';

const Home = (props) => {
//   console.warn(props.route.params);
  const { name } = props.route.params; // Access the "name" parameter correctly
  return (
    <View style={{ flex: 1, backgroundColor: '#AFEEEE', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30}}>Wellcome to Home </Text>
      <Text style={{fontSize:30}}> Dear {name}</Text>
    </View>
  );
};

export default Home;
