import technologyBanner from "../../assets/Image/Rectangle 27-2.png";
import doctorMeetBanner from "../../assets/Image/Rectangle 27-1.png";
import healthBanner from "../../assets/Image/Rectangle 27.png";
import { GoArrowUpRight } from "react-icons/go";
const Service = () => {
  return (
    <div className="mt-40">
      <div className="flex justify-between  mt-40">
        <div className="w-2/5 text-left">
          <span className="text-[16px] border px-4 py-2 rounded-3xl">
            Service
          </span>
          <h2 className="text-4xl my-4  leading-[54px] font-semibold">
            Empowering Health, Enriching Lives
          </h2>
          <p className="font-normal text-[16px]">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <button className="mt-12 flex gap-1 font-[16px]  bg-[#FFC637] py-3 px-4 rounded-xl">
            Appointment
            <GoArrowUpRight className="text-xl mt-1" />
          </button>
        </div>
        <div className="w-1/2 relative">
          <img className="rounded-[30px]" src={technologyBanner} alt="" />
          <div className=" absolute bottom-5 left-5   text-left  w-1/2">
            <div className="bg-[#343268] text-white opacity-60 py-8 pl-7 pr-4 space-y-5 rounded-[32px]">
              <h4 className="text-xl font-medium">Advanced Technology</h4>
              <p className="text-[12px] w-4/5 font-light">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>

            <GoArrowUpRight className="text-3xl text-white absolute right-4 bottom-7 rounded-full p-1 mt-1 bg-[#FFC637]" />
          </div>
        </div>
      </div>
      <div className="flex mt-16 justify-between">
        <div className="w-1/2 relative">
          <img className="rounded-[30px]" src={doctorMeetBanner} alt="" />
          <div className=" absolute bottom-5 left-5   text-left  w-1/2">
            <div className="bg-[#343268] text-white opacity-60 py-8 pl-7 pr-4 space-y-5 rounded-[32px]">
              <h4 className="text-xl font-medium">Online Doctor Meet</h4>
              <p className="text-[12px] w-4/5 font-light">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>

            <GoArrowUpRight className="text-3xl text-white absolute right-4 bottom-7 rounded-full p-1 mt-1 bg-[#FFC637]" />
          </div>
        </div>
        <div className="w-1/2 relative">
          <img className="rounded-[30px]" src={healthBanner} alt="" />
          <div className=" absolute bottom-5 left-5   text-left  w-1/2">
            <div className="bg-[#343268] text-white opacity-60 py-8 pl-7 pr-4 space-y-5 rounded-[32px]">
              <h4 className="text-xl font-medium">Consultancy your health</h4>
              <p className="text-[12px] w-4/5 font-light">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
            </div>

            <GoArrowUpRight className="text-3xl text-white absolute right-4 bottom-7 rounded-full p-1 mt-1 bg-[#FFC637]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
