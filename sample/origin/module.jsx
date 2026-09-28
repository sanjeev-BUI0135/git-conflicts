<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Git Conflict Demo Application">
  <meta name="author" content="DevOps Demo">
  <title>Git Conflict Demo</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      color: #222;
    }

    header {
      background: #222;
      color: white;
      padding: 20px;
      text-align: center;
    }

    nav {
      background: #333;
      padding: 12px;
      text-align: center;
    }

    nav a {
      color: white;
      text-decoration: none;
      margin: 0 15px;
    }

    main {
      width: 90%;
      max-width: 1100px;
      margin: 30px auto;
    }

    .hero {
      background: white;
      padding: 30px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .hero h2 {
      margin-top: 0;
    }

    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      flex: 1;
      min-width: 220px;
    }

    .button {
      display: inline-block;
      padding: 10px 18px;
      background: #222;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }

    .features {
      background: white;
      padding: 25px;
      margin-top: 20px;
      border-radius: 8px;
    }

    .features li {
      margin-bottom: 10px;
    }

    footer {
      background: #222;
      color: white;
      text-align: center;
      padding: 20px;
      margin-top: 40px;
    }
  </style>
</head>

<body>

  <header>
    <h1>Git Conflict Demo Application</h1>
    <p>Demonstration project for Git branching</p>
  </header>

  <nav>
    <a href="#home">Home</a>
    <a href="#features">Features</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>

  <main>

    <section id="home" class="hero">
      <h2>Welcome to the Application</h2>
      <p>
        This application is created to demonstrate Git branching,
        pull requests, merge conflicts, and deployment workflows.
      </p>
      <p>
        The application contains multiple sections so that developers
        can make different changes on different branches.
      </p>
      <a href="#features" class="button">View Features</a>
    </section>

    <section class="cards">

      <div class="card">
        <h3>Live Environment</h3>
        <p>
          This section represents the production environment.
        </p>
        <p>
          Production code should remain stable and tested.
        </p>
      </div>

      <div class="card">
        <h3>Staging Environment</h3>
        <p>
          This section represents the staging environment.
        </p>
        <p>
          Developers can test changes before production.
        </p>
      </div>

      <div class="card">
        <h3>Development</h3>
        <p>
          This section represents feature development.
        </p>
        <p>
          Developers create and test new functionality here.
        </p>
      </div>

    </section>

    <section id="features" class="features">
      <h2>Application Features</h2>

      <ul>
        <li>User authentication</li>
        <li>User dashboard</li>
        <li>Profile management</li>
        <li>Notification system</li>
        <li>Email integration</li>
        <li>Report generation</li>
        <li>File upload</li>
        <li>File download</li>
        <li>Search functionality</li>
        <li>API integration</li>
        <li>Database integration</li>
        <li>Logging system</li>
        <li>Monitoring system</li>
        <li>Error handling</li>
        <li>Role based access</li>
      </ul>
    </section>

    <section id="about" class="features">
      <h2>About This Demo</h2>

      <p>
        This project is intentionally simple and is designed
        for testing Git workflows.
      </p>

      <p>
        The main branches used in this project are live,
        staging, and feature branches.
      </p>

      <p>
        Developers can create feature branches from the live branch
        and raise pull requests to staging.
      </p>

      <p>
        Once the feature is tested and approved, it can be promoted
        to the live environment.
      </p>
    </section>

    <section class="features">
      <h2>Git Workflow</h2>

      <ol>
        <li>Create a feature branch.</li>
        <li>Develop the required functionality.</li>
        <li>Commit the changes.</li>
        <li>Push the feature branch.</li>
        <li>Create a pull request to staging.</li>
        <li>Resolve conflicts if required.</li>
        <li>Test the feature in staging.</li>
        <li>Approve the pull request.</li>
        <li>Create a production release branch.</li>
        <li>Deploy approved changes to live.</li>
      </ol>
    </section>

    <section class="features">
      <h2>Environment Information</h2>

      <p>Application Name: Git Conflict Demo</p>
      <p>Application Version: 1.0.0</p>
      <p>Environment: Demo</p>
      <p>Branch: feature/phase1</p>
      <p>Deployment Status: Testing</p>
      <p>Build Status: Successful</p>
      <p>Database Status: Connected</p>
      <p>API Status: Available</p>
    </section>

    <section id="contact" class="features">
      <h2>Contact</h2>

      <p>
        For application support, contact the development team.
      </p>

      <p>
        Email: support@example.com
      </p>

      <p>
        Team: DevOps and Development
      </p>
    </section>

  </main>

  <footer>
    <p>Git Conflict Demo Application</p>
    <p>Created for Git workflow testing</p>
    <p>Version 1.0.0</p>
  </footer>

</body>
</html>