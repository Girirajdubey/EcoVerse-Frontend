import { Sun, Moon, Award, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import RewardsPanel from '../rewards/RewardsPanel';
import { useState } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [showRewards, setShowRewards] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className={`sticky top-0 z-10 ${theme === 'dark' ? 'dark:bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent animate-pulse-slow relative group">
                Eco
                <span className="text-green-600 dark:text-green-400">Verse</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full transition-all duration-500"></span>
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center px-8">
            <div className="w-full max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search posts, users, or locations..."
                  className="w-full bg-gray-100 dark:bg-gray-700 border-transparent focus:border-green-500 dark:focus:border-green-400 rounded-full pl-10 pr-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-colors duration-200"
                />
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            <div className="relative">
              <button
                onClick={() => setShowRewards(!showRewards)}
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Rewards"
              >
                <Award className="h-5 w-5 text-yellow-500" />
                <span className="font-medium">230 ECO Coins</span>
              </button>
              
              {showRewards && <RewardsPanel onClose={() => setShowRewards(false)} />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;