import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Navbar />

      <main className="main-content">
        <Dashboard />
      </main>

      <Footer />
    </div>
  );
}

export default App;