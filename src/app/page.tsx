import Image from "next/image";
import { CarouselComponent } from "./components/Cards/Card";
import { Cards } from "./components/Cards/CardMobile";
import { CardProduct } from "./components/Cards/CardProduct";
import { FormComponent } from "./components/Cards/Form";

export default function Home() {
  return (
    <div className="">
    <div className="grid grid-cols-4 p-6 gap-4">
      {/* Repeats the CarouselComponent 5 times */}
      {[...Array(8)].map((_, index) => (
        <CarouselComponent key={index} />

      ))}
      

    </div>
    <div className="">
      <div className="p-6">      <Cards /></div>
      <div className="p-6">      <CardProduct /></div>
      <div className="p-6">      <FormComponent /></div>



    </div>

    </div>


  );
}
