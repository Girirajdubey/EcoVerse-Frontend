import { useState } from 'react';
import PostCard, { Post } from './PostCard';

// Sample data for initial posts
const initialPosts: Post[] = [
  {
    id: '1',
    username: 'eco_warrior',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    imageUrl: 'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Found this plastic waste dumped near the creek. We need to address this before it reaches the ocean!',
    severity: {
      level: 'moderate',
      score: 45,
    },
    likes: 24,
    comments: 5,
  },
  {
    id: '2',
    username: 'green_activist',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    imageUrl: 'https://images.pexels.com/photos/2873671/pexels-photo-2873671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Industrial waste being discharged directly into the river. This is unacceptable and needs immediate attention!',
    severity: {
      level: 'severe',
      score: 92,
    },
    likes: 78,
    comments: 21,
  },
  {
    id: '3',
    username: 'earth_guardian',
    avatar: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=300',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
    imageUrl: 'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    caption: 'Air pollution from factories in my neighborhood. The air quality has been getting worse over the past few months.',
    severity: {
      level: 'high',
      score: 78,
    },
    likes: 56,
    comments: 12,
  },
];

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  
  const addNewPost = () => {
    const newPost: Post = {
      id: (posts.length + 1).toString(),
      username: 'you',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      timestamp: new Date(),
      imageUrl: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      caption: 'Just reported this waste dump site near the park. Local authorities need to clean this up!',
      severity: {
        level: 'high',
        score: 75,
      },
      likes: 0,
      comments: 0,
    };
    
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;