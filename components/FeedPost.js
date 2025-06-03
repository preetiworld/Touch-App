
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function FeedPost() {
  return (
    <View style={styles.card}>
      <Image source={require('./images/girls2.jpg')} style={styles.image} />
      <View style={styles.footer}>
        <Text style={styles.text}>❤️ 200k   💬 1.4M</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginVertical: 10 },
  image: { width: '100%', height: 400 },
  footer: { padding: 10 },
  text: { fontSize: 14 },
});
