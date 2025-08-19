import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from '../components/ProfileDetails';
import ProfileSettings from '../components/ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav className="flex gap-4 mb-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProfileDetails />} /> {/* Default nested route */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      <Outlet /> {/* Render child routes */}
    </div>
  );
}

export default Profile;
