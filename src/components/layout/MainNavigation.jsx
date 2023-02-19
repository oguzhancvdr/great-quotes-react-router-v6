import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useNavigate } from "react-router-dom";

const MainNavigation = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/') ;
  
  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={handleNavigate}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' className={navData => navData.isActive ? classes.active : '' }>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' className={navData => navData.isActive ? classes.active : '' }>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
