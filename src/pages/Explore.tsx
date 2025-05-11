import { Search, Filter } from 'lucide-react';

const Explore = () => {
  const categories = [
    { id: 'water', name: 'Water Pollution', count: 342 },
    { id: 'air', name: 'Air Pollution', count: 276 },
    { id: 'plastic', name: 'Plastic Waste', count: 518 },
    { id: 'industrial', name: 'Industrial Waste', count: 124 },
    { id: 'noise', name: 'Noise Pollution', count: 89 },
  ];

  const trending = [
    { id: 1, tag: '#CleanOceans', posts: 1254 },
    { id: 2, tag: '#NoMorePlastic', posts: 876 },
    { id: 3, tag: '#GreenCities', posts: 632 },
    { id: 4, tag: '#CleanAir', posts: 421 },
    { id: 5, tag: '#SaveForests', posts: 389 },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Explore Environmental Issues</h1>
      
      <div className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md mb-6">
        <Search className="w-5 h-5 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search for environmental issues, locations, or users"
          className="w-full bg-transparent border-none focus:outline-none dark:text-white"
        />
        <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="font-semibold text-lg mb-4 dark:text-white">Categories</h2>
          <ul className="space-y-2">
            {categories.map(category => (
              <li key={category.id}>
                <a href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors">
                  <span className="font-medium dark:text-white">{category.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="font-semibold text-lg mb-4 dark:text-white">Trending</h2>
          <ul className="space-y-2">
            {trending.map(item => (
              <li key={item.id}>
                <a href="#" className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors">
                  <span className="font-medium text-blue-600 dark:text-blue-400">{item.tag}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.posts} posts
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="font-semibold text-lg mb-4 dark:text-white">Most Polluted Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={`https://images.pexels.com/photos/${1000000 + i * 1000}/pexels-photo-${1000000 + i * 1000}.jpeg?auto=compress&cs=tinysrgb&w=500`} 
                  alt="Polluted area"
                  className="w-full h-32 object-cover"
                />
                <div className="p-2">
                  <h3 className="font-medium dark:text-white">Location #{i}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Severity: High</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;