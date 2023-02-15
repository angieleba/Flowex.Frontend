import { Box } from '@chakra-ui/react';
import { GoogleMap, LoadScript, MarkerF, PolylineF } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: 'calc(100vh - 42px)',
};

const center = {
  lat: 37.772,
  lng: -122.214,
};

const path = [
  { lat: 37.772, lng: -122.214 },
  { lat: 37.782, lng: -121.224 },
];

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: path,
  zIndex: 1,
};

const CustomMap = () => {
  return (
    <Box>
      <LoadScript googleMapsApiKey="AIzaSyCBQFK68w-dpKmeXHESanNWAfeoZQd1ySM">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={9}
          mapTypeId="satellite"
          tilt={45}
        >
          <MarkerF position={path[0]} />
          <MarkerF position={path[1]} />
          <PolylineF path={path} options={options} />
        </GoogleMap>
      </LoadScript>
      {/* {boundary?.north && <PointQueryResult query={query} result={result} />} */}
    </Box>
  );
};

export default CustomMap;
