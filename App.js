import React from 'react';

import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Platform, StatusBar } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>My Bio</Text>
      
      <View style={styles.sectionProfilePicture}>
        <Image
          source={{ uri: 'https://picsum.photos/id/237/200/300' }}
          style={styles.profilePicture}
        />
      </View>

      <View style={[styles.section, styles.sectionFullName]}>
        <Text style={styles.label}>Full Name:</Text>
        <Text style={styles.value}>Hoang Dat Phan</Text>
      </View>

      <View style={[styles.section, styles.sectionContact]}>
        <Text style={styles.label}>Contact Info:</Text>
        <Text style={styles.value}>Email: hoangdat@test.com</Text>
        <Text style={styles.value}>Phone: +1 234 567 890</Text>
      </View>

      <View style={[styles.section, styles.sectionInterests]}>
        <Text style={styles.label}>Interests:</Text>
        <Text style={styles.value}>- Sleeping</Text>
        <Text style={styles.value}>- Eating</Text>
        <Text style={styles.value}>- Music and Travel</Text>
      </View>

      <View style={[styles.section, styles.sectionSkills]}>
        <Text style={styles.label}>Professional Skills:</Text>
        <Text style={styles.value}>- React Native Development</Text>
        <Text style={styles.value}>- UI/UX Design</Text>
        <Text style={styles.value}>- HTML</Text>
        <Text style={styles.value}>- Javascript</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#e3f2fd',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1e88e5',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#00796b',
    textShadowColor: '#004d40',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  section: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#ffccbc',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d84315',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionFullName: {
    backgroundColor: '#ffebee',
  },
  sectionContact: {
    backgroundColor: '#e8f5e9',
  },
  sectionInterests: {
    backgroundColor: '#fff3e0',
  },
  sectionSkills: {
    backgroundColor: '#e3f2fd',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#37474f',
  },
  value: {
    fontSize: 16,
    color: '#455a64',
  },
  sectionProfilePicture: {
    alignItems: 'center',
    marginBottom: 15,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#1e88e5',
  },
});

export default App;
