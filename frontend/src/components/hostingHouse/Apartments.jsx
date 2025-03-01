import SetupCard from "./SetupCard";

import apartment1 from "../../assets/hotel1.jpg";
import apartment2 from "../../assets/hotel2.jpg";
import apartment3 from "../../assets/hotel3.jpg";

const Apartments = () => {
  return (
    <section className="my-12 sm:my-16 md:my-24">
      <h1 className=" text-2xl md:text-4xl text-[#222222] font-medium text-center">
        Introducing SastoHotel-friendly rooms
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        <SetupCard
          img={apartment1}
          heading={"Deluxe Rooms"}
          subHeading={"Naxal, Kathmandu"}
        />
        <SetupCard
          img={apartment2}
          heading={"SIngle Rooms"}
          subHeading={"Tahachal Marg, Kathmandu"}
        />
        <SetupCard
          img={apartment3}
          heading={"Standard Rooms"}
          subHeading={"Boudha, Kathmandu"}
        />
      </div>
      <h6 className="text-base sm:text-lg md:text-xl text-center text-[#222222] sm:w-[80%] mx-auto">
        We’ve partnered with room buildings across the world that let you book
        a room to live and SastoHotel. Explore available rooms and
        find out what you can earn.
      </h6>
    </section>
  );
};

export default Apartments;
