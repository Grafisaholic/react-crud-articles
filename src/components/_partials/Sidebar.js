import React from 'react';
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <div class="menubar menubar-light" id="main-menu">

        <div class="menubar-header text-center bg-primary">
            <a class="menubar-brand" href="https://morioh.com">
              <img src="https://i.imgur.com/RFG2le2.png" title="Morioh" className="menubar-logo" style={{height: '50px'}} />
            </a>
        </div>

        <div class="menubar-body">
            <ul class="menu accordion">

                <li class="menu-item">
                    <Link to="/dashboard" className="menu-link">
                        <i class="menu-icon mdi mdi-view-dashboard"></i>
                        <span class="menu-label">Dashboard</span>
                    </Link>
                </li>
                
                <li class="menu-item">
                    <Link to="/tags" className="menu-link">
                        <i class="menu-icon mdi mdi-tag-multiple"></i>
                        <span class="menu-label">Tags</span>
                    </Link>
                </li>

                <li class="menu-item">
                    <Link to="/blogs" className="menu-link">
                        <i class="menu-icon mdi mdi-clipboard-list"></i>
                        <span class="menu-label">Blogs List</span>
                    </Link>
                </li>
            </ul>
        </div>

        <div class="menubar-footer p-10">
            <a href="https://morioh.com" class="d-block text-truncate">&copy Morioh <span id="version"></span></a>
        </div>

        </div>
    </>
  );
};

export default Sidebar;