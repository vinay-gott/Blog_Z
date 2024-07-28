import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function FooterComponent() {
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-secondary">© 2024 Company, Inc</p>

          {/* <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img src="/logo1.jpeg" alt="Logo" width="46" height="42" className="d-inline-block align-text-top" style={{ borderRadius: '48%' }}/>
          </a> */}

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">Values</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-secondary">About</a></li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default FooterComponent;
