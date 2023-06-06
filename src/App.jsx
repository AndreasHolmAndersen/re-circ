import CarouselComponent from "./components/CarouselComponent";
import SellingPointComponent from "./components/SellingPointComponent";

function App() {
  return (
    <div className="bg-gradient-to-br from-brown-700 via-brown-500 to-brown-300 min-h-screen p-8 items-center justify-center flex w-full h-full">
      <div className="max-w-screen-xl mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <SellingPointComponent />
        </div>
        <div className="w-full lg:w-1/2">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
