import sarahPhoto from "../../assets/Image/Ellipse 10 (1).png";
import michalePhoto from "../../assets/Image/Ellipse 10.png";
import davidPhoto from "../../assets/Image/Ellipse 10 (2).png";
import { FaCircle, FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="mt-40">
      <div className="text-left">
        <span className="text-[16px] border px-4 py-2 rounded-3xl">
          Testimonial
        </span>
        <h2 className="text-4xl my-4 w-3/5 leading-[54px] font-semibold">
          What they say about us
        </h2>
        <div className="grid grid-cols-3 gap-12 mt-14">
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">
              Expertise and Compassion Combined
            </h4>
            <p className="font-normal text-[#4D4C7B]">
              I can not thank enough for their exceptional care. The doctors and
              staff showed incredible expertise and compassion throughout my
              treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex gap-3">
              <img src={sarahPhoto} alt="" />
              <div className="flex flex-col gap-1">
                <p className=" font-medium">
                  Sarah D,{" "}
                  <span className="text-[#4D4C7B]">IT Professional</span>{" "}
                </p>
                <span className="flex">
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">
              Life-Saving Care, Life-Changing Experience
            </h4>
            <p className="font-normal text-[#4D4C7B]">
              My experience at [Healthcare Provider Name] was life-changing. The
              prompt and accurate diagnosis, coupled with the advanced
              treatments they provided, saved my life.Health is wealth
            </p>
            <div className="flex gap-3">
              <img src={michalePhoto} alt="" />
              <div className="flex flex-col gap-1">
                <p className=" font-medium">
                  Michael R,{" "}
                  <span className="text-[#4D4C7B]">Business Executive</span>{" "}
                </p>
                <span className="flex">
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold">
              A Partner in Health and Wellness
            </h4>
            <p className="font-normal text-[#4D4C7B]">
              As a busy professional, I appreciate the convenience and quality
              of care I receive at [Healthcare Provider Name]. From telemedicine
              consultations to routine check-ups,.
            </p>
            <div className="flex gap-3">
              <img src={davidPhoto} alt="" />
              <div className="flex flex-col gap-1">
                <p className=" font-medium">
                  David S, <span className="text-[#4D4C7B]">Lawyer</span>{" "}
                </p>
                <span className="flex">
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                  <FaStar className="text-[#FFE03D]" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-10 justify-center gap-3">
          <FaCircle className="text-[#c9c9c9]" />
          <FaCircle className="text-[#FFC637]" />
          <FaCircle className="text-[#c9c9c9]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
