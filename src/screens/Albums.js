import * as React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

export const Albums = ({ navigation })  => {
    return (
      <ScrollView contentContainerStyle={styles.albums}>
        <Image style={styles.cover} source={require('../../assets/6.jpg')} />
        <Image style={styles.cover} source={require('../../assets/8.jpg')} />
        <Image style={styles.cover} source={require('../../assets/1.jpg')} />
        <Image style={styles.cover} source={require('../../assets/7.jpg')} />
        <Image style={styles.cover} source={require('../../assets/2.jpg')} />
        <Image style={styles.cover} source={require('../../assets/4.jpg')} />
        <Image style={styles.cover} source={require('../../assets/5.jpg')} />
        <Image style={styles.cover} source={require('../../assets/6.jpg')} />
        <Image style={styles.cover} source={require('../../assets/7.jpg')} />
        <Image style={styles.cover} source={require('../../assets/8.jpg')} />
        <Image style={styles.cover} source={require('../../assets/3.jpg')} />
        <Image style={styles.cover} source={require('../../assets/9.jpg')} />
        <Image style={styles.cover} source={require('../../assets/10.jpg')} />
        <Image style={styles.cover} source={require('../../assets/11.jpg')} />
      </ScrollView>
    );
  }
  
  
  const styles = StyleSheet.create({
    cover: {
      height: width / 2 - 20,
      width: width / 2 - 20,
      marginVertical: 10,
    },
    albums: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  });