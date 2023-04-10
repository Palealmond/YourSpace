import React, { useState } from 'react';

export default function Posts() {
  const [formData, setFormData] = useState({ 
    title: '',
    content: '',
    subject: '',
    category: '',
  });
  
  const [posts, setPosts] = useState([]);

  return (
    <>
      <div className="py-12">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form method="POST" action="/">
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
                  placeholder="Title"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="flex p-1">
                <label className="text-xl text-gray-600 gap-4">
                  Category
                </label>
                <select
                  className="ml-8 border-2 border-gray-300 border-r p-2"
                  name="category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option>Select</option>
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
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                ></textarea>
                <button
                  role="submit"
                  className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                  onClick={(e) => {
                    e.preventDefault();
                    setPosts([...posts, formData]);
                    setFormData({ subject: '', category: '', content: '' });
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>

  );
}


