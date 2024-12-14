import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const App = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
  },
  section: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
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
