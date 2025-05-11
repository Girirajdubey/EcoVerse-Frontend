import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Community from './pages/Community';
import MapView from './pages/MapView';
import Settings from './pages/Settings';
import Tools from './pages/Tools';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'explore':
        return <Explore />;
      case 'community':
        return <Community />;
      case 'map':
        return <MapView />;
      case 'settings':
        return <Settings />;
      case 'tools':
        return <Tools />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <Layout onNavigate={setCurrentPage} currentPage={currentPage}>
        {renderPage()}
      </Layout>
    </ThemeProvider>
  );
}

export default App;