const config = {
  port: process.env.PORT || 5000,

  environment: process.env.NODE_ENV || "development",

  applicationName: "Git Conflict Demo",

  version: "1.0.0",

  database: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME || "demo_database"
  },

  features: {
    authentication: true,
    notifications: true,
    reports: true,
    fileUpload: true
  }
};

export default config;