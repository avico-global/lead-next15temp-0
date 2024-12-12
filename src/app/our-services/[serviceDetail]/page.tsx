import Footer from "../../../../components/common/Footer";
import Navbar from "../../../../components/common/Navbar";
import About from "../../../../components/home/About";
import CleaningService from "../../../../components/home/CleaningService";
import FeauturedService from "../../../../components/home/FeauturedService";
import HomeBanner from "../../../../components/home/HomeBanner";
import Services from "../../../../components/home/Services";
import WhyChoose from "../../../../components/home/WhyChoose";



export default function Home() {
  return (
    <>
      <Navbar/>
      <HomeBanner
        image={""}
        title={"Cleaning Service"}
        paragraph={
          " Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihilimpedit quo minus id quod maxime placeat facere, viva la vida penci."
        }
      />
      <Services />
      <About />
      <CleaningService image={""} />
      <FeauturedService image={""} />
      <WhyChoose image={""} />
      <Footer image={""} />
    </>
  );
}



// import { useRouter } from "next/router";
// import Footer from "../../../../components/common/Footer";
// import Navbar from "../../../../components/common/Navbar";
// import HomeBanner from "../../../../components/home/HomeBanner";
// import FullContainer from "../../../../components/common/FullContainer";
// import Container from "../../../../components/common/Container";
// import { services }from "../../../../components/home/FeauturedService";






// export default function ServiceDetail() {
//   const router = useRouter();
//   const { serviceDetail } = router.query;

//   // Find the service based on serviceId
//   const service = services.find((item: { title: string; }) => item.title.toLowerCase().replace(/\s+/g, "-") === serviceDetail);

//   if (!service) {
//     return (
//       <>
//         <Navbar />
//         <FullContainer>
//           <Container>
//             <div className="text-center py-20">
//               <h1 className="text-4xl font-bold text-red-500">Service Not Found</h1>
//               <p className="text-gray-500 mt-4">The service you are looking for doesn't exist.</p>
//             </div>
//           </Container>
//         </FullContainer>
//         <Footer image={""} />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       {/* Dynamic banner */}
//       <HomeBanner title={service.title} image={service.image} paragraph={""} />
//       <FullContainer>
//         <Container>
//           <div className="py-12">
//             <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
//             <p className="text-gray-700 mb-6">{service.description}</p>
//             <div className="px-4 py-2 bg-primary text-white font-medium rounded-md w-32 text-center">
//               <a href="/contact">Get A Quote</a>
//             </div>
//           </div>
//         </Container>
//       </FullContainer>
//       <Footer image={""} />
//     </>
//   );
// }
