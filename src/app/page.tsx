import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <UpcomingWebinars />
      <MusicSchoolTestimonials />
    </>
  );
}
