
const ShimmerCart = () => {
    return (
      <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-4 shadow-md animate-pulse">
            <div className="h-40 bg-gray-300 rounded-md"></div>
            <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
            <div className="mt-2 h-4 bg-gray-300 rounded-md w-1/2"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ShimmerCart;
  