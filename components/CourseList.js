import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CourseBox from './CourseBox';

const COURSES = [
  { courseName: 'Base03', hexCode: '#002b36' },
  { courseName: 'Base02', hexCode: '#073642' },
  { courseName: 'Base01', hexCode: '#586e75' },
  { courseName: 'Base00', hexCode: '#657b83' },
  { courseName: 'Base0', hexCode: '#839496' },
  { courseName: 'Base1', hexCode: '#93a1a1' },
  { courseName: 'Base2', hexCode: '#eee8d5' },
  { courseName: 'Base3', hexCode: '#fdf6e3' },
  { courseName: 'Yellow', hexCode: '#b58900' },
  { courseName: 'Orange', hexCode: '#cb4b16' },
  { courseName: 'Red', hexCode: '#dc322f' },
  { courseName: 'Magenta', hexCode: '#d33682' },
  { courseName: 'Violet', hexCode: '#6c71c4' },
  { courseName: 'Blue', hexCode: '#268bd2' },
  { courseName: 'Cyan', hexCode: '#2aa198' },
  { courseName: 'Green', hexCode: '#859900' },
];

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  container: {
    paddingTop: 45,
    paddingHorizontal: 30,
  },
});

const CourseList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.courseName}
        renderItem={({ item }) => (
          <CourseBox courseName={item.courseName} hexCode={item.hexCode} />
        )}
        ListHeaderComponent={<Text style={styles.title}>Mis Cursos</Text>}
      />
    </View>
  );
};

export default CourseList;
