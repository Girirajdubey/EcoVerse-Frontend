import { Award, Gift } from 'lucide-react';

interface RewardsPanelProps {
  onClose: () => void;
}

const RewardsPanel = ({ onClose }: RewardsPanelProps) => {
  const rewards = [
    { id: 1, name: 'Tree Planting Certificate', cost: 500 },
    { id: 2, name: 'Eco-Friendly Products Discount', cost: 300 },
    { id: 3, name: 'Partner NGO Donation', cost: 250 },
    { id: 4, name: 'EcoVerse Premium Badge', cost: 100 },
  ];

  return (
    <div className="absolute right-0 top-12 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-20">
      <div className="p-4 bg-green-50 dark:bg-green-900">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">ECO Coins</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            &times;
          </button>
        </div>
        <div className="flex items-center mt-2">
          <Award className="h-6 w-6 text-yellow-500 mr-2" />
          <span className="text-xl font-bold">230</span>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-medium mb-2 flex items-center">
          <Gift className="h-4 w-4 mr-1" />
          <span>Redeem Rewards</span>
        </h4>
        
        <ul className="space-y-2">
          {rewards.map((reward) => (
            <li key={reward.id} className="flex justify-between items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              <span>{reward.name}</span>
              <button 
                className={`px-2 py-1 rounded text-xs font-medium ${
                  230 >= reward.cost 
                    ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800'
                    : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'
                }`}
                disabled={230 < reward.cost}
              >
                {reward.cost} Coins
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RewardsPanel;