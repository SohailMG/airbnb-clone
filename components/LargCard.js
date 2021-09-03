import Image from "next/image";
function LargCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image 
        src={img} 
        layout="fill" 
        objectFit="cover" 
        className="rounded-2xl "/>
      </div>
      <div className="absolute top-32 left-12">
          <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
          <p className="text-white w-80">{description}</p>
          <button className="h-10 text-sm text-black bg-white px-4 py-2 rounded-lg mt-5">{buttonText}</button>
      </div>
    </section>
  );
}


export default LargCard;
