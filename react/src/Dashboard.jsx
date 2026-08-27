import Timestamp from "./Timestamp";
import UserCard from "./UserCard";

function Dashboard() {
  const statistics = [
    {
      title: "Total Users",
      value: "1,250"
    },
    {
      title: "Products",
      value: "350"
    },
    {
      title: "Orders",
      value: "2,540"
    },
    {
      title: "Revenue",
      value: "$125,000"
    }
  ];

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Dashboard</h2>

          <p>
            Welcome to the application dashboard.
          </p>
        </div>

        <button className="primary-button">
          Create Report
        </button>
      </div>

      <div className="statistics">
        {statistics.map((item) => (
          <div className="stat-card" key={item.title}>
            <h3>{item.title}</h3>

            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="users-section">
        <h2>Recent Users</h2>

        <div className="user-list">
          <UserCard
            name="John Smith"
            email="john@example.com"
            role="Admin"
          />

          <UserCard
            name="David Wilson"
            email="david@example.com"
            role="Developer"
          />

          <UserCard
            name="Sarah Johnson"
            email="sarah@example.com"
            role="Manager"
          />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;