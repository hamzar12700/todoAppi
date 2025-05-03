import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black overflow-hidden h-12 flex items-center px-4">
        <div className="navbar flex justify-between text-white items-center w-full">
          <div className="logo text-3xl">Hamza</div>

          {/* Navigation Links - Visible on sm and up */}
          <ul className="nav-links hidden sm:flex gap-10 items-center cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Services</li>
          </ul>

 
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
