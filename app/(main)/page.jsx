import About from "./About";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Programs from "./Programs";
import Testimonial from "./Testimonial";
import Trainer from "./Trainer";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Programs/>
      <Trainer/>
      <Testimonial/>
      <Pricing/>
    </div>
  );
}
