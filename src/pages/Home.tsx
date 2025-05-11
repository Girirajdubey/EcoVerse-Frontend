import { useState } from 'react';
import PostForm from '../components/posts/PostForm';
import PostList from '../components/posts/PostList';
import { Plus, X } from 'lucide-react';

const Home = () => {
  const [key, setKey] = useState(0);
  const [showPostForm, setShowPostForm] = useState(false);
  
  const handlePostCreated = () => {
    setKey(prev => prev + 1);
    setShowPostForm(false);
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">Environmental Feed</h1>
      
      {showPostForm ? (
        <>
          <button
            onClick={() => setShowPostForm(false)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
          <PostForm onPostCreated={handlePostCreated} />
        </>
      ) : (
        <button
          onClick={() => setShowPostForm(true)}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
        >
          <Plus className="h-6 w-6" />
        </button>
      )}
      
      <PostList key={key} />
    </div>
  );
};

export default Home;