import AboutSec from "../../Components/AboutSec";
import Choose from "../../Components/Choose";
import ContactSec from "../../Components/ContactSec";
import Products from "../../Components/Products";
import Quote from "../../Components/Quote";
import ServiceSec from "../../Components/ServiceSec";
import Slider from "../../Components/Slider";
import Team from "../../Components/Team";

const Home = () => {
    return (
        <div>
            
            <div>
            <Slider> </Slider>
            <AboutSec> </AboutSec>
            <ServiceSec> </ServiceSec>
            <ContactSec> </ContactSec>
            <Products> </Products>
            <Team> </Team>
            <Choose> </Choose>
            <Quote> </Quote>
            </div>
        </div>
    );
};

export default Home;