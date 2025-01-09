const Contact = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-blue-950 p-10 rounded-lg">
        <h1 className="text-white font-extrabold text-3xl">
          Ready to Connect with Us
        </h1>

        {/* Write-up Section */}
        <div>
          <p className="text-2xl font-bold text-white mt-4">
            Let’s explore available opportunities or create bespoke solutions
            to serve your business needs.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-6 md:flex-row">
            <button className="text-lg text-white bg-blue-300 py-2 px-6 rounded-md font-bold uppercase">
              Request a Call Back
            </button>
            <button className="text-white bg-transparent border border-white py-2 px-6 rounded-md font-bold uppercase">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
