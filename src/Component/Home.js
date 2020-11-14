import React, {useEffect,useState} from 'react';
import ProductsContextProvider from './ProductContext';
import {Button} from 'react-bootstrap';
import phone from './Image/phone.jpeg';








function HomePage() {

const [list, setList] = useState([]);
const [loading] = useState(true);

useEffect(()=>{
  if(loading){
    let _list = [];
    for(let i = 0; i < 12; i++){
           _list.push(<ProductsContextProvider placeholder={true}/>);
    }  
    setList(_list);
  }
},list);



  return(
    <React.Fragment>
     <div className = "home-page">
       <div className="ad-list flex">
        {list}
        </div>
        <Button className="load-more">
          load more
        </Button>
    
     <div className= "app-ribbion flex aic">
       <div className = "img">
         <img src = {phone}/>
       </div>
       <div className="meta">
        <h2 className="title fntb s30">Try the olx App</h2>

        <h2 className="slogan font s18">Buy Sell and Find just about 
                                        anythng using the app on yur mobile</h2>
     
     </div>
     <div className ="links">
       <h6 className="title font s30">Get your App Today</h6>
       <div className ="flex as">
       <a href = "https://www.apple.com/app-store/" className="noul bl"><img src ="  https://statics.olx.com.pk/external/base/img/appstore_2x.webp"/></a>
       <a href = "https://play.google.com/store/apps/details?id=com.olx.pk&hl=en"><img src ="  https://statics.olx.com.pk/external/base/img/playstore_2x.webp"/></a>
     </div>
     </div>
     </div>
     </div>
    
     </React.Fragment>
  );
}

export default HomePage;