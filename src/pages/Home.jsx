import HeroImage from "../components/HeroImage";
import Zigzag from "../components/Zigzag";
import zigzag1 from "../assets/hero/zigzag/zigzag1.png";
import zigzag2 from "../assets/hero/zigzag/zigzag2.png";
import zigzag3 from "../assets/hero/zigzag/zigzag3.png";

function Home() {
  return (
    <div className="page">
      <HeroImage />

      <Zigzag
        image={zigzag1}
        title="What We Do"
        text="A short description of your first service or value proposition goes here."
        reverse={false}
      />

      <Zigzag
        image={zigzag2}
        title="Why Choose Us"
        text="A short description of your second point goes here."
        reverse={true}
      />

      <Zigzag
        image={zigzag3}
        title="Our Approach"
        text="A short description of your third point goes here."
        reverse={false}
      />
    </div>
  );
}

export default Home;