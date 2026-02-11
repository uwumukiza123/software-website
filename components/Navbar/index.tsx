import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <Image
        src={"../../images/logo 1.svg"}
        alt={"logo"}
        width={1000}
        height={1000}
      />
      <ul className="flex">
        <li>How to start</li>
        <li>Services</li>
        <li>Technologies</li>
        <li>Careers</li>
        <li>Bulid a team</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
