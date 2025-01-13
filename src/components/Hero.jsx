import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="text-blue-950 pt-6 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-2xl md:text-7xl mb-6 mt-16 font- text-blue-950">
              The Gateway To Africa&apos;s Payment Ecosystem
            </h1>
            <p className="text-xl md:text-xl mb-8 text-black-200">
              We create and sustain a payment ecosystem that helps commmerce evolve, businesses grow and individuals thrive.
            </p>
            <div className="space-x-4">
              <a href="#" className="inline-flex items-center bg-blue-950 text-white px-8 py-3 mb-10 rounded-full font-semibold hover:bg-blue-900 transition group">
                Learn More <ArrowDown size={16} className="ml-2 group-hover:translate-y-1 transition-transform text-white" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div 
              className="absolute -left-8 -bottom-8 w-full h-full z-0"
              style={{
                backgroundImage: 'url(https://interswitchgroup.com/assets/images/home/dots.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom left',
                backgroundSize: '70% 70%'
              }}
            />
            <img
              src="https://interswitchgroup.com/assets/images/home/video-min.jpg"
              alt="Digital Payments in Africa"
              className="rounded-2xl shadow-2xl mt-4 relative z-10"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;