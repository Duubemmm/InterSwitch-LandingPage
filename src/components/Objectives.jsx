const Objective = () => {
  return (
    <div className="bg-blue-950 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Centered Heading */}
          <p className="col-span-3 text-center text-4xl font-semibold">
            Africa&apos;s leading corporate<br></br> organisations depend on us to<br></br> power their payments.
          </p>

          {/* Centered Subtext */}
          <p className="col-span-3 text-center text-lg font-medium text-gray-300">
            From massive industries to small businesses, our turnkey payment solutions are 
            suitable for every business size or type.
          </p>

          {/* Right-Aligned Paragraph */}
          <p className="col-span-3 md:col-span-2 md:col-start-2 text-right font-semibold text-4xl">
            A big part of what we do is to break down barriers, ensuring that businesses are
            able to serve their customers how they want to, when they want to.
          </p>

          <p className="col-span-3 text-center text-4xl font-semibold">
          Almost any bill payment is<br></br> possible on our digital payment <br></br>platform, Quickteller.
          </p>

          {/* Centered Subtext */}
          <p className="col-span-3 text-center text-lg font-medium text-gray-300">
          Beyond payments, our users enjoy an easy connection to the<br></br> activities that power their modern lifestyle, such as flights,<br></br>events, and global shopping.


          </p>

          {/* Right-Aligned Paragraph */}
          <p className="col-span-3 md:col-span-2 md:col-start-2 text-right font-semibold text-4xl">
          Our widely accepted card scheme connects everyday people to easy payment options that are accessible within and beyond the continent.
</p>
        </div>
      </div>
    </div>
  );
};

export default Objective;
