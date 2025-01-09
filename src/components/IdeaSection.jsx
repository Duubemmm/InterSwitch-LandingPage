const IdeaSection = () => {
    return (
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Image Section */}
          <img
            src="https://interswitchgroup.com/assets/images/home/idea.svg"
            alt="Idea Illustration"
            className="w-32 h-32 mb-6"
          />
  
          {/* Write-up Section */}
          <div>
            <p className="text-4xl font-semibold text-gray-700 text-justify">
              We create solutions that enable<br></br> individuals and communities<br></br>prosper across Africa.
            </p>
            <p className="text-lg text-gray-500 mt-4 -ml-1 w-2/3">
              We see an Africa where digital payments are a seamless part of <br></br>everyday life.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default IdeaSection;
  