import Image from "next/image";
import Link from "next/link";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_1280,w_855/v1/Salama/iht5iucpauq4binptfn1",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_1280,w_855/v1/Salama/salama455_fynstm",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_1280,w_855/v1/Salama/salama2_eqqvyn",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_1280,w_855/v1/Salama/salama7_be895j",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_1280,w_855/v1/Salama/fj3o2usyohqiowhaldis",
  "https://res.cloudinary.com/dz7wroord/image/upload/c_thumb,h_1280,w_855/v1/Salama/menu-gallery-3_vefmip",
  // Add paths to your images here
];

const Gallery = () => {
  return (
    <div className="py-5 px-10 md:px-48">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
        {images.map((src, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-all ease-linear overflow-hidden w-full"
          >
            <Image
              src={src}
              alt={`Image ${index}`}
              layout="responsive"
              width={300}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
      <div className=" w-full flex justify-center items-center pt-20 ">
        <Link
          href="https://www.sevenrooms.com/explore/lessalamamarrakech/reservations/create/search/"
          className="rounded-full bg-secondary text-primary text-3xl font-normal px-3 py-1 w-48 text-center hover:bg-primary hover:text-secondary transition-all ease-in-out"
        >
          RESERVER
        </Link>
      </div>
      <div className="w-full flex justify-center items-center py-20 ">
        <div className="w-full lg:w-[50%] h-fit px-10 py-8 text-center bg-[#212326] text-primary text-xl rounded-lg">
          Tous les jours : de 12h00 à 02h00
        </div>
      </div>
    </div>
  );
};

export default Gallery;
