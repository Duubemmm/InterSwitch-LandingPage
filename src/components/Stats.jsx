const Stats = () => {
    const stats = [
      { number: "200K+", label: "Merchants" },
      { number: "190M+", label: "Transactions Monthly" },
      { number: "54M+", label: "Cards Issued" },
      { number: "$12B+", label: "Processing Volume" }
    ];
  
    return (
      <div className="bg-[#1D0F6D] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Stats;