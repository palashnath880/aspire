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
      <section className="bg-[#0A85EA]">
        <div className="container mx-auto px-5 py-20">
          <div className="flex flex-col items-center gap-5 md:w-[700px] mx-auto">
            <h1 className="text-5xl text-center font-bold text-[#f2f2f2]">
              Get started with Aspire today
            </h1>
            <p className="text-center text-white text-opacity-80 md:px-20">
              We are self-service data analytics software that lets you create
              visually appealing data visualisations and insightful dashboards
              in minutes.
            </p>
            <form className="mt-6 w-[400px] max-w-[100%]">
              <div className="flex items-center py-3 shadow-lg w-full px-3 rounded-full border border-opacity-15 bg-white">
                <input
                  placeholder="Enter your work mail here"
                  type="email"
                  className="px-5 flex-1 !outline-none border-none max-sm:text-sm"
                />
                <button className="px-5 py-2 bg-[#F63A61] text-white font-semibold max-sm:text-sm rounded-full">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <TeamArea />
      <FAQArea />
    </>
  );
}
