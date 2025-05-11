import { useState, useEffect } from 'react';
import { AlertCircle, X, Leaf } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

const Toast = ({ message, type, duration = 3000, onClose }: ToastProps) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  
  useEffect(() => {
    // Trigger entrance animation
    requestAnimationFrame(() => {
      setVisible(true);
    });
    
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 700); // Match the duration of exit animation
    }, duration);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - (100 / (duration / 100));
        return newProgress < 0 ? 0 : newProgress;
      });
    }, 100);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [duration, onClose]);
  
  if (type === 'success') {
    return (
      <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-700 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          visible ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'
        }`} />
        <div className={`relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-lg p-12 transform transition-all duration-700 ${
          visible ? 'scale-110 rotate-0 opacity-100' : 'scale-95 rotate-3 opacity-0'
        } shadow-2xl`}>
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center animate-bounce-slow">
              <Leaf className="w-12 h-12 text-green-600 dark:text-green-400 transform rotate-45" />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-green-800 dark:text-green-200 animate-pulse">
                Small Steps, Green Futures
              </h2>
              <p className="text-xl text-green-600 dark:text-green-300 font-medium">
                Let's Walk Together
              </p>
            </div>
            <div className="w-full max-w-sm h-1 bg-gradient-to-r from-green-300 to-blue-300 dark:from-green-600 dark:to-blue-600 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  const styles = type === 'error' 
    ? {
        bg: 'bg-red-50 dark:bg-red-900',
        border: 'border-red-500',
        text: 'text-red-800 dark:text-red-200',
        icon: <AlertCircle className="w-5 h-5 text-red-500" />,
        progress: 'bg-red-500'
      }
    : {
        bg: 'bg-blue-50 dark:bg-blue-900',
        border: 'border-blue-500',
        text: 'text-blue-800 dark:text-blue-200',
        icon: <AlertCircle className="w-5 h-5 text-blue-500" />,
        progress: 'bg-blue-500'
      };
  
  return (
    <div 
      className={`fixed top-4 right-4 max-w-xs z-50 transform transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
      <div className={`border-l-4 ${styles.border} ${styles.bg} p-4 rounded-md shadow-lg`}>
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            {styles.icon}
          </div>
          <div className="flex-1">
            <p className={`text-sm ${styles.text} font-medium`}>{message}</p>
          </div>
          <div>
            <button onClick={() => {
              setVisible(false);
              setTimeout(onClose, 300);
            }} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
          <div 
            className={`${styles.progress} h-1 rounded-full`} 
            style={{ width: `${progress}%`, transition: 'width 100ms linear' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Toast;