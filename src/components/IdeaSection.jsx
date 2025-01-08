const IdeaSection = () => {
    return (
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Image Section */}
          <img
            src="https://interswitchgroup.com/assets/images/home/idea.svg"
            alt="Idea Illustration"
            className="w-32 h-32 mx-auto mb-6"
          />
  
          {/* Write-up Section */}
          <div>
            <p className="text-2xl font-semibold text-gray-900">
              We create solutions that enable individuals and communities prosper across Africa.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We see an Africa where digital payments are a seamless part of everyday life.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default IdeaSection;
  