const Partners = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Section */}
        <div className="flex flex-col gap-8">
          {/* h2 and p side by side */}
          <div className="flex items-center gap-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex-1">
              Pushing the boundaries of innovation to deliver payment solutions that enable commerce across Africa
            </h2>
            <p className="text-lg text-gray-700 flex-1">
              Bespoke payment solutions for your modern lifestyle, business collections, disbursements, and payment processing.
            
            <p><button>Learn More</button></p>
            </p>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-04.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h2 className="text-lg font-medium text-gray-900 mt-4">8000<sup>+</sup></h2>
              <p className="text-sm text-gray-600">Billers aggregated on the Quickteller platform</p>
            </div>
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-04.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">41,000<sup>+</sup></h3>
              <p className="text-sm text-gray-600">Quickteller Paypoint agents enabled across Nigeria
              </p>
            </div>
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-14.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">190,000<sup>+</sup></h3>
              <p className="text-sm text-gray-600">Active businesses transacting daily
              </p>
            </div>
            <div className="text-center">
              <img src="https://interswitchgroup.com/assets/images/home/webIcons-12.svg" className="h-12 w-12 text-blue-500 mx-auto" />
              <h3 className="text-lg font-medium text-gray-900 mt-4">50,000,000<sup>+</sup></h3>
              <p className="text-sm text-gray-600">Cards activated on the Verve network
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
          <div className="text-center">
            <img
              src="https://www.interswitchgroup.com/assets/images/partners/visa.png"
              alt="Visa"
              className="h-12"
            />
            <p className="text-sm mt-2 text-gray-600">Visa</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.interswitchgroup.com/assets/images/partners/mastercard.png"
              alt="Mastercard"
              className="h-12"
            />
            <p className="text-sm mt-2 text-gray-600">Mastercard</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.interswitchgroup.com/assets/images/partners/verve.png"
              alt="Verve"
              className="h-12"
            />
            <p className="text-sm mt-2 text-gray-600">Verve</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.interswitchgroup.com/assets/images/partners/quickteller.png"
              alt="Quickteller"
              className="h-12"
            />
            <p className="text-sm mt-2 text-gray-600">Quickteller</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.interswitchgroup.com/assets/images/partners/payforce.png"
              alt="Payforce"
              className="h-12"
            />
            <p className="text-sm mt-2 text-gray-600">Payforce</p>
          </div>
          <div className="text-center">
            <img
              src="https://www.interswitchgroup.com/assets/images/partners/webpay.png"
              alt="Webpay"
              className="h-12"
            />
            <p className="text-sm mt-2 text-gray-600">Webpay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

