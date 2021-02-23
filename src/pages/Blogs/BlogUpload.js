import React from 'react';

function BlogUpload() {
  return (
    <>
      <div class="container-fluid mt-15">
        <div class="container">
          <div class="card mb-15">
            <div class="card-body">
              <h3>Upload Articles</h3>
              <form>
                <div class="row">
                  <div class="mb-15 col-md-12">
                    <label for="inputEmail4" class="col-form-label">Title</label>
                    <input type="Text" class="form-control" id="inputEmail4" placeholder="Entry Title" />
                  </div>
                </div>
                <div class="mb-15">
                  <label for="inputAddress" class="col-form-label">Articles</label>
                  <textarea class="form-control" rows="5" placeholder="Entry Articles"></textarea>
                </div>
                <div class="mb-15">
                    <label for="inputAddress2" class="col-form-label">Tags</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Nodejs, Mongodb, React, Sql" />
                </div>
                <button type="submit" class="btn btn-primary mt-100">Submit Post</button>
              </form>
            </div>
          </div>
        </div>
      </div>
        
    </>
  );
};

export default BlogUpload;