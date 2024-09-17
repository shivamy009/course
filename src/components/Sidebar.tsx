import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar= () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="lg:hidden bg-gray-800 text-white p-2 absolute top-4 left-4 z-50" 
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div 
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform lg:relative fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white p-4`}
      >
        <div className="text-2xl font-bold mb-6">Quantum</div>
        <h2 className="text-lg font-semibold mb-4">Blender 3D Fundamentals</h2>
        <nav>
          <ul>
            <li className="mb-3">
              <Link to="#" className="text-gray-400 hover:text-white">Introduction</Link>
            </li>
            <li className="mb-3">
              <Link to="#" className="text-gray-400 hover:text-white">Downloading Blender</Link>
            </li>
            <li className="mb-3">
              <Link to="#" className="text-gray-400 hover:text-white">Settings & Preferences</Link>
            </li>
            <li className="mb-3">
              <Link to="#" className="text-gray-400 hover:text-white">Blender Interface</Link>
            </li>
            <li className="mb-3">
              <Link to="#" className="text-gray-400 hover:text-white">Basics of Blender 3D</Link>
            </li>
            <li className="mb-3">
              <Link to="#" className="text-gray-400 hover:text-white">Mesh Modeling</Link>
            </li>
          </ul>
        </nav>
        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-3">Progress</h3>
          <ul className="text-gray-400">
            <li className="mb-2">Absolute Basics - 100%</li>
            <li className="mb-2">Object Editing - 72%</li>
            <li className="mb-2">Modifiers - 16%</li>
          </ul>
        </div>
      </div>

      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
