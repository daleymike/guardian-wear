import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Dashboard = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex,e) => {
        setIndex(selectedIndex)
    }
    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>

                
            </Carousel.Item>


        </Carousel>
    )
}
export default Dashboard