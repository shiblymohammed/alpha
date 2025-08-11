import React, { useEffect, useState } from "react";

interface ElegantHeritageLoaderProps {
  isLoading: boolean;
  logoSrc: string;
  text?: string;
  minDisplayTime?: number;
}

const ElegantHeritageLoader: React.FC<ElegantHeritageLoaderProps> = ({
  isLoading,
  logoSrc,
  text = "Welcome to Heritage",
  minDisplayTime = 3000
}) => {
  const [showLoader, setShowLoader] = useState(isLoading);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let phaseTimer: NodeJS.Timeout;

    if (isLoading) {
      setShowLoader(true);
      setAnimationPhase(0);
      
      // Progress through animation phases
      phaseTimer = setTimeout(() => setAnimationPhase(1), 800);
    } else {
      timer = setTimeout(() => {
        setAnimationPhase(2);
        setTimeout(() => setShowLoader(false), 800);
      }, minDisplayTime);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(phaseTimer);
    };
  }, [isLoading, minDisplayTime]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-repeat opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.15'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20v20H30zM10 10v20c11.046 0 20-8.954 20-20H10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            animation: 'float 20s infinite linear'
          }}
        />
      </div>

      {/* Elegant Geometric Frame */}
      <div className="relative">
        {/* Outer decorative ring */}
        <div 
          className={`absolute -inset-8 sm:-inset-12 md:-inset-16 border border-amber-600/30 rounded-full transition-all duration-2000 ${
            animationPhase >= 1 ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
          style={{
            background: 'conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.1), transparent)',
            animation: animationPhase >= 1 ? 'spin 15s linear infinite' : 'none'
          }}
        />
        
        {/* Inner golden accent */}
        <div 
          className={`absolute -inset-4 sm:-inset-6 md:-inset-8 border-2 border-amber-400/20 rounded-full transition-all duration-1500 delay-300 ${
            animationPhase >= 1 ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        />

        {/* Logo Container */}
        <div className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex items-center justify-center transition-all duration-1000 ${
          animationPhase >= 1 ? 'scale-100 opacity-100' : 'scale-85 opacity-0'
        }`}>
          
          {/* Logo with elegant reveal */}
          <img
            src={logoSrc}
            alt="Heritage Resort Logo"
            className={`w-full h-full object-contain filter transition-all duration-2000 ${
              animationPhase === 2 ? 'brightness-110 contrast-110' : ''
            }`}
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.3))',
              animation: animationPhase >= 1 ? 'logoFloat 3s ease-in-out infinite' : 'none'
            }}
          />
          
          {/* Elegant shine effect */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 ${
              animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              animation: animationPhase >= 1 ? 'shine 4s ease-in-out infinite' : 'none',
              transform: 'skewX(-20deg)'
            }}
          />
        </div>
      </div>

      {/* Elegant Typography */}
      <div className="mt-8 sm:mt-10 md:mt-12 text-center">
        <div className={`transition-all duration-1500 delay-700 ${
          animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-amber-900 mb-2 sm:mb-3">
            {text}
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4">
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-amber-600/40" />
            <div className="w-1.5 h-1.5 bg-amber-600/60 rounded-full animate-pulse" />
            <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-amber-600/40" />
          </div>
        </div>

        {/* Loading dots */}
        <div className={`flex justify-center space-x-1 sm:space-x-2 mt-6 sm:mt-8 transition-all duration-1500 delay-1000 ${
          animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-amber-600/60 rounded-full"
              style={{
                animation: `pulse 1.5s ease-in-out infinite ${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-amber-400/30 rounded-full transition-all duration-1000 delay-${i * 200} ${
            animationPhase >= 1 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${20 + (i * 12)}%`,
            top: `${30 + (i % 3) * 15}%`,
            animation: `float ${3 + (i * 0.5)}s ease-in-out infinite ${i * 0.5}s`
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-20deg); }
          50% { transform: translateX(200%) skewX(-20deg); }
          100% { transform: translateX(-100%) skewX(-20deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};

// Demo component to show the loader in action
const LoaderDemo = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen bg-stone-50">
      <ElegantHeritageLoader 
        isLoading={isLoading}
        logoSrc="https://via.placeholder.com/200x200/d4af37/ffffff?text=HERITAGE"
        text="Amritha Heritage Resort"
        minDisplayTime={3000}
      />
      
      {!isLoading && (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-3xl font-light text-amber-900 mb-4">Welcome!</h1>
            <button 
              onClick={() => setIsLoading(true)}
              className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Restart Loader
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoaderDemo;