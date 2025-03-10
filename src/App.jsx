import React, { useState, useEffect } from 'react';
// Fixed import syntax
import profile from "./img10.jpeg"

const BirthdayWishWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  

  // Generate random floating elements and show confetti on load
  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setShowConfetti(true), 1000);
    
    const elements = [];
    
    // Generate 50 random flowers, hearts, and stars
    for (let i = 0; i < 50; i++) {
      const typeRandom = Math.random();
      const type = typeRandom > 0.6 ? 'flower' : (typeRandom > 0.3 ? 'heart' : 'star');
      
      elements.push({
        id: i,
        type: type,
        x: Math.random() * 100, // random x position (0-100%)
        y: Math.random() * 100, // random y position (0-100%)
        size: Math.random() * 1.8 + 0.5, // random size (0.5-2.3)
        speed: Math.random() * 15 + 8, // random animation speed (8-23s)
        delay: Math.random() * 10, // random delay (0-10s)
        rotate: Math.random() * 360, // random rotation (0-360deg)
        opacity: Math.random() * 0.4 + 0.6, // random opacity (0.6-1)
      });
    }
    
    setFloatingElements(elements);
  }, []);

  // Symbols for flowers, hearts, and stars
  const getSymbol = (type) => {
    if (type === 'flower') {
      const flowers = ['🌸', '🌹', '🌺', '🌻', '🌼', '💐', '🌷', '🪷', '🥀'];
      return flowers[Math.floor(Math.random() * flowers.length)];
    } else if (type === 'heart') {
      const hearts = ['❤️', '💕', '💖', '💗', '💓', '💞', '💘', '💝', '💟'];
      return hearts[Math.floor(Math.random() * hearts.length)];
    } else {
      const stars = ['✨', '🌟', '⭐', '💫', '🎇', '🎆'];
      return stars[Math.floor(Math.random() * stars.length)];
    }
  };

  // Generate confetti elements
  const renderConfetti = () => {
    const confetti = [];
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'];
    
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100;
      const width = Math.random() * 10 + 5;
      const height = Math.random() * 4 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      confetti.push(
        <div
          key={i}
          className={`absolute ${color} rounded-sm opacity-70`}
          style={{
            left: `${left}%`,
            top: '-10px',
            width: `${width}px`,
            height: `${height}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `confetti ${Math.random() * 3 + 2}s linear forwards ${Math.random() * 3}s`
          }}
        />
      );
    }
    
    return confetti;
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-rose-300 overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute w-64 h-64 rounded-full bg-pink-200 opacity-30 top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-96 h-96 rounded-full bg-purple-200 opacity-30 bottom-1/3 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute w-80 h-80 rounded-full bg-yellow-200 opacity-20 top-2/3 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute text-2xl"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size * 2}rem`,
            animation: `float ${element.speed}s infinite ease-in-out ${element.delay}s, 
                       spin ${element.speed * 2}s infinite linear ${element.delay}s`,
            transform: `rotate(${element.rotate}deg)`,
            opacity: element.opacity,
            zIndex: 10,
          }}
        >
          {getSymbol(element.type)}
        </div>
      ))}

      {/* Confetti animation */}
      {showConfetti && renderConfetti()}

      {/* Main content with fade-in animation */}
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-1000 ease-in-out z-20 w-full max-w-md md:max-w-2xl px-4 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="bg-white bg-opacity-70 rounded-3xl p-6 md:p-8 backdrop-blur-lg shadow-2xl border border-white border-opacity-40">
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent animate-pulse">
              Happy Birthday!
            </h1>
            
            <div className="animate-fadeIn">
              {/* Photo area with decorative frame */}
              <div className="relative mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-pink-300 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center">
                <img src={profile} alt="profile"/>
                 
                </div>
                {/* Decorative elements around the photo */}
                <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💖</div>
                <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce" style={{ animationDelay: '0.3s' }}>🌸</div>
              </div>
              
              <p className="text-2xl text-purple-800 mb-4 font-medium">
                Dear Rajaji,
              </p>
              <div className="text-md md:text-lg text-purple-700 mb-6 leading-relaxed space-y-4 px-4 py-2 bg-white bg-opacity-50 rounded-xl">
                <p>
                  Thank you for being the reason behind my smiles, for understanding me like no one else can, and for standing with me.
                </p>
                <p>
                  You are my blessing from the universe, my proof that miracles do happen. I will always be grateful for that day I found you.
                </p>
                <p>
                  Today is all about celebrating you, the beautiful soul. Have the most amazing birthday—you deserve nothing less.
                </p>
              </div>
              <div className="mb-6 text-4xl md:text-6xl flex justify-center space-x-4 animate-bounce">
                <span>🎂</span><span style={{animationDelay: '0.3s'}}>✨</span><span style={{animationDelay: '0.6s'}}>🎉</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(15deg); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default BirthdayWishWebsite;