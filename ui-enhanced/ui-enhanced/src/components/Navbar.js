function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">FOSSEE Workshops</h1>
      <button className="md:hidden px-3 py-2 border rounded">
        ☰
      </button>
      <ul className="hidden md:flex space-x-4">
        <li><a href="#" className="hover:text-gray-200">Home</a></li>
        <li><a href="#" className="hover:text-gray-200">Workshops</a></li>
        <li><a href="#" className="hover:text-gray-200">Login</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
