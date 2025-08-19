import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2 className="text-xl font-bold">Profile Page</h2>
      <nav className="mt-3 flex gap-3">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <div className="mt-4 p-3 border rounded">
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;

