import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsPinterest } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#1f1f1f]  flex flex-col justify-center items-center py-2  px-3 lg:px-10 lg:py-16  xl:px-40">
      <div>
        <Link href="/">
          <Image
            src="/assets/images/logo-salama-sah.png"
            alt="Logo"
            width={240}
            height={240}
            className="mr-2 pb-6"
          />
        </Link>
      </div>
      <div className="w-full flex flex-col gap-5 lg:flex-row justify-between items-center  text-primary text-lg">
        <div className="w-full flex flex-col justify-center items-center">
          <span>+212 675-480018</span>
          <span>reservations@lesalamamarrakech.com</span>
        </div>
        <div className="w-full flex  justify-center items-center">
          <span className="text-center">
            40 Rue des Banques, Marrakech 40000, Maroc
          </span>
        </div>
        <div className="w-full flex gap-5 justify-center items-center">
          <Link
            href="https://www.instagram.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsInstagram size={22} />
          </Link>
          <Link
            href="https://www.facebook.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsFacebook size={22} />
          </Link>
          <Link
            href="https://www.pinterest.com/lesalamamarrakech/"
            target="_blank"
          >
            <BsPinterest size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
