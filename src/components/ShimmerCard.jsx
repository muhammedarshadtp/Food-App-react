
const ShimmerCard = () => {
    return (
      <div className="p-6">
        <div className="flex flex-wrap bg-gray-50 rounded-lg shadow-md p-6 mb-8 justify-center items-center animate-pulse">
          <div className="w-full md:w-1/2 text-center">
            <div className="h-6 bg-gray-300 rounded-md w-40 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded-md w-56 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md w-48 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md w-32 mx-auto"></div>
          </div>
        </div>
  
        <div className="text-center">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-4 mb-4 animate-pulse"
            >
              <div className="h-5 bg-gray-300 rounded-md w-40 mx-auto mb-3"></div>
              <div className="h-4 bg-gray-300 rounded-md w-56 mx-auto mb-2"></div>
              <div className="h-4 bg-gray-300 rounded-md w-48 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ShimmerCard  