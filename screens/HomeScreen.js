import React from 'react';
import {  ScrollView } from 'react-native';
import StoriesRow from '../components/StoriesRow';
import FeedPost from '../components/FeedPost';

const posts = [
  'https://i.imgur.com/xyz123.jpg',
  'https://i.imgur.com/abc456.jpg',
  // Add more links
];

export default function HomeScreen() {
  return (
    <ScrollView>
      <StoriesRow />
      {posts.map((img, idx) => (
        <FeedPost key={idx} image={img} />
      ))}
    </ScrollView>
  );
}
