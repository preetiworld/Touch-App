import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

const users = [
  { id: 1, avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
  { id: 2, avatar: 'https://randomuser.me/api/portraits/men/2.jpg' },
  { id: 3, avatar: 'https://randomuser.me/api/portraits/women/3.jpg' },
  // Add more
];

export default function StoriesRow() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.row}>
      {users.map(user => (
        <Image key={user.id} source={{ uri: user.avatar }} style={styles.avatar} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: { padding: 10 },
  avatar: {
    width: 60, height: 60, borderRadius: 30,
    marginHorizontal: 5, borderWidth: 2, borderColor: '#ff00bf'},
});
