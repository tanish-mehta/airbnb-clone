import React from 'react'
import ReactMapGL, { ViewState } from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = React.useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 11,
    })
        
  return (
      <ReactMapGL mapStyle='mapbox://styles/tanishm/clfdahdzd000201p48yo2xdbx'
          mapboxAccessToken={process.env.mapbox_key}
          {...viewport}
        //    onViewportChange={(viewport: any) => {
        //   if (mounted) { this.setState({ viewport }) }
        // }}
    //   onViewportChange={(nextViewport:any) => setViewport(nextViewport)}
      >
          
    </ReactMapGL>
  )
}

export default Map

