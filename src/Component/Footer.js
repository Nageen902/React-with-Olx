import React, {useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';


function FooterPage() {
   return(
       <React.Fragment>
       <div className ="footer flex">
           <div className = "block flex flex col">
               <h2 className = "title s16 fontb color ">Popular Categories</h2>
               <Link to ="/" className = "noul noulh font s14">Car</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Flat For Rent</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Jobs</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Mobile Phones</Link>
           </div>

           <div className = "block flex flex col">
               <h2 className = "title s16 fontb color ">TRENDING SEARCHES</h2>
               <Link to ="/" className = "noul noulh font s14">Bike</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Watches</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Books</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Dogs</Link><br/>
             
           </div>
           <div className = "block flex flex col">
               <h2 className = "title s16 fontb color ">ABOUT US</h2>
               <Link to ="/" className = "noul noulh font s14">About OLX Group</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Olx Blogs</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Contract us</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Olx For Businessess</Link><br/>
             
           </div>
           <div className = "block flex flex col">
               <h2 className = "title s16 fontb color ">Olx</h2>
               <Link to ="/" className = "noul noulh font s14">Help</Link><br/>
               <Link to ="/" className = "noul noulh font s14">SiteMap</Link><br/>
               <Link to ="/" className = "noul noulh font s14">Legal&PrivacyInformation</Link><br/>
           </div>
           <div className = "block flex flex col">
               <h2 className = "title s16 fontb color ">Follow us</h2><br/>
               <a href ="https://www.facebook.com/olxpakistan" className = "noul noulh font s14"><FacebookIcon/></a>
               <a href ="https://twitter.com/OLX_Pakistan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className = "noul noulh font s14"><TwitterIcon/></a>
               <a href ="https://www.youtube.com/" className = "noul noulh font s14"><YouTubeIcon/></a>
               <a href ="https://www.instagram.com/olx.pakistan/?hl=en" className = "noul noulh font s14"><InstagramIcon/></a>
               <Link to="/" className = "">
               <a href = "https://www.apple.com/app-store/" className="N"><img src ="  https://statics.olx.com.pk/external/base/img/appstore_2x.webp"/></a>
       <a href = "https://play.google.com/store/apps/details?id=com.olx.pk&hl=en" className="N"><img src ="  https://statics.olx.com.pk/external/base/img/playstore_2x.webp"/></a>
               </Link>
           </div>
       
           </div>
           <div className="footerb flex">
               <h2 className="font s14">Other Countries India - South Africa - Indonesia</h2>
               <h2 className=" next font s14">Free Classifieds in Pakistan. © 2006-2020 OLX</h2>
           </div>


       



       </React.Fragment>





   )

}

export default FooterPage; 