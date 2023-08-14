
import Carousel from 'react-bootstrap/Carousel'
import Image from "next/image"

export const Slider = () => {
  return (
    <>
        <Carousel controls={false} indicators={false} fade={true} interval={4000}>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3 " src="/image/food/burger.jpg" alt="burger" width={3000} height={500}/> 
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src="/image/food/burrito.jpg" alt="buritto" width={3000} height={500}/> 
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rounded-3" src="/image/food/pizza.jpg" alt="pizza" width={3000} height={500}/> 
            </Carousel.Item>
        </Carousel>
    </>
  )
}
