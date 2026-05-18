import Image from "next/image";
import { CarouselComponent } from "./components/Cards/CarouselComponent";
import { Cards } from "./components/Cards/Cards";
import { CardProduct } from "./components/Cards/CardProduct";
import { FormComponent } from "./components/Cards/Form";

export default function Home() {
  return (
    <div className="container mx-auto">
      <section>
        <h2 className="text-4xl p-8">Listing Cards</h2>

        <div className="grid grid-cols-4 p-6 gap-4">

          {[...Array(8)].map((_, index) => (
            <CarouselComponent key={index} />

          ))}

        </div>
      </section>


      <section className="flex flex-col items-center">
        <h2 className="text-4xl p-8">Designers </h2>
        <div className="grid grid-cols-4 p-6 gap-4">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>

      </section>

      <section>
        <h2 className="text-4xl p-8">Premium Designed </h2>
        <div className="grid grid-cols-3 p-6 justify-between">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </section>



      <hr className="text-gray-700 pt-8" />


      <section className="grid grid-cols-1  pb-8">
        <h2 className="text-4xl p-8">Contact us</h2>
        <div className="p-6">
          <FormComponent />
        </div>
      </section>

    </div>




  );
}
