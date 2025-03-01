import { PiHouseLine, PiTent } from "react-icons/pi";
import {
  MdOutlineApartment,
  MdOutlineCabin,
  MdOutlineCastle,
} from "react-icons/md";
import { TbSailboat2, TbCamper } from "react-icons/tb";
import {
  GiMountainCave,
  GiLightningDome,
  GiControlTower,
  GiTreehouse,
} from "react-icons/gi";
import { GoContainer } from "react-icons/go";
import { RiEarthquakeLine } from "react-icons/ri";
import { LiaHotelSolid } from "react-icons/lia";
import StructureCard from "../../components/listingHouse/StructureCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewHouse } from "../../redux/actions/houseActions";

const ListHouseStepOneStructure = () => {
  const [storedCardData, setStoredCardData] = useState("");
  const dispatch = useDispatch();
  const svgSize = window.innerWidth < 768 ? 28 : 40;

  const handleStoreCardData = (name) => {
    setStoredCardData(name);
    dispatch(createNewHouse(name));
  };

  return (
    <div className=" flex flex-col gap-10 max-w-screen-md mx-auto my-6">
      <h1 className=" text-[#222222] text-xl sm:text-2xl md:text-[32px] font-medium">
        Which of these best describes <br /> your place?
      </h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 mx-auto md:mx-0">
        <StructureCard
          style={structureCardStyle}
          Img={PiHouseLine}
          name={"Deluxe room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={MdOutlineApartment}
          name={"Single room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={GiTreehouse}
          name={"Standard room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={TbSailboat2}
          name={"Double room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={MdOutlineCabin}
          name={"Presidential Suite"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={TbCamper}
          name={"Triple room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={MdOutlineCastle}
          name={"Twin room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={GiMountainCave}
          name={"Executive suite"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={GoContainer}
          name={"Quadruple room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={GiLightningDome}
          name={"Hollywood Twin room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={RiEarthquakeLine}
          name={"Queen room"}
          onClick={handleStoreCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={PiTent}
          name={"King room"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={GiControlTower}
          name={"Honeymoon Suite"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
        <StructureCard
          style={structureCardStyle}
          Img={LiaHotelSolid}
          name={"Duplex"}
          onClick={handleStoreCardData}
          storedCardData={storedCardData}
          svgSize={svgSize}
          ptagStyle={structurePtagClass}
        />
      </div>
    </div>
  );
};

// styles for STructuredCard component
const structureCardStyle =
  "flex flex-col gap-1 px-6 rounded-xl transition duration-300 h-[120px] w-[150px] sm:w-[220px] cursor-pointer justify-center";
const structurePtagClass = "text-[#222222] text-base md:text-lg font-medium";

export default ListHouseStepOneStructure;
