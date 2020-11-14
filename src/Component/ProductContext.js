import React,{createContext, useState} from 'react';

import car from './Image/car.jpeg'
import car1 from "./Image/car1.jpeg"
import car2 from "./Image/car2.jpeg"
import car3 from "./Image/car3.jpeg"
import car4 from "./Image/car4.jpeg"
import car5 from "./Image/car5.jpeg"
import car6 from "./Image/car6.jpeg"
import car7 from "./Image/car7.jpeg"
import Mcycle from "./Image/Mcycle.jpeg"
import Mcycle1 from "./Image/Mcycle1.jpeg"
import Mcycle2 from "./Image/Mcycle2.jpeg"
import Mcycle3 from "./Image/Mcycle3.jpeg"
import Mobile from './Image/Mobile.jpeg'
import Mobile1 from './Image/Mobile1.jpeg'
import Mobile2 from './Image/Mobile2.jpeg'
import Mobile4 from './Image/Mobile4.jpeg'
import house from './Image/house.jpeg'
import house1 from './Image/house1.jpeg'
import house2 from './Image/house2.jpeg'
import house3 from './Image/house3.jpeg'
import tv from './Image/tv.jpeg'
import tv2 from './Image/tv2.jpeg'
import Dvd from './Image/Dvd.jpeg'
import keynwood from './Image/keynwood.jpeg'




export const ProductContext =createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState ([
        {id: 1, Name:'Car', Price: 200000, image: car, status: 'Karchi 10 oct'},
        {id: 2, Name:'Car', Price: 3500000, image: car1, status: 'lahore 20 sep'},
        {id: 3, Name:'Car', Price: 600000, image: car2, status: 'gulshan iqbal 12 oct'},
        {id: 4, Name:'Car', Price: 6200000, image: car3, status: 'hyderabad 8 Jan'},
        {id: 5, Name:'Car', Price: 8900000, image: car4, status: 'Islamabad 30 Feb'},
        {id: 6, Name:'Car', Price: 545000, image: car5, status: 'Peshawar 9 March'},
        {id: 7, Name:'Car', Price: 8000000, image: car6, status: 'Islamabad 30 Feb'},
        {id: 8, Name:'Car', Price: 1000000, image: car7, status: 'Islamabad 30 Feb'},
        {id: 9, Name:'Kawasaki Ninja 250', Price: 290000, image: Mcycle, status: 'Islamabad 30 Feb'},
        {id: 10, Name:'Re Bullet MotOSport', Price: 330000, image: Mcycle1, status: 'Karachi Oct 27'},
        {id: 11, Name:'Honda Bike', Price: 20000, image: Mcycle2, status: 'KASHMIR 6 Days ago'},
        {id: 12, Name:'Suzuki GS150 ', Price: 207000, image: Mcycle3, status: 'Faisal Town Lahore Oct 17'},
        {id: 13, Name:'iphone 11', Price: 150000, image: Mobile, status: 'Faisal Town Lahore Oct 17'},
        {id: 14, Name:'Huawia y 7', Price: 9900, image: Mobile1, status: 'Faisal Town Lahore Oct 17'},
        {id: 15, Name:'iphone 6s', Price: 20500, image: Mobile2, status: 'Faisal Town Lahore Oct 17'},
        {id: 16, Name:'iphone 6 plus', Price: 30000, image: Mobile4, status: 'Faisal Town Lahore Oct 17'},
        {id: 17, Name:'120 sq yd House', Price: 15500000, image: house, status: 'Faisal Town Lahore Oct 17'},
        {id: 18, Name:'5.5 Marla Corner', Price: 7500000, image: house1, status: 'Rawalpandi Oct 17'},
        {id: 19, Name:'4 Marla Corner double store', Price: 5500000, image: house2, status: 'Hamza Town Lahore Oct 17'},
        {id: 20, Name:'120 sq yd House', Price: 74000000, image: house3, status: 'Faisal Town Lahore Oct 17'},
        {id: 21, Name:'Sumsung', Price:36000, image: tv, status: 'Faisal Town Lahore Oct 17'},
        {id: 22, Name:'Sumsung', Price: 75000, image: tv2, status: 'Faisal Town Lahore Oct 17'},
        {id: 23, Name:'DVD Player Clarion', Price:3900, image: Dvd, status: 'Faisal Town Lahore Oct 17'},
        {id: 24, Name:'Kenwood 110W Home System', Price: 5000, image: keynwood, status: 'Nazimabad Karachi Oct 17'},


    ])
    return(
        < ProductContext.Provider value={{products:[...products]}}>
        { props.children}
        </ProductContext.Provider>
    );
}

export default ProductsContextProvider;