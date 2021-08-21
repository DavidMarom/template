import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export const SideBar = () => {
  const pageName = useSelector((state) => state.user.pageName);


  return (
    <div className="cbl2 inner-side-bar">
      <p className="title">Side Bar</p>

      <div className={(pageName === 'books' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/"> Books</NavLink>
      </div>

      <div className={(pageName === 'authors' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/authors"> Authors</NavLink>
      </div>

      <div className={(pageName === 'tasks' ? "active-cell" : "inactive-cell")}>
        <NavLink to="/tasks"> Tasks</NavLink>
      </div>

      
    </div>
  );
};
