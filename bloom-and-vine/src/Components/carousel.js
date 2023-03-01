import "./carousel.css"
import wedding from "../Pages/serviceImages/weddings.png"
import rentals from "../Pages/serviceImages/rentals.png"
import funerals from "../Pages/serviceImages/funerals.png"
import classes from "../Pages/serviceImages/classes.png"
import parties from "../Pages/serviceImages/parties.png"
import customOrder from "../Pages/serviceImages/customOrder.png"

const ServicesCarousel = (props) =>{

    // index goes from 0 - 5 to represent 5 images

    function previousImage() {
        let newIndex = props.index - 1;
        if (newIndex < 0) {
            newIndex = 5;
        }
        props.setIndex(newIndex);
    }
    function nextImage() {
        let newIndex = props.index + 1;
        if (newIndex > 5) {
            newIndex = 0;
        }
        props.setIndex(newIndex);
    }
    
    var images = [
        {
          service: "Wedding Services",
          src: wedding,
          description: "Need a hand on your special day? We offer a variety of wedding services ranging from making beautiful bouquets to DIYing wedding centerpieces! Our flowers are sourced from local farms and are hand chosen to cater to you and your vision. You can count on us to make your wedding unforgettable. Let’s get in touch!"
        },
        {
          service: "Rentals",
          src: rentals,
          description: "2nd img words words words words words words words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Funerals",
          src: funerals,
          description: "3rd img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Classes",
          src: classes,
          description: "4th img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Parties",
          src: parties,
          description: "5th img words words words words words words words words words words words words words words words words words words words words words words "
        },
        {
          service: "Custom Orders",
          src: customOrder,
          description: "6th img words words words words words words words words words words words words words words words words words words words words words words "
        }
      ];

    return(
        <div>
            <div className="container">
                <div className="description">
                    <div className="arrow" onClick= {previousImage} >&lt;</div>

                    <div id ="texts">
                        <h1 id ="servTitle">{images[props.index].service}</h1>
                        <p className ="servDesc">{images[props.index].description}</p>
                        <p className ="servDesc">Recommended Vendors: Blossom Farm Vintage Rentals</p>
                        <div id = "contactButton">Contact Us</div>
                    </div>

                        <img id = "actualImg" src= {images[props.index].src} alt= {images[props.index].description} ></img>
                    <div className="arrow" onClick= {nextImage} >&gt;</div>
                </div>
                
            </div>
        </div>
        
    )
};

export default ServicesCarousel;