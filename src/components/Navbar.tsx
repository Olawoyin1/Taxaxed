// // src/components/Navbar.tsx
// import { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { VscMenu } from "react-icons/vsc";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow relative z-50">
//       <div className="container mx-auto py-7  flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src="/images/logo.png" className="w-9" alt="logo" />
//           <h1 className="text-2xl font-[700] font-satoshi text-gray-800">
//             Taxaxed<sup className="text-sm align-super">™</sup>
//           </h1>
//         </Link>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
//           <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">About</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
//           <Link to='/talk-to-an-expert'>
//           <button className="bg-[#E862FF] hover:bg-[#e862ffcc] text-white px-8 py-2 text-lg rounded-md transition">
//                 Talk to an Expert
//               </button>
//           </Link>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
//             {isOpen ? <FaTimes size={24} /> : <VscMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Slide-In Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow  z-40 transform transition-transform duration-300 ease-in-out ${
//           isOpen ? 'translate-x-0' : 'translate-x-full'
//         } md:hidden`}
//       >
//         <div className="p-6 flex flex-col space-y-4 text-gray-700 font-medium">
//           <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">About</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
//           <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
//         </div>
//       </div>

//       {/* Optional: Backdrop overlay when menu is open */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/70 z-30 md:hidden"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



// src/components/Navbar.tsx
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { VscMenu } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow relative z-50">
      <div className="container mx-auto py-7 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" className="w-9" alt="logo" />
          <h1 className="text-2xl font-[700] font-satoshi text-gray-800">
            Taxaxed<sup className="text-sm align-super">™</sup>
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/talk-to-an-expert">
            <button className="bg-[#E862FF] hover:bg-[#e862ffcc] text-white px-8 py-2 text-lg rounded-md transition">
              Talk to an Expert
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <FaTimes size={24} /> : <VscMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Slide-In Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-6 flex flex-col space-y-6 text-gray-700 font-medium">
          <Link to="/" onClick={closeMenu} className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" onClick={closeMenu} className="hover:text-blue-600 transition-colors">About</Link>
          <Link to="/services" onClick={closeMenu} className="hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-blue-600 transition-colors">Contact</Link>
          <Link to="/talk-to-an-expert" onClick={closeMenu}>
            <button className="w-full bg-[#E862FF] hover:bg-[#e862ffcc] text-white px-4 py-3 rounded-md text-center">
              Talk to an Expert
            </button>
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-30 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
