import Image from "next/image";

const Navbar = () => {
  return (
    <div className="md:flex items-center justify-between">
      <div className="">
        <Image
          src={"../../images/logo 1.svg"}
          alt={"logo"}
          width={197}
          height={83}
        />
        <Image
          src={"../../icons/LucideAlignJustify.svg"}
          alt={"hamburger menu icon"}
          width={128}
          height={128}
          className="block md:hidden"
        />
      </div>

      <div>
        <ul className="md:flex gap-10 text-black">
          <li>How to start</li>
          <li>Services</li>
          <li>Technologies</li>
          <li>Careers</li>
          <li>Bulid a team</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
