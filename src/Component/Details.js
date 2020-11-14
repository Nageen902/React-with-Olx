// import React from 'react';
// import car from './Image/car.jpeg';
// import sdsffedf from 'react'
// import Its from 'react'
// import Black from 'react'
// import White from 'react'






// class DetailPage extends React.Component{



//     state = {
//       products: [
//           {
//               "_id": "1",
//               "Name": "car",
//               "src": [
//                    <img src={car}></img>
//               ],
//               "Description":sdsffedf,
//               "Content": Its,
//               "Price": 200000,
//               "Colors": [Black , White],
//               "count": "1",
//           }
//       ]
//     }
//     render(){
//         const {products} = this.state;
//     return(
//     <div className ="app">
//      {
//          products.map(item => (
//                <div className="details">
//                 <div className="big-img">
//                 <img src={item.src[0]} alt="/"/>
//                 </div>
//                 <div className="box">
//                     <div className="row">
//                         <h2>{item.Name}</h2>
//                         <span>{item.Price}</span>
//                     </div>
//                     <div className="Colors">
//                     {
//                         item.Colors.map(color=>(
//                             <button style={{background:color}}></button>
//                         ))
//                     }
//                     </div>
//                 <p>{item.Description}</p>
//                 <p>{item.Content}</p>

//                 <div className="thumb">
//                     {
//                         item.src.map(img => (
//                             <img src={img} alt="/"></img>
//                         ))
//                     }
//                 </div>
//                 <button className="cart">
//                     Add To Cart
//                 </button>

//                 </div>
//                 </div>
//          ))
//     }
//     </div>
//     );
// }
// }
// export default DetailPage;