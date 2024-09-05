function CampaignDetails2() {
    return (
      <section className="my-5 px-4 md:px-10 lg:px-20">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 lg:p-8 border border-gray-200">
          {/* Title Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold text-gray-800">Support This Project</h1>
            <p className="text-lg text-gray-500">Help us reach our goal of NLe70,000</p>
          </div>
  
          {/* Progress Bar and Goal */}
          <div className="w-full my-6">
            <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: "35%" }}></div>
            </div>
            <p className="py-2 font-bold text-xl text-gray-700">NLe25,000 raised of NLe70,000 goal</p>
          </div>
  
          {/* Donation Form */}
          <div className="w-full mt-6">
            <form>
              <div className="flex flex-col gap-4">
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="py-3 border border-gray-300 rounded-lg px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="py-3 bg-blue-500 text-white font-bold text-xl rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
                  Donate Now
                </button>
              </div>
            </form>
          </div>
  
          {/* Action Buttons */}
          <div className="w-full flex justify-between items-center mt-6">
            <button className="border-2 border-blue-500 text-blue-500 rounded-lg py-2 px-6 font-medium hover:bg-blue-500 hover:text-white transition">
              Support
            </button>
            <button className="border-2 border-gray-300 text-gray-500 rounded-lg py-2 px-6 font-medium hover:bg-gray-200 transition">
              Share
            </button>
          </div>
  
          {/* Milestones */}
          <div className="w-full mt-10">
            <h2 className="text-2xl font-bold text-gray-800">Current Milestone</h2>
            <p className="text-lg text-gray-600 mt-2">
              Equipment Procurement: NLe10,000 of NLe15,000 raised
            </p>
            <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden my-2">
              <div className="bg-blue-500 h-full" style={{ width: "66%" }}></div>
            </div>
          </div>
  
          <div className="w-full mt-6">
            <h2 className="text-2xl font-bold text-gray-800">Completed Milestones</h2>
            <p className="text-lg text-gray-600 mt-2">
              Equipment Procurement: NLe15,000 of NLe15,000 raised
            </p>
            <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden my-2">
              <div className="bg-blue-500 h-full" style={{ width: "100%" }}></div>
            </div>
  
            <p className="text-lg text-gray-600 mt-2">
              Installation: NLe15,000 of NLe15,000 raised
            </p>
            <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden my-2">
              <div className="bg-blue-500 h-full" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default CampaignDetails2;
  