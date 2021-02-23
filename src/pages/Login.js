import React from 'react';

function Login() {
  return (
    <>
      <div class="wrapper">
        <div class="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-4">
              <div class="page-login-full">
                <div class="card mx-auto mt-100 card-form">
                  <div class="card-body">
                    <h2>Login Page</h2>
                    <span>
                      <div class="form-group" style={{marginTop: '20px'}}>
                          <span>
                              <input placeholder="E-mail" name="uid" class="form-control untouched pristine required" />
                          </span>
                      </div>
                      <div class="form-group" style={{marginTop: '20px'}}>
                          <span>
                              <input type="password" placeholder="Password" name="pwd" class="form-control untouched pristine required" />
                          </span>
                      </div>
                      <div className="form-group" style={{marginTop: '20px'}}>
                        <button type="button" class="btn btn-primary btn-lg btn-block" disabled="disabled">Login</button>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;