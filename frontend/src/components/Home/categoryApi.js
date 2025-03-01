import {
    PiHouseLine, PiTent, PiCampfireLight,
} from "react-icons/pi";
import {
    MdOutlineApartment, MdOutlineCabin, MdOutlineCastle,
} from "react-icons/md";
import { TbSailboat2, TbCamper } from "react-icons/tb";
import {
    GiMountainCave, GiLightningDome, GiControlTower, GiTreehouse,
} from "react-icons/gi";
import { GoContainer } from "react-icons/go";
import { RiEarthquakeLine } from "react-icons/ri";
import { LiaHotelSolid } from "react-icons/lia";

export const categoryApi = [
    { id: 1, name: "Deluxe room", svg: MdOutlineApartment }, // Luxury apartment representation
    { id: 2, name: "Single room", svg: PiHouseLine }, // Simple house-like icon for individual room
    { id: 3, name: "Standard room", svg: MdOutlineCastle }, // Classic and spacious representation
    { id: 4, name: "Double room", svg: TbSailboat2 }, // Representing space for two with a sailboat
    { id: 5, name: "Presidential Suite", svg: GiControlTower }, // High-end, luxury representation
    { id: 6, name: "Triple room", svg: TbCamper }, // Cozy, comfortable for three
    { id: 7, name: "Twin room", svg: GiTreehouse }, // Unique and nature-inspired
    { id: 8, name: "Executive suite", svg: RiEarthquakeLine }, // Elegant and professional
    { id: 9, name: "Quadruple room", svg: GoContainer }, // Spacious enough for four people
    { id: 10, name: "Hollywood Twin room", svg: GiLightningDome }, // Glamorous, large room
    { id: 11, name: "Queen room", svg: GiMountainCave }, // Expansive and grand feel
    { id: 12, name: "King room", svg: PiTent }, // Simple, but regal for royalty
    { id: 13, name: "Honeymoon Suite", svg: PiCampfireLight }, // Romantic, cozy vibe
    { id: 14, name: "Duplex", svg: LiaHotelSolid }, // Upscale and sophisticated hotel-like icon
];
