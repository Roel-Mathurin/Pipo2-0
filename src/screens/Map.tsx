import GoogleMapReact from 'google-map-react';



interface AnyReactComponentProps {
  text: string;
  lat: number;
  lng: number;
}

const AnyReactComponent: React.FC<AnyReactComponentProps>= ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 4.09488,
      lng: 9.74673
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={4.09488}
          lng={9.74673}
          text=""
        />
      </GoogleMapReact>
    </div>
  );
}