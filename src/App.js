import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import FeaturePage from './pages/FeaturePage';
import FaqPage from './pages/FaqPage';
import CommunityPage from './pages/CommunityPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <FeaturePage />
      <FaqPage />
      <CommunityPage />
    </div>
  );
}

export default App;
