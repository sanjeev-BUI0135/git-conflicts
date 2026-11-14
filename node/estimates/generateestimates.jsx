function Settings() {
  return (
    <div className="page">
      <h1>Settings</h1>

      <div className="settings-card">
        <h2>Application Settings</h2>

        <label>
          Application Name
        </label>

        <input
          type="text"
          defaultValue="Git Demo Application"
        />

        <label>
          Email Notifications
        </label>

        <input
          type="checkbox"
          defaultChecked
        />

        <label>
          Enable Reports
        </label>

        <input
          type="checkbox"
          defaultChecked
        />

        <button className="primary-button">
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;