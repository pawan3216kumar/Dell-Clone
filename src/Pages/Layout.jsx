import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center py-4">
            <Link to="/">Home</Link>
            <Link to="/sign" className="text-xl font-bold">Sign</Link>
            <Link to="/login"  className="text-xl font bold" >Login</Link>
            <Link to="/cart" className="text-xl font-bold">Cart</Link>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;