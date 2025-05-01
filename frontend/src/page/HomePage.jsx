import { useState } from 'react';
import { BadgePlus } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { authUser } = useAuthStore();
  
  // Get name from authUser object
  const username = authUser?.name || 'Guest';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl p-8 md:p-12 text-center transition-all duration-500">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
          Welcome, <span className="text-indigo-600">{username}</span>
        </h1>
        
        <p className="text-gray-600 mb-10 text-lg md:text-xl leading-relaxed">
          Create, organize, track, and complete your goals effortlessly with a powerful task tracker designed to boost productivity, manage priorities, simplify planning, and help you achieve more every single day.
        </p>
        
        <button
          className={`flex items-center justify-center mx-auto gap-2 rounded-lg px-8 py-3 cursor-pointer font-medium transition-all duration-200 ${
            isHovered 
              ? 'bg-indigo-700 text-white shadow-md translate-y-[-2px]' 
              : 'bg-indigo-600 text-white'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <BadgePlus size={20} />
          <span>Create Project</span>
        </button>
      </div>
    </div>
  );
}
export default HomePage