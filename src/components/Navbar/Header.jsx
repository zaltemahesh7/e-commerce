import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-[5vw] bg-white shadow-sm mb-2">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-red-600">
          MyShop
        </Link>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-800 hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-gray-800 hover:text-red-600">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-800 hover:text-red-600">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
