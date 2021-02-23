import React from 'react';

function Dashboard() {
  return (
    <div class="container-fluid mt-15">
      <div class="row row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col">
          <div class="card mb-15">
            <div class="card-body">
              <span class="badge bg-success float-right">month</span>
              <h6 class="card-title text-muted">Views</h6>
              <h3 class="mb-10">120,160,001</h3>
              <p class="text-muted mb-0">Total: 1,5B
                  <span class="float-right"> <i class="fas fa-angle-up text-success"></i> 5.5%</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-15">
            <div class="card-body">
              <span class="badge bg-success float-right">month</span>
              <h6 class="card-title text-muted">Members</h6>
              <h3 class="mb-10">100,007</h3>
              <p class="text-muted mb-0">Total: 150M
                  <span class="float-right"> <i class="fas fa-angle-up text-success"></i> 5.5%</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-15">
            <div class="card-body">
              <span class="badge bg-success float-right">month</span>
              <h6 class="card-title text-muted">Orders</h6>
              <h3 class="mb-10">1,234</h3>
              <p class="text-muted mb-0">Total: 329,890
                  <span class="float-right"> <i class="fas fa-angle-up text-success"></i> 5.5%</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card mb-15">
            <div class="card-body">
              <span class="badge bg-success float-right">month</span>
              <h6 class="card-title text-muted">Income</h6>
              <h3 class="mb-10">$89,909</h3>
              <p class="text-muted mb-0">Total: $890,789
                  <span class="float-right"> <i class="fas fa-angle-up text-success"></i> 5.5%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;