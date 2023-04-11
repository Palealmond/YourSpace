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
    <div className='p-8'>
      <div className="ml-4 mb-4">
        <h2 className='font-bold mr-4'>Your Posts</h2>
        <p className='text-sm'>By: {user.name}</p>
      </div>
      {posts.map((post, index) => (
      <div>
        <div key={index} className='border mb-4 p-4'>
          <h2 className='font-bold'>{post.title}</h2>
          {/* <p>{post.subject}</p> */}
          <p className='font-semibold text-sm'>{post.category}</p>
          <p>{post.content}</p>
            </div>
          <div className='flex gap-8'>
            <button  type="submit"
              className="w-full py-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-600" onClick={() => handleDelete(post.title)}>Delete</button>
                      <button  type="submit"
            className="w-full py-2 px-4 text-white bg-teal-500 rounded-md hover:bg-teal-600" onClick={() => handleEdit(post.title, post.content, post.subject, post.category)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
}
