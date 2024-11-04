import { useSelector } from "react-redux";

const Profile = () => {
  // Access the user details from the Redux store
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>
      {user ? (
        <div>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Add more fields here if you want to display additional user details */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
