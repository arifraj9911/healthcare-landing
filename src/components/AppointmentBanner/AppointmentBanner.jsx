import { GoArrowUpRight } from "react-icons/go";
import appointmentBanner from "../../assets/Image/Rectangle 32.png";
import logoLight from "../../assets/Image/logo light.png";

const AppointmentBanner = () => {
  return (
    <div
      className="mt-40 py-24 relative px-10 rounded-[32px]"
      style={{
        backgroundImage: `radial-gradient(647.71% 142.52% at 98% 78%,rgb(2, 0, 67),rgba(2, 0, 67, 0.3) 100%),url('${appointmentBanner}')`,
        height: "450px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-1/3">
        <h2 className="text-[40px] text-left text-white font-semibold">
          Get Your <br /> First Appointment <br /> at 50% Off!
        </h2>
        <div className="flex gap-5 mt-6">
          <button className=" flex gap-1 font-[16px]  bg-[#FFC637] py-3 px-4 rounded-xl">
            Appointment
            <GoArrowUpRight className="text-xl mt-1" />
          </button>
          <button className=" flex gap-1 font-[16px] text-white  border py-3 px-4 rounded-xl">
            Learn More
            <GoArrowUpRight className="text-xl mt-1" />
          </button>
        </div>
      </div>
      <img className="absolute top-16 right-16" src={logoLight} alt="" />
    </div>
  );
};

export default AppointmentBanner;
