import { render } from '@testing-library/react';
import React from 'react';
import Sidebar from './_partials/Sidebar';
import Navbar from './_partials/Navbar';
import {Route, Switch, Redirect} from 'react-router-dom';

// PAGES
import Dashboard from '../pages/Dashboard';
import Blogs from '../pages/Blogs/index';
import Tags from '../pages/Tags/index';

function Layout() {
  return (
    <div class="wrapper">
      <Navbar />
      <Sidebar />

      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        
        <Route path="/blogs/upload" component={Blogs.upload} />
        <Route path="/blogs" component={Blogs.list} />

        <Route path="/tags" component={Tags.lsit} />

        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
};

export default Layout;