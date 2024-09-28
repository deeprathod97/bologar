// // // src/components/Home.js
// // import React from 'react';
// // import Card from './Card.jsx';

// // const Home = () => {
// //   const blogPosts = [
// //     {
// //       id: 1,
// //       title: 'First Blog Post',
// //       image: 'https://via.placeholder.com/150',
// //       description: 'This is the description of the first blog post.',
// //     },
// //     {
// //       id: 2,
// //       title: 'Second Blog Post',
// //       image: 'https://via.placeholder.com/150',
// //       description: 'This is the description of the second blog post.',
// //     },
// //     {
// //       id: 3,
// //       title: 'Third Blog Post',
// //       image: 'https://via.placeholder.com/150',
// //       description: 'This is the description of the third blog post.',
// //     },
// //   ];

// //   return (
// //     <div className="home">
// //       <h1>Blog Posts</h1>
// //       <div className="card-container">
// //         {blogPosts.map(post => (
// //           <Card
// //             key={post.id}
// //             title={post.title}
// //             image={post.image}
// //             description={post.description}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import newsData from '../data/newsData.jsx';
import './Home.css';
import BlogForm from './BlogForm';


const Home = () => {
  return (
    <div className="news-list">
      {newsData.map((news) => (
        <div key={news.id} className="news-card">
          <img src={news.image} alt={news.title} />
          <h2>{news.title}</h2>
          <p>{news.description}</p>
          <Link to={`/news/${news.id}`} className="read-more-button">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;


// src/components/Home.js
// import React, { useState } from 'react';
// import BlogForm from './BlogForm'; // Import BlogForm component
// import './Home.css'; // Import CSS for the home page

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);

//   const addBlog = (newBlog) => {
//     setBlogs([...blogs, newBlog]); // Add the new blog to the state
//   };

//   return (
//     <div className="home-container">
//       <h1>Blog List</h1>
//       <BlogForm addBlog={addBlog} /> {/* Form to add a new blog */}
//       <div className="blog-list">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="blog-card">
//             <h2>{blog.title}</h2>
//             <p>{blog.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
