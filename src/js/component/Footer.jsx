import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <ul className="list-inline mt-2">
          <li className="list-inline-item">
            <a href="#" className="text-light text-decoration-none">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light text-decoration-none">Terms of Service</a>
          </li>
          <li className="list-inline-item">
            <a href="#" className="text-light text-decoration-none">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
