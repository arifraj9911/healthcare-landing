import { FaStar } from "react-icons/fa";
import circle from "../../assets/Image/Group 12.png";
import icon from "../../assets/Image/Icons.png";
import one from "../../assets/Image/one.png";
import two from "../../assets/Image/two.png";
import three from "../../assets/Image/three.png";
import four from "../../assets/Image/four.png";
import cap from "../../assets/Image/cap.png";
import youtube from "../../assets/Image/youtube_pro.png";

const ComprehensiveCare = () => {
  return (
    <div className="mt-10">
      <h2 className="text-4xl text-center w-1/3 mx-auto font-semibold">
        Comprehensive Care for Every Patient
      </h2>
      <div className="grid grid-cols-5 items-end gap-10 -mt-20">
        <div className="shadow p-5 rounded-3xl bg-white">
          <h4 className="text-4xl font-semibold mb-2">90%</h4>
          <p className="w-4/5 text-sm">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <div className="flex justify-center ">
            <img className="mt-7 " src={circle} alt="" />
          </div>
        </div>
        <div className="shadow p-5 rounded-3xl bg-white">
          <h4 className="text-4xl font-semibold mb-2">500+</h4>
          <p className="w-3/4 text-sm">Board-certified doctors</p>
          <div className="flex justify-end mt-[-40px]">
            <img className="mt-7 " src={icon} alt="" />
          </div>
        </div>
        <div className="shadow p-5  rounded-3xl bg-white">
          <h4 className="text-4xl font-semibold mb-2 flex gap-2">
            4.8 <FaStar className="text-[#FFE03D]" />
          </h4>
          <p className="w-full text-sm">Over 20,000 Patient</p>
          <div className="flex -space-x-4 mt-4">
            <img src={one} alt="" />
            <img src={two} alt="" />
            <img src={three} alt="" />
            <img src={four} alt="" />
          </div>
        </div>
        <div className="shadow p-5 rounded-3xl bg-white">
          <h4 className="text-4xl font-semibold mb-2">$5000</h4>
          <p className="w-3/4 text-sm">Money spend for poor patient</p>
          <div className="flex justify-end mt-[-40px]">
            <img className="mt-7 " src={cap} alt="" />
          </div>
        </div>
        <div className="shadow p-5 rounded-3xl bg-white">
          <h4 className="text-4xl font-semibold mb-2">50+</h4>
          <p className="w-4/5 text-sm">Free lession video for patient</p>
          <div className="flex justify-center">
            <img className="mt-7 " src={youtube} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveCare;
