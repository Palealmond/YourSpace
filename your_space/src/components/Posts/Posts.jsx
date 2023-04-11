import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/apiConfig';

export default function Posts() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    subject: '',
    category: '',
  });

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await api.post('/posts/', { ...formData});
  //     const data = await response.json();
  //     setPosts([...posts, data]);
  //     setFormData({ subject: '', category: '', content: '', title: '' }); //
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error);
  //   }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/posts/', { ...formData });
      console.log(response);;
      setPosts([...posts, response.data]);
      setFormData({ subject: '', category: '', content: '' });
      navigate('/') // navigate to user's profile page
    } catch (error) {
      console.log(error);
    }
  };
  
  

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="py-12">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Subject
                </label>
                <br />
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Category
                </label>
                <br />
                <select
                  className="border-2 border-gray-300 p-2 w-full"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                <option value="">Select</option>
                <option>Art & Photography</option>
                <option>Automotive</option>
                <option>Blogging</option>
                <option>Books and Stories</option>
                <option>Dreams and the Supernatural</option>
                <option>Fashion, Style, Shopping</option>
                <option>Food and Restaurants</option>
                <option>Friends</option>
                <option>Games</option>
                <option>Goals, Plans, Hopes</option>
                <option>Jobs, Work, Careers</option>
                <option>Life</option>
                <option>Music</option>
                <option>Parties and Nightlife</option>
                <option>Pets and Animals</option>
                <option>Podcast</option>
                <option>Quiz/Survey</option>
                <option>Romance and Relationship</option>
                <option>School, College, University</option>
                <option>Sports</option>
                <option>Travel and Places</option>
                <option>Web, HTML, Tech</option>
                <option>Writing and Poetry</option>
                <option>Your Space</option> 
                </select>
              </div>
              <div className="mb-8">
                <label className="text-xl text-gray-600">
                  Content <span className="text-red-500">*</span>
                </label>
                <br />
                <textarea
                  name="content"
                  className="border-2 border-gray-500 w-full my-4"
                  required
                  value={formData.content}
                  onChange={handleChange}
                ></textarea>
                <button
                  type="submit"
                  className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {posts.map((post, index) => (
    <div key={index}>
      <h2>{post.subject}</h2>
      <p>{post.category}</p>
      <p>{post.content}</p>
    </div>
  ))}
        </div>
      </div>
    </>
  );
}






