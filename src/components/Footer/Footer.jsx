import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoLight from "../../assets/Image/logo light.png";

const Footer = () => {
  return (
    <div className="mt-40 bg-[#020043] p-24">
      <img className="mb-8" src={logoLight} alt="" />
      <div className="  flex text-[#c7c7c7] gap-10">
        <div className="w-full">
          <div className="space-y-8">
            <p>
              123 Main Street Anytown, USA <br /> Postal Code: 12345
            </p>
            <p>
              Support: support@oyollo.com <br /> (Available: 10:00am to 07:00pm)
            </p>
          </div>
        </div>
        <ul className="w-3/5 space-y-3 mr-12">
          <li>Home</li>
          <li>About Us</li>
          <li>Success Page</li>
          <li>Terms And Conditions</li>
        </ul>
        <ul className="w-1/2 space-y-3 ">
          <li>Services</li>
          <li>Scheduling</li>
          <li>Contact Us</li>
          <li>Patient Portal</li>
        </ul>
        <div className="w-2/5">
          <p>Follow Us</p>
          <div className="flex gap-4 mt-4 mb-8">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaYoutube />
          </div>
          <p>@Docplus 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
