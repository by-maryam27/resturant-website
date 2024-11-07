import Events from "./(routes)/events/page";
import Menu from "./(routes)/menu/page";
import Team from "./(routes)/team/page";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function Main(){
    return(
        <div className="absolute top-0 w-full z-10">
            <Hero/>
           <Menu/>
            <Team/>
            <Events/>
            <Footer/>
        </div>
    )
}