import { Users, Award, BarChart2 } from 'lucide-react';

const Community = () => {
  const topContributors = [
    { id: 1, name: 'eco_warrior', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300', posts: 47, coins: 520 },
    { id: 2, name: 'green_activist', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300', posts: 35, coins: 410 },
    { id: 3, name: 'earth_guardian', avatar: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=300', posts: 29, coins: 385 },
    { id: 4, name: 'planet_protector', avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300', posts: 23, coins: 310 },
    { id: 5, name: 'eco_innovator', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300', posts: 18, coins: 275 },
  ];
  
  const recentEvents = [
    { id: 1, title: 'Beach Cleanup Drive', date: '2025-05-15', participants: 120, location: 'Pacific Beach' },
    { id: 2, title: 'Tree Planting Initiative', date: '2025-05-22', participants: 85, location: 'City Park' },
    { id: 3, title: 'Recycling Workshop', date: '2025-05-29', participants: 45, location: 'Community Center' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Community</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-green-50 dark:bg-green-900 rounded-lg shadow-md p-6 flex flex-col items-center">
          <Users className="w-10 h-10 text-green-600 dark:text-green-400 mb-2" />
          <h2 className="text-xl font-bold text-green-800 dark:text-green-300">5,243</h2>
          <p className="text-green-600 dark:text-green-400">Active Members</p>
        </div>
        
        <div className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-6 flex flex-col items-center">
          <BarChart2 className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-2" />
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">12,567</h2>
          <p className="text-blue-600 dark:text-blue-400">Reports Submitted</p>
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg shadow-md p-6 flex flex-col items-center">
          <Award className="w-10 h-10 text-yellow-600 dark:text-yellow-400 mb-2" />
          <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-300">156,780</h2>
          <p className="text-yellow-600 dark:text-yellow-400">ECO Coins Earned</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="font-semibold text-lg mb-4 dark:text-white">Top Contributors</h2>
          <ul className="space-y-3">
            {topContributors.map((user, index) => (
              <li key={user.id} className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors">
                <div className="w-6 text-center font-medium text-gray-500 dark:text-gray-400 mr-2">
                  {index + 1}
                </div>
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-10 h-10 rounded-full object-cover mr-3" 
                />
                <div className="flex-1">
                  <h3 className="font-medium dark:text-white">{user.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user.posts} posts</p>
                </div>
                <div className="flex items-center text-yellow-500 font-medium">
                  <Award className="w-4 h-4 mr-1" />
                  {user.coins}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="font-semibold text-lg mb-4 dark:text-white">Upcoming Events</h2>
          <ul className="space-y-3">
            {recentEvents.map(event => (
              <li key={event.id} className="p-3 border border-gray-100 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <h3 className="font-medium dark:text-white">{event.title}</h3>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    📅 {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    👥 {event.participants} participants
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  📍 {event.location}
                </p>
                <button className="mt-3 w-full py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors text-sm">
                  Join Event
                </button>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full py-2 text-center text-green-600 dark:text-green-400 font-medium hover:bg-green-50 dark:hover:bg-green-900 rounded transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;