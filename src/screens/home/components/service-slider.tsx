import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export const ServiceSlider = ({ ...props }) => {
  const { items = [] } = props
  const [cards, setCards] = useState([]);
  const [numberCards, setNumberCards] = useState(5);
  let settings = {
    arrows: true,
    dots: false,
    accesibility: true,
    infinite: true,
    speed: 300,
    slidesToShow: numberCards,
    slidesToScroll: 1,
    adaptiveHeight: false
  };

  const size = useWindowSize();
  useEffect(() => {
    if (size.width <= 768) {
      setNumberCards(1)
    } else if (size.width <= 900) {
      setNumberCards(3)
    } else if (size.width <= 1024) {
      setNumberCards(6)
    } else {
      setNumberCards(7)
    }
  }, [size]);

  useEffect(() => {
    let aux: any = [];

    items.forEach((element: any) => {
      console.log(element)
      aux.push(
        <div key={element.id} className="col-xs-12" style={{ padding: 10, width: 150, height: 200 }}>
          <div style={{ height: 100 }}>
            <img src={element.image} style={{ width: 150 }} alt={element.info} />
          </div>
          <div>
            {element.info}
          </div>
        </div>
      );
    });

    setCards(aux);
  }, [items]);
  return (
    < div style={{ margin: 10 }}>
      <Slider {...settings}>
        {cards}
      </Slider>
    </ div>
  );
}