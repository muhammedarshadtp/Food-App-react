# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Two type of Exports 

1. Defulat Exports
2. Named Exports
#


# React Hooks
 (Normal JS utility functions)

 -useState()
 -useEffect()

<!-- 
 {*/  
 
  {/* Menu Section */}
  <div>
    <h2 className="text-xl font-bold mb-6 text-center">🍴 Menu</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {itemCards.map((item) => {
        const imageId = item.card.info.imageId.trim();
        const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`;

        return (
          <div key={item.card.info.id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* Menu Item Image */}
            <img
              className="w-full h-40 object-cover rounded-lg mb-4"
              src={imageUrl}
              alt={item.card.info.name}
            />
            {/* Menu Item Info */}
            <div>
              <h3 className="font-bold text-lg truncate">{item.card.info.name}</h3>
              <p className="text-gray-800 text-md mt-2">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div> 
 */} -->