import Image from "next/image";
import { CarouselComponent } from "./components/Cards/CarouselComponent";
import { Cards } from "./components/Cards/Cards";
// import { CardProduct } from "./components/Cards/CardProduct";
import CardDesign from "./components/CardDesign";
import { FormComponent } from "./components/Cards/Form";
import { listType } from "./lib/blog/listing";

export default function Home() {
      const blog:listType[] = [
      {
          image : 'https://i.pinimg.com/736x/c3/03/b0/c303b01a271420898f7ca8e35a1b5db7.jpg',
          price: 200, 
          description : "A futuristic city glows beneath a violet sunset, where towering glass skyscrapers reflect streams of neon light across rain-soaked streets."
      } ,
      {
          image : 'https://i.pinimg.com/1200x/54/a3/cd/54a3cd2142bcb26c04dfef57436cee1d.jpg',
          price: 300, 
          description : "Deep within an enchanted forest, giant trees twist toward the sky while glowing lanterns hang naturally from their branches like stars."
      } ,
      {
          image : 'https://i.pinimg.com/736x/fd/75/6c/fd756c42b9c66506db55024cfbcfc491.jpg',
          price: 700, 
          description : "An ancient desert temple rises from endless golden dunes beneath a blazing orange sky. Massive stone pillars carved with forgotten the air"
      } ,
      {
          image : 'https://i.pinimg.com/736x/11/52/e8/1152e882889c2c77202529386c2aae05.jpg',
          price: 800, 
          description : "A peaceful mountain village sits high above the clouds, surrounded by snow-covered peaks and endless pine forests."
      } 
       ,
      {
          image : 'https://i.pinimg.com/736x/72/51/30/72513013f447812e56f73ee5bf45f2e5.jpg',
          price: 400, 
          description : "Beneath the ocean surface lies a hidden underwater kingdom built entirely from coral, glass, and glowing crystals."
      } 
      ,
      {
          image : 'https://i.pinimg.com/736x/b1/75/2f/b1752f9a57f686b266590d9d0e87ed93.jpg',
          price: 700, 
          description : "A massive library floats in space among swirling galaxies and distant stars. Endless shelves filled with glowing books curve around"
      } ,
      {
          image : 'https://i.pinimg.com/736x/57/99/f4/5799f4323755b94356afd068791a8948.jpg',
          price: 300, 
          description : "An abandoned amusement park slowly comes back to life beneath a stormy evening sky. Rusted roller coasters glow faintly with electric "
      } ,
      {
          image : 'https://i.pinimg.com/736x/8c/68/e3/8c68e3352dbb43ab0e8d30346f1fb29e.jpg',
          price: 200, 
          description : "A peaceful futuristic greenhouse stretches endlessly beneath a transparent dome on Mars. Exotic plants with glowing in carefully."
      } 
  
      ]
  return (
    <div className="container mx-auto">
            <section>
        <h2 className="text-4xl p-8">Premium Designed </h2>
        <div className="grid grid-cols-4 p-6 gap-4 justify-between">
          {
          blog?.map(({image, price, description}, _) => (
                          <CardDesign 
                          key={_}
                          image={image}
                          price={price}
                          description={description}/>
                      ))
                  }
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
        <h2 className="text-4xl p-8">Listing Cards</h2>

        <div className="grid grid-cols-4 p-6 gap-4">

          {[...Array(8)].map((_, index) => (
            <CarouselComponent key={index} />

          ))}

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
