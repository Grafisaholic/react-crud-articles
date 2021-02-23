import React from 'react';

// COMPONENTS
import BlogCardList from '../../components/Blogs/BlogCard';
import BlogPopular from '../../components/Blogs/BlogPopular';

function Blogs() {
  return (
    <div class="container-fluid mt-15">
      <div class="container">
        <div class="row">
          <BlogCardList />

          <BlogPopular />
        </div>
      </div>
    </div>
  );
};

export default Blogs;