// src/components/BlogForm.js
import React, { useState } from 'react';
import './BlogForm.css'; // Import CSS for the form

const BlogForm = ({ addBlog }) => {
  const [blogData, setBlogData] = useState({
    id: '',
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(blogData);  // Call the function to add the new blog
    setBlogData({ id: '', title: '', description: '' }); // Reset form fields
  };

  return (
    <div className="form-container">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          value={blogData.id}
          onChange={handleChange}
          placeholder="Enter Blog ID"
          required
        />
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="Enter Blog Title"
          required
        />
        <textarea
          name="description"
          value={blogData.description}
          onChange={handleChange}
          placeholder="Enter Blog Description"
          required
        />
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default BlogForm;
