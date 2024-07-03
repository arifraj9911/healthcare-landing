import { GoArrowUpRight } from "react-icons/go";
import solutionBanner from "../../assets/Image/Rectangle 24.png";

const GetSolutions = () => {
  return (
    <div className="flex justify-between  mt-40">
      <div className="w-2/5 text-left">
        <span className="text-[16px] border px-4 py-2 rounded-3xl">
          Who we are
        </span>
        <h2 className="text-4xl my-4 w-3/5 leading-[54px] font-semibold">
          We Help To Get Solutions
        </h2>
        <p className="font-normal text-[16px]">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="mt-12 flex gap-1 font-[16px]  bg-[#FFC637] py-3 px-4 rounded-xl">
          Learn more
          <GoArrowUpRight className="text-xl mt-1" />
        </button>
      </div>
      <div className="w-1/2 relative">
        <img src={solutionBanner} alt="" />
        <div className="bg-[#343268] absolute top-[264px] left-[-96px] text-white py-8 pl-7 pr-4 text-left space-y-5 rounded-[32px] w-3/5">
          <h4 className="text-2xl font-medium">Our mission is simple</h4>
          <p className="text-[16px] font-light">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetSolutions;
