// import {  ArrowRight } from 'lucide-react';

// const Features = () => {
//   const features = [
//     {
//       icon: <img src="https://www.interswitchgroup.com/assets/images/home/brand_isw.png"/>,
//       title: "Leverage our Technology Expertise to Grow Your Business",
//       // description: "Bank-grade security with 99.99% uptime for all transactions"
//     },
//     {
//       icon: <img src="https://www.interswitchgroup.com/assets/images/home/qtb_isw.png" />,
//       title: "Make Everyday Payments with Ease",
//       // description: "Operating in multiple African countries with local expertise"
//     },
//     {
//       icon: <img src="https://www.interswitchgroup.com/assets/images/home/verve_isw.png" />,
//       title: "Explore our Suite of Cards & Digital Tokens",
//       // description: "24/7 support with dedicated account management"
//     },
//     {
//       icon: <img src="https://www.interswitchgroup.com/assets/images/home/quickteller_isw.png" />,
//       title: "Integrate Digital Payment and Get an Online Store",
//       // description: "Cutting-edge technology and continuous innovation"
//     }
//   ];

//   return (
//     <div className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h4 className="text-2xl uppercase text-gray-400">Who we are</h4>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-6xl m-a pt-10">
//           We are an Africa-oriented technology-driven<br></br>
//           company focused on payments
//           </h2>
//           <h6 className="text-lg text-gray-600 max-w-3xl mx-auto">
//           Our diversified proposition delivers value across the board
//           </h6>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
//               <p className="text-gray-600 mb-4">{feature.description}</p>
//               <a href="#" className="text-[#bacfe2] font-semibold flex items-center group">
//                 Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import { ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <img src="https://www.interswitchgroup.com/assets/images/home/brand_isw.png" className="w-full h-full object-contain" />,
      title: "Leverage our Technology Expertise to Grow Your Business",
    },
    {
      icon: <img src="https://www.interswitchgroup.com/assets/images/home/qtb_isw.png" className="w-full h-full object-contain" />,
      title: "Make Everyday Payments with Ease",
    },
    {
      icon: <img src="https://www.interswitchgroup.com/assets/images/home/verve_isw.png" className="w-full h-full object-contain" />,
      title: "Explore our Suite of Cards & Digital Tokens",
    },
    {
      icon: <img src="https://www.interswitchgroup.com/assets/images/home/quickteller_isw.png" className="w-full h-full object-contain" />,
      title: "Integrate Digital Payment and Get an Online Store",
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-2xl uppercase text-gray-400">Who we are</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 max-w-6xl mx-auto pt-10">
            We are an Africa-oriented technology-driven<br />
            company focused on payments
          </h2>
          <h6 className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diversified proposition delivers value across the board
          </h6>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-full h-32 p-4 border-b">{feature.icon}</div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <a href="#" className="text-[#bacfe2] font-semibold inline-flex items-center group">
                  Get Started <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;