import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  const imageCount = 10; // Number of images
  const imageFolder = "/images/"; // Path to the image folder

  // Generate the array of image file names
  const imageFiles = Array.from(Array(imageCount), (_, i) => {
    const imageNumber = String(i + 1).padStart(4, "0"); // Pad the number with zeros
    return `${imageNumber}.jpg`; // Assuming file extension is .jpg
  });

  return (
    <div className="max-w-screen-sm mx-auto p-3 bg-brown-400 rounded-lg shadow-2xl">
      <div className="">
        <Carousel
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          swipeable={true}
          emulateTouch={true}
          className="overflow-hidden"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                className="arrow arrow-prev absolute top-1/2 transform -translate-y-1/2 left-4 z-10 bg-brown-300 rounded-full p-3 focus:outline-none transition-opacity duration-200 hover:opacity-75"
                onClick={onClickHandler}
                title={label}
              >
                &lt;
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                className="arrow arrow-next absolute top-1/2 transform -translate-y-1/2 right-4 z-10 bg-brown-300 rounded-full p-3 focus:outline-none transition-opacity duration-200 hover:opacity-75"
                onClick={onClickHandler}
                title={label}
              >
                &gt;
              </button>
            )
          }
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            if (isSelected) {
              return (
                <li
                  className="inline-block mx-1 w-3 h-3 rounded-full bg-brown-500"
                  onClick={onClickHandler}
                  key={index}
                  title={label}
                />
              );
            }
            return (
              <li
                className="inline-block mx-1 w-3 h-3 rounded-full bg-brown-300"
                onClick={onClickHandler}
                key={index}
                title={label}
              />
            );
          }}
        >
          {imageFiles.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img
                src={`${imageFolder}${image}`}
                alt={index + 1}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
