import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Image
        src={"../../images/logo 1.svg"}
        alt={"logo"}
        width={197}
        height={83}
      />
      <div>
        <ul className="flex gap-10 text-black">
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
