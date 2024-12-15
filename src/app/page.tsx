import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import About from "../../components/home/About";
import CleaningService from "../../components/home/CleaningService";
import FeauturedService from "../../components/home/FeauturedService";
import HomeBanner from "../../components/home/HomeBanner";
import Services from "../../components/home/Services";
import WhyChoose from "../../components/home/WhyChoose";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeBanner
        image={""}
        title={"Cleaning Service"}
        paragraph={
          " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilimpedit quo minus id quod maxime placeat facere, viva la vida penci."
        }
      />
      <p>test hello</p>
      <Services />
      <About />
      <CleaningService image={""} />
      <FeauturedService image={""} />
      <WhyChoose image={""} />
      <Footer image={""} />
    </div>
  );
}
