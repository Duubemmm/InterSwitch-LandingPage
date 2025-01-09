const Stats = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 flex-1">
              Pushing the boundaries of innovation to deliver payment solutions that enable commerce across Africa
            </h2>
            <div className="flex-1 flex flex-col gap-4">
              <p className="text-xl text-gray-700">
                Bespoke payment solutions for your modern lifestyle, business collections, disbursements, and payment processing.
              </p>
              <button className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition w-fit">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-04.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h2 className="text-3xl font-bold text-gray-900 mt-4">8000<sup>+</sup></h2>
              <p className="text-sm text-gray-600">Billers aggregated on the Quickteller platform</p>
            </div>
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-04.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 mt-4">41,000<sup>+</sup></h3>
              <p className="text-sm text-gray-600">Quickteller Paypoint agents enabled across Nigeria</p>
            </div>
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-14.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 mt-4">190,000<sup>+</sup></h3>
              <p className="text-sm text-gray-600">Active businesses transacting daily</p>
            </div>
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-12.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h3 className="text-3xl font-bold text-gray-900 mt-4">50,000,000<sup>+</sup></h3>
              <p className="text-sm text-gray-600">Cards activated on the Verve network</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;