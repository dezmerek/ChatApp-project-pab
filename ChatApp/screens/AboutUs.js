import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Mateusz Szymański',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png',
    },
    {
      name: 'Kacper Woś',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png',
    },
    {
      name: 'Patryk Wronka',
      avatar: 'https://bootdey.com/img/Content/avatar/avatar4.png',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O nas</Text>
      <Text>Aplikacja RealTime chat</Text>
      <View style={styles.membersContainer}>
        {teamMembers.map((member, index) => (
          <View style={styles.memberBox} key={index} testID="memberBox">
            <Image source={{ uri: member.avatar }} style={styles.avatar} />
            <Text style={styles.memberName}>{member.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  membersContainer: {
    flexDirection: 'column',
  },
  memberBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AboutUs;
