// import { useState, useEffect, useRef } from "react";
// // FIXED: Removed unused 'Star' import - only keeping the icons that are actually used in the component
// import { MapPin, ArrowRight, Clock } from "lucide-react";

// const DestinationSection = () => {
//   const [visibleCards, setVisibleCards] = useState<boolean[]>([
//     false,
//     false,
//     false,
//   ]);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const destinations = [
//     {
//       title: "Shri Padmanabhaswami Temple",
//       description:
//         "Constructed in the Dravidian style by a Maharaja of Travancore in 1733, the temple is dedicated to Vishnu who reclines on the sacred serpent Anantha, which gives Thiruvananthapuram its name.",
//       image:
//         "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       distance: "5 km",
//       category: "Heritage",
//       rating: "4.8",
//     },
//     {
//       title: "Kovalam Beach",
//       description:
//         "Located 16 km from Thiruvananthapuram, Kovalam Beach attracts both the rich and famous. The coastline is dotted with both luxury and budget resorts.",
//       image:
//         "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       distance: "16 km",
//       category: "Beach",
//       rating: "4.7",
//     },
//     {
//       title: "Veli Tourist Village",
//       description:
//         "Bordered by the Veli lagoon and Arabian Sea, this attraction offers water sports, a floating bridge, children's park, restaurant, and gardens. Just 8 km from the city.",
//       image:
//         "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//       distance: "8 km",
//       category: "Adventure",
//       rating: "4.6",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const cards = entry.target.querySelectorAll(".destination-card");
//             cards.forEach((_, index) => {
//               setTimeout(() => {
//                 setVisibleCards((prev) => {
//                   const newVisible = [...prev];
//                   newVisible[index] = true;
//                   return newVisible;
//                 });
//               }, index * 200);
//             });
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24 bg-heritage-bg-accent overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-text-primary-title/20 to-text-primary-title/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
//         <div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-text-primary-title/15 to-textprimary-title/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-text-primary-title/10 text-text--primary-title rounded-full text-sm font-medium mb-6 font-playfair">
//             <MapPin size={16} />
//             Discover Thiruvananthapuram
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary-title mb-6 leading-tight font-playfair">
//             Heritage
//             <span className="block text-text-primary-title">Attractions</span>
//           </h2>
//           <p className="text-xl text-text-primary-title/70 max-w-3xl mx-auto leading-relaxed font-cormorant">
//             Immerse yourself in the rich cultural heritage and colonial history
//             that surrounds Amritha Heritage. Each destination tells a unique
//             story of Thiruvithamkoor's glorious past.
//           </p>
//         </div>

//         {/* Destinations Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinations.map((destination, index) => (
//             <div
//               key={index}
//               className={`destination-card group relative overflow-hidden rounded-3xl bg-heritage-bg-accent shadow-lg hover: transition-all duration-700 transform border-2 border-text-description-2 ${
//                 visibleCards[index]
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-12"
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               {/* Image Container */}
//               <div className="relative h-64 md:h-72 overflow-hidden">
//                 <img
//                   src={destination.image}
//                   alt={destination.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 "></div>

//                 {/* Distance */}
//                 <div className="absolute bottom-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
//                   <Clock size={14} className="text-primary-text/70" />
//                   <span className="text-sm font-medium text-primary-text">
//                     {destination.distance}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-6 md:p-8">
//                 <h3 className="text-xl md:text-2xl font-bold text-text-primary-title mb-4 group-hover:text-text-primary-title/80 transition-colors duration-300 font-playfair">
//                   {destination.title}
//                 </h3>

//                 <p className="text-text-primary-title/70 leading-relaxed mb-6 line-clamp-3 md:line-clamp-none font-cormorant">
//                   {destination.description}
//                 </p>

//                 {/* CTA Button */}
//                 <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-primary-text text-text-primary-title font-semibold border-2 border-text-primary-title rounded-xl hover:bg-primary-text/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-text/25 transform hover:-translate-y-0.5">
//                   Explore More
//                   <ArrowRight
//                     size={16}
//                     className="transition-transform duration-300 group-hover/btn:translate-x-1"
//                   />
//                 </button>
//               </div>

