import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// import { Container } from './styles';

export default function Header () {
  return (
      <View style={styles.header}>

          <TouchableOpacity>
              <Image
                source={require('../img/logo.png')}
              />
          </TouchableOpacity>

          <TouchableOpacity>
              <Image
                source={require('../img/send.png')}
                style={styles.send}
              />
          </TouchableOpacity>
          
      </View>
  );
}

const styles = StyleSheet.create({
    header:{
        height: 55,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomWidth: 0.2,
        shadowColor: '#000',
        elevation: 3,
    },

    send:{
        height: 23,
        width: 23
    },
});