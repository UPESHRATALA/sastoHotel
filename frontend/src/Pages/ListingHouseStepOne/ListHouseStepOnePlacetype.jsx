import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewHouse } from "../../redux/actions/houseActions";
import PlaceTypeCard from "../../components/listingHouse/PlaceTypeCard";
import { PiHouseLine } from "react-icons/pi";
import { BsDoorOpen } from "react-icons/bs";
import { BsHouseAdd } from "react-icons/bs";

const ListHouseStepOnePlacetype = () => {
  const [storedCardData, setStoredCardData] = useState("");
  const houseData = useSelector((state) => state.house);
  const dispatch = useDispatch();

  const handleStoreCardData = (name) => {
    setStoredCardData(name);
    dispatch(createNewHouse(houseData.newHouse?.houseType, name));
  };

  return (
    <div className=" flex flex-col gap-10 max-w-screen-sm mx-auto my-6 min-h-[70dvh]">
      <h1 className=" text-[#222222] text-xl sm:text-2xl md:text-[32px] font-medium">
        What type of hotels will guests have?
      </h1>
      <div className="flex flex-col gap-5">
        <PlaceTypeCard
          head={"A resort"}
          desc={"A destination for relaxation and recreation, often featuring amenities like pools, spas, and restaurants."}
          Img={PiHouseLine}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <PlaceTypeCard
          head={"A chain hotel"}
          desc={
            "A hotel that is part of a larger brand or chain, offering consistent services and amenities across various locations."
          }
          Img={BsDoorOpen}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
        <PlaceTypeCard
          head={"A budget hotel"}
          desc={
            " affordable option offering basic accommodations with fewer amenities, ideal for travelers seeking simplicity and low-cost stays."
          }
          Img={BsHouseAdd}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
        />
      </div>
    </div>
  );
};

export default ListHouseStepOnePlacetype;