//               {/* Hover Effect Border */}
//               <div className="absolute inset-0 rounded-none border-2 border-transparent group-hover:border-primary-text/20 transition-colors duration-300 pointer-events-none"></div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA Section */}
//         <div className="text-center mt-16">
//           <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-heritage-bg-accent backdrop-blur-sm rounded-2xl shadow-xl border border-text-primary-title">
//             <div className="text-center sm:text-left">
//               <h3 className="text-2xl font-bold text-text-primary-title mb-2 font-playfair">
//                 Ready to Explore?
//               </h3>
//               <p className="text-text-primary-title/70 font-cormorant">
//                 Let our heritage concierge help you plan the perfect colonial
//                 journey
//               </p>
//             </div>
//             <button className=" border-2 border-text-primary-title px-8 py-4 bg-primary-text text-text-primary-title font-bold rounded-xl hover:bg-primary-text/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary-text/25 transform hover:-translate-y-0.5 whitespace-nowrap">
//               Plan Your Heritage Journey
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-text/20 to-transparent"></div>
//     </section>
//   );
// };

// export default DestinationSection;





import { useState, useEffect, useRef } from "react";
import { MapPin, ArrowRight, Clock, Star } from "lucide-react";

const DestinationSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    true,
    true,
    true,
  ]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const destinations = [
    {
      title: "Shri Padmanabhaswami Temple",
      description:
        "Constructed in the Dravidian style by a Maharaja of Travancore in 1733, the temple is dedicated to Vishnu who reclines on the sacred serpent Anantha, which gives Thiruvananthapuram its name.",
      image:
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "5 km",
      category: "Heritage",
      rating: "4.8",
    },
    {
      title: "Kovalam Beach",
      description:
        "Located 16 km from Thiruvananthapuram, Kovalam Beach attracts both the rich and famous. The coastline is dotted with both luxury and budget resorts.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "16 km",
      category: "Beach",
      rating: "4.7",
    },
    {
      title: "Veli Tourist Village",
      description:
        "Bordered by the Veli lagoon and Arabian Sea, this attraction offers water sports, a floating bridge, children's park, restaurant, and gardens. Just 8 km from the city.",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      distance: "8 km",
      category: "Adventure",
      rating: "4.6",
    },
  ];

  useEffect(() => {
    // Set initial visibility with staggered animation
    setIsHeaderVisible(false);
    setVisibleCards([false, false, false]);
    
    const headerTimer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 100);

    const cardTimers = destinations.map((_, index) => 
      setTimeout(() => {
        setVisibleCards(prev => {
          const newVisible = [...prev];
          newVisible[index] = true;
          return newVisible;
        });
      }, 600 + (index * 200))
    );

    return () => {
      clearTimeout(headerTimer);
      cardTimers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-heritage-bg-accent overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating orbs with modern animations */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-gradient-to-r from-text-primary-title/30 to-text-primary-title/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div 
          className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-60 sm:h-60 md:w-96 md:h-96 bg-gradient-to-r from-text-primary-title/20 to-text-primary-title/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        
        {/* Animated gradient mesh */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gradient-to-br from-text-primary-title/10 to-transparent rounded-full animate-bounce" style={{ animationDuration: "3s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-gradient-to-tl from-text-primary-title/15 to-transparent rounded-full animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header with Stagger Animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isHeaderVisible 
              ? "opacity-100 transform translate-y-0" 
              : "opacity-0 transform translate-y-8"
          }`}
        >
          {/* Badge with slide-in animation */}
          <div 
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-text-primary-title/10 text-text-primary-title rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 font-playfair transition-all duration-700 ${
              isHeaderVisible 
                ? "opacity-100 transform translate-x-0" 
                : "opacity-0 transform -translate-x-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <MapPin size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Discover Thiruvananthapuram</span>
            <span className="xs:hidden">Discover</span>
          </div>
          
          {/* Main title with typewriter effect */}
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary-title mb-4 sm:mb-6 leading-tight font-playfair transition-all duration-700 ${
              isHeaderVisible 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Heritage
            <span className="block text-text-primary-title animate-pulse" style={{ animationDuration: "2s" }}>
              Attractions
            </span>
          </h2>
          
          {/* Description with fade-in */}
          <p 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-text-primary-title/70 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-cormorant transition-all duration-700 ${
              isHeaderVisible 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Immerse yourself in the rich cultural heritage and colonial history
            that surrounds Amritha Heritage. Each destination tells a unique
            story of Thiruvithamkoor's glorious past.
          </p>
        </div>

        {/* Enhanced Responsive Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`destination-card group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-heritage-bg-accent shadow-lg hover:shadow-2xl transition-all duration-700 transform border-2 border-text-description-2 hover:border-text-primary-title/30 hover:-translate-y-2 hover:scale-105 ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Image Container with Parallax Effect */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 bg-text-primary-title/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs sm:text-sm font-medium text-heritage-bg-accent">
                    {destination.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <Star size={12} className="sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                  <span className="text-xs sm:text-sm font-medium text-text-primary-title">
                    {destination.rating}
                  </span>
                </div>

                {/* Distance with enhanced styling */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center gap-1 px-2 sm:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full group-hover:bg-text-primary-title/90 transition-colors duration-300">
                  <Clock size={12} className="sm:w-3 sm:h-3 text-text-primary-title/70 group-hover:text-heritage-bg-accent transition-colors duration-300" />
                  <span className="text-xs sm:text-sm font-medium text-text-primary-title group-hover:text-heritage-bg-accent transition-colors duration-300">
                    {destination.distance}
                  </span>
                </div>
              </div>

              {/* Enhanced Content Section */}
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-primary-title mb-3 sm:mb-4 group-hover:text-text-primary-title/80 transition-colors duration-300 font-playfair line-clamp-2">
                  {destination.title}
                </h3>

                <p className="text-sm sm:text-base text-text-primary-title/70 leading-relaxed mb-4 sm:mb-6 line-clamp-3 font-cormorant">
                  {destination.description}
                </p>

                {/* Enhanced CTA Button with Modern Animations */}
                <button className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-normal tracking-[0.15em] text-button-accent-bg border-2 border-button-accent-bg rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-button-accent-bg/25 hover:-translate-y-0.5 hover:tracking-widest hover:bg-button-accent-bg hover:text-heritage-bg-accent overflow-hidden">
                  <span className="relative z-10 transition-all duration-300">Order Now</span>
                  <ArrowRight
                    size={14}
                    className="sm:w-4 sm:h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                  {/* Ripple effect */}
                  <div className="absolute inset-0 -z-10 bg-button-accent-bg transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>

              {/* Enhanced Hover Effect with Glow */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-text-primary-title/20 group-hover:shadow-lg group-hover:shadow-text-primary-title/10 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-heritage-bg-accent backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-text-primary-title/30 hover:border-text-primary-title/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 max-w-full sm:max-w-none mx-4 sm:mx-0">
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary-title mb-2 font-playfair">
                Ready to Explore?
              </h3>
              <p className="text-sm sm:text-base text-text-primary-title/70 font-cormorant">
                Let our heritage concierge help you plan the perfect colonial journey
              </p>
            </div>
            <button className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-normal tracking-[0.15em] text-button-accent-bg border-2 border-button-accent-bg rounded-md transition-all duration-300 hover:shadow-lg hover:shadow-button-accent-bg/25 hover:-translate-y-0.5 hover:tracking-widest hover:bg-button-accent-bg hover:text-heritage-bg-accent whitespace-nowrap overflow-hidden">
              <span className="relative z-10">Plan Your Heritage Journey</span>
              {/* Animated background */}
              <div className="absolute inset-0 -z-10 bg-button-accent-bg transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-center"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-text-primary-title/30 to-transparent"></div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-text-primary-title/20 rounded-full animate-ping"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s"
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
