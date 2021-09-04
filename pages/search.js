import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMM");
  const formattedEndDate = format(new Date(endDate), "dd MMM");
  const dateRange = `${formattedStartDate} - ${formattedEndDate}`;

  
  return (
    <div>
      <Header placeholder={`${location} | ${dateRange}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">300+ Stays . {dateRange}</p>
          <h1 className="text-4xl font-semibold mt-2 mb-6">
            Stays in {" " + location}
          </h1>
          <small className="text-gray-400 flex flex-grow pb-2">
            Results for stays near {location[0].toUpperCase()}
            {location.substr(1)} | {guests} Guests | from {dateRange}
          </small>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Free cancellations</p>
            <p className="button">Price</p>
            <p className="button">Type of place</p>
            <p className="button">Instant book</p>
            <p className="button">More filters</p>
          </div>
          {/* SEARCH RESULTS */}
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, description, star, price, total,title }, index) => (
                <InfoCard
                  key={index + 1}
                  img={img}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  title={title}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (response) => response.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
