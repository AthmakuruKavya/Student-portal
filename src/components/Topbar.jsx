import React from 'react';
import { RiBookReadLine } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Topbar({ activeItem }) {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2 border-bottom bg-white">
      <div className="d-flex align-items-center gap-2">
        <RiBookReadLine size={24} className="text-primary" />
        <strong className="text-primary fs-5">My Student Portal</strong>
      </div>

      <div className="text-secondary fw-medium">
        Home{activeItem !== 'Dashboard' ? ` / ${activeItem}` : ''}
      </div>

      <div className="d-flex align-items-center gap-2">
        <span>Ajay Kumar</span>
        <div className="dropdown">
          <button
            className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "40px", height: "40px", fontWeight: "bold" }}
          >
            AJ
          </button>
          <ul className="dropdown-menu dropdown-menu-end mt-3 " aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Change Password</a></li>
            <li><a className="dropdown-item" href="#">Edit Personal Data</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

