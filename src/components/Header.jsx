import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>

          <div className='logo'>
            <img
              src="https://2staritsolution.netlify.app/logo.png"
              alt="Logo"
              height="30" />
            <Link to='/' className='brand'>2STAR IT SOLUTION PRIVATE LIMITED</Link>
          </div>

          {/* Responsive navigation */}
          <nav className='nav nav-pills'>
            <NavLink to='/' exact className='nav-link' activeClassName='active'>Home</NavLink>
            <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>
            <NavLink to='/products' className='nav-link' activeClassName='active'>Courses</NavLink>
            <NavLink to='/posts' className='nav-link' activeClassName='active'>Contact</NavLink>
          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
