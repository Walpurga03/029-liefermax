import { Carousel } from "react-bootstrap"
import Image from "next/image"

export const Slider = () => {
  return (
    <>
        <Carousel>
            <Carousel.Item>
                <Image className="d-block w-100 rouneded-3" src="/image/food/burger.jpg" alt="burger" width={3000} height={600}/> 
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rouneded-3" src="/image/food/burrito.jpg" alt="buritto" width={3000} height={600}/> 
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100 rouneded-3" src="/image/food/pizza.jpg" alt="pizza" width={3000} height={600}/> 
            </Carousel.Item>
        </Carousel>
    </>
  )
}
