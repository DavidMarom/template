import React from "react";
import { NavLink } from "react-router-dom";
import {  useSelector } from "react-redux";


export const SideBar = () => {
  const pageName = useSelector((state) => state.user.pageName);


  return (
    <div className="cbl2 inner-side-bar">
      <p className="title">Side Bar</p>

      <div className={(pageName === 'books' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/"><i className="fas fa-door-open"></i> Books</NavLink>
      </div>

      <div className={(pageName === 'authors' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/authors"><i className="fas fa-file-contract"></i> Authors</NavLink>
      </div>


      
    </div>
  );
};
