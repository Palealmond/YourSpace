import React, { useState, useEffect } from 'react';
import { getPosts , deletePost, updatePost } from '../../api/posts.js';
import { getProfile } from '../../api/profile.js';

export default function ViewPosts() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const getUserData = async () => {
    const profile = await getProfile(localStorage.getItem('USER_ID'));
    setUser(profile);
  };

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    getUserData();
    fetchPosts();
  }, []);

  const handleDelete = async (title) => {
    await deletePost(title);
    setPosts(posts.filter(post => post.title !== title));
  };

  const handleEdit = async (title, content, subject, category) => {
    await updatePost(title, content, subject, category);
    fetchPosts();
  };

  return (
    <>
      <h2>Your Posts</h2>
      <p>Name: {user.name}</p>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.subject}</p>
          <p>{post.category}</p>
          <p>{post.content}</p>
          <button onClick={() => handleDelete(post.title)}>Delete</button>
          <button onClick={() => handleEdit(post.title, post.content, post.subject, post.category)}>Edit</button>
        </div>
      ))}
    </>
  );
}
