import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  bgBlack: {
    backgroundColor: 'rgb(255, 45, 85)',
  },
  boxText: {
    fontWeight: 'bold',
  },
});

const Course = ({ courseName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={[styles.boxText, textColor]}>{courseName}</Text>
    </View>
  );
};

export default Course;
