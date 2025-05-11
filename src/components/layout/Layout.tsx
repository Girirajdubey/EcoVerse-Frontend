import { ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useTheme } from '../../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Layout = ({ children, onNavigate, currentPage }: LayoutProps) => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark:bg-gray-900 dark:text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Navbar />
      <div className="flex">
        <Sidebar onNavigate={onNavigate} currentPage={currentPage} />
        <main className="flex-grow px-4 py-8 md:px-8 ml-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;