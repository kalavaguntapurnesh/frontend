import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      {user ? <p>Welcome, {user.email}</p> : <p>Loading user data...</p>}
    </div>
  );
};

export default Dashboard;
