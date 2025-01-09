import { Check } from "lucide-react";

const SecuritySection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-12">
        {/* Animated Image Section */}
        <div className="relative">
          <img
            src="https://interswitchgroup.com/assets/images/home/certifications.svg"
            alt="Certifications"
            className="w-100 h-180 md:w-80 md:h-80 mx-auto animate-float"
          />
        </div>

        {/* Write-up Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Enterprise-grade security
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We adhere to best-in-class security recommendations, providing
            solutions that align with global standards of utmost security.
          </p>

          {/* List of Features */}
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-gray-700 text-lg">
              <Check className="text-blue-500 w-6 h-6" />
              Two-Factor Authentication
            </li>
            <li className="flex items-center gap-4 text-gray-700 text-lg">
              <Check className="text-blue-500 w-6 h-6" />
              NDPR Compliant
            </li>
            <li className="flex items-center gap-4 text-gray-700 text-lg">
              <Check className="text-blue-500 w-6 h-6" />
              Guaranteed Transaction Security
            </li>
            <li className="flex items-center gap-4 text-gray-700 text-lg">
              <Check className="text-blue-500 w-6 h-6" />
              Secure Cloud Option
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
