import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  console.log(selectedLocation);
  // Transforming search results object into {latitude:-199222,longitude:112844}
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  //   Map viewPort
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sohailmg/ckt74s3qo3mzt18s1pipm59l5"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewPort}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResults.map(
        ({ long, lat, total, title, img, description, star, price }) => (
          <div key={long}>
            <Marker
              longitude={long}
              latitude={lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                onClick={() => setSelectedLocation({ long, lat })}
                className="cursor-pointer text-xs bg-white rounded-2xl p-2 hover:bg-gray-900 hover:text-white"
              >
                {total.replace("total", "")}
              </p>
            </Marker>
            {/* Popup on marker click*/}
            {selectedLocation.long == long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={lat}
                longitude={long}
              >
                <div className="flex flex-col h-56 ">
                  <div className="w-60  h-28 w-100 relative">
                    <Image
                      src={img}
                      layout="fill"
                      objectFit="cover"
                      alt={location}
                    />
                  </div>
                  <p className="flex items-centre pt-4">
                    <StarIcon className="h-5 text-red-400" />
                    {star}
                  </p>
                  <h3>{title}</h3>
                  <h2 className="font-semibold pt-4">{price}</h2>
                </div>
              </Popup>
            ) : (
              false
            )}
          </div>
        )
      )}
    </ReactMapGL>
  );
}

export default Map;
