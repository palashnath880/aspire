import AboutArea from "@/components/Home/AboutArea";
import FAQArea from "@/components/Home/FAQArea";
import HeroArea from "@/components/Home/HeroArea";
import TeamArea from "@/components/Home/TeamArea";
import TrustedArea from "@/components/Home/TrustedArea";

export default function Home() {
  return (
    <>
      <HeroArea />
      <TrustedArea />
      <AboutArea />
      <TeamArea />
      <FAQArea />
    </>
  );
}
