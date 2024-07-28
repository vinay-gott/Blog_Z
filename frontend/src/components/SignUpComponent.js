import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    empId: '',
    mobileNumber: '',
    role: 'employee'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setFormData({ ...formData, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3128/signup', formData);
      console.log(response.data);
      alert('New employee added successfully');

      setFormData({
        email: '',
        password: '',
        empId: '',
        mobileNumber: '',
        role: 'employee'
      });

      navigate('/login');
    } catch (error) {
      console.error('Error adding new employee:', error);
      if (error.response) {
        console.error('Server Error:', error.response.data);
        alert(`Error 1: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('Request Error:', error.request);
        alert('Error 2: Request error, please try again later.');
      } else {
        console.error('Error:', error.message);
        alert('Error 3: Something went wrong, please try again later.');
      }
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="./the.jpeg" className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-light">
              <h3 className="mb-4 text-center">Create an Account</h3>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control form-control-lg"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="email">Email ID</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="empId"
                  name="empId"
                  className="form-control form-control-lg"
                  value={formData.empId}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="empId">Employee ID</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control form-control-lg"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="password">Password</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="form-control form-control-lg"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10,15}"
                />
                <label className="form-label" htmlFor="mobileNumber">Phone number</label>
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="role">Role:</label>
                <select
                  className="form-select"
                  id="role"
                  value={formData.role}
                  onChange={handleRoleChange}
                >
                  <option value="employee">Employee</option>
                  <option value="hr">HR</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg w-100">Submit form</button>
                <p className="small fw-bold mt-2 pt-1 mb-0 text-center">Already have an account? 
                  <a href="#!" className="link-danger" onClick={() => navigate('/login')}> Login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpComponent;
