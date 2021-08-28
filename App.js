

import React from 'react';
import {
  
  StyleSheet,
  View,
  Image,
} from 'react-native';

const App: () => Node = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: '#40BFFF',
      
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    logo: {
      width: 100,
      height: 100,
      justifyContent: "center", 
      alignItems: "center",
      backgroundColor: '#fff',
      borderRadius: 20,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.tinyLogo}
          source={require('./asset/image/splash.jpg')}/>
        </View>
      
    </View>
  );
};



export default App;
