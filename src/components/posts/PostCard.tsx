import { useState } from 'react';
import { Leaf, MessageCircle, Share2, AlertCircle } from 'lucide-react';
import { formatDistanceToNow } from '../../utils/dateUtils';

export interface Post {
  id: string;
  username: string;
  avatar: string;
  timestamp: Date;
  imageUrl: string;
  caption: string;
  severity: {
    level: 'low' | 'moderate' | 'high' | 'severe';
    score: number;
  };
  likes: number;
  comments: number;
}

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  
  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };
  
  const getSeverityColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-700';
      case 'moderate': return 'bg-yellow-100 text-yellow-700';
      case 'high': return 'bg-orange-100 text-orange-700';
      case 'severe': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6 transition-transform duration-200 hover:shadow-lg transform hover:-translate-y-1">
      <div className="p-4 flex items-center">
        <img 
          src={post.avatar} 
          alt={post.username} 
          className="w-10 h-10 rounded-full object-cover mr-3" 
        />
        <div>
          <h3 className="font-medium dark:text-white">{post.username}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{formatDistanceToNow(post.timestamp)}</p>
        </div>
      </div>
      
      <div className="relative">
        <img 
          src={post.imageUrl} 
          alt="Pollution post" 
          className="w-full object-cover max-h-96" 
        />
        <div className={`absolute bottom-3 right-3 ${getSeverityColor(post.severity.level)} px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
          <AlertCircle className="w-4 h-4 mr-1" />
          {post.severity.level.charAt(0).toUpperCase() + post.severity.level.slice(1)} Severity
        </div>
      </div>
      
      <div className="p-4">
        <p className="mb-3 dark:text-gray-200">{post.caption}</p>
        
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <span className="mr-6 flex items-center">
            <span className="font-medium mr-1">Pollution Score:</span> 
            <span className={`${post.severity.score > 70 ? 'text-red-500' : post.severity.score > 40 ? 'text-yellow-500' : 'text-green-500'}`}>
              {post.severity.score}/100
            </span>
          </span>
          <span className="flex items-center">
            <span className="font-medium mr-1">Reward:</span> 
            <span className="text-yellow-500">{Math.floor(post.severity.score / 10)} ECO Coins</span>
          </span>
        </div>
        
        <div className="flex justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-700">
          <button 
            onClick={handleLike}
            className={`flex items-center transition-colors duration-300 ${
              liked 
                ? 'text-green-500 dark:text-green-400' 
                : 'text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400'
            }`}
          >
            <Leaf className={`w-5 h-5 mr-1 transition-transform duration-300 ${
              liked ? 'fill-current transform rotate-12 scale-110' : ''
            }`} />
            {likeCount}
          </button>
          
          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <MessageCircle className="w-5 h-5 mr-1" />
            {post.comments}
          </button>
          
          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
            <Share2 className="w-5 h-5 mr-1" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;