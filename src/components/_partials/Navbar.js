import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav class="main-navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm">

        <button class="btn d-md-none" type="button" data-toggle="collapse" data-target="#main-menu"
            aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <img src="https://i.imgur.com/QTZ8pU1.png" title="Morioh" class="navbar-logo d-md-none" style={{height: '36px'}} />

        <button class="btn d-md-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto hidden-sm-down">

                <li class="nav-item mr-5">
                    <a href="javascript://" class="nav-icon font-2xl" id="navbar-toggler">
                        <i class="mdi mdi-menu"></i>
                    </a>
                </li>

                <li class="nav-item">
                    <form class="form-inline">
                        <div class="input-group">
                            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
                            
                                <button class="btn btn-outline-primary" type="button">
                                    <i class="fas fa-search"></i>
                                </button>
                            
                        </div>
                    </form>
                </li>

            </ul>

            <ul class="navbar-nav my-2 my-lg-0">

              <li class="nav-item mr-10">
                  <Link to="/blogs/upload" className="nav-icon font-2xl">
                    <i class="mdi mdi-post-outline"></i>
                  </Link>
              </li>

              <li class="nav-item mr-10">
                  <a class="nav-icon font-2xl" href="#">
                      <i class="mdi mdi-bell-ring-outline"></i>
                  </a>
              </li>
              <li class="nav-item mr-10 dropdown">
                  <a href="#" class="nav-icon avatar rounded-circle" id="PJXN7R" role="button"
                      data-toggle="dropdown" aria-expanded="false">
                      <img src="https://i.imgur.com/ROPF2fQ.png" />
                  </a>

                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="PJXN7R">
                      <a class="dropdown-item" href="#">
                          <i class="mdi mdi-account-circle-outline"></i> My Account</a>
                      <a class="dropdown-item" href="#"><i class="mdi mdi-lock-outline"></i> Change password</a>
                      <a class="dropdown-item" href="#"><i class="mdi mdi-settings-outline"></i>Settings</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="mdi mdi-exit-to-app"></i> Logout</a>
                  </div>
              </li>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar