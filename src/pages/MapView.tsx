import { useState } from 'react';
import { MapPin, Layers, ChevronDown } from 'lucide-react';

const MapView = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  const pollutionHotspots = [
    { id: 1, name: 'Industrial Zone A', severity: 'High', lat: 34.052, lng: -118.243 },
    { id: 2, name: 'Riverfront Area', severity: 'Moderate', lat: 34.056, lng: -118.249 },
    { id: 3, name: 'Commercial District', severity: 'Low', lat: 34.048, lng: -118.255 },
    { id: 4, name: 'Harbor Zone', severity: 'Severe', lat: 34.043, lng: -118.261 },
    { id: 5, name: 'Downtown Junction', severity: 'Moderate', lat: 34.041, lng: -118.235 },
  ];

  return (
    <div className="h-[calc(100vh-8rem)]">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold dark:text-white">Pollution Map</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <Layers className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">Filters</span>
          <ChevronDown className={`w-4 h-4 ml-2 text-gray-600 dark:text-gray-400 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pollution Type</label>
            <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2">
              <option value="all">All Types</option>
              <option value="air">Air Pollution</option>
              <option value="water">Water Pollution</option>
              <option value="land">Land Pollution</option>
              <option value="noise">Noise Pollution</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Severity Level</label>
            <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2">
              <option value="all">All Levels</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
              <option value="severe">Severe</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time Period</label>
            <select className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2">
              <option value="all">All Time</option>
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>
          </div>
        </div>
      )}
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-[calc(100%-4rem)]">
        <div className="relative w-full h-full">
          {/* This would be replaced with an actual map component */}
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
            <img 
              src="https://images.pexels.com/photos/4386429/pexels-photo-4386429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Map placeholder" 
              className="w-full h-full object-cover opacity-50"
            />
            
            {/* Simulated map pins */}
            {pollutionHotspots.map((spot, index) => (
              <div 
                key={spot.id}
                className={`absolute w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 animate-pulse`}
                style={{ 
                  top: `${30 + (index * 10)}%`, 
                  left: `${20 + (index * 12)}%`,
                  zIndex: 5 
                }}
              >
                <MapPin 
                  className={`w-6 h-6 ${
                    spot.severity === 'Severe' ? 'text-red-500' :
                    spot.severity === 'High' ? 'text-orange-500' :
                    spot.severity === 'Moderate' ? 'text-yellow-500' : 'text-green-500'
                  }`} 
                />
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-md text-xs whitespace-nowrap mt-1">
                  {spot.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md">
            <h3 className="font-medium text-sm mb-2 dark:text-white">Severity Legend</h3>
            <div className="space-y-1">
              <div className="flex items-center text-xs">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">Severe</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">High</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">Moderate</span>
              </div>
              <div className="flex items-center text-xs">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-gray-700 dark:text-gray-300">Low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;