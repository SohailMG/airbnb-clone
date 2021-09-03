import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";


export default function Home({ exploreData ,cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header component  */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main App Body */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Small cards section */}
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Data pulled from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        {/* Medium cards section */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">

          {cardsData?.map(({img,title},index) => (
            <MediumCard key={index} img={img} title={title}/>
            ))}
            </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then(
    (response) => response.json()
  );

  const cardsData = await fetch("https://jsonkeeper.com/b/VHHT").then(
    (response) => response.json()
  );

  return { props: { exploreData,cardsData } };
}
