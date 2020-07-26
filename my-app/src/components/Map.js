import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

export const WebMapView = () => {
  const mapRef = useRef();

  useEffect(() => {
    loadModules(['esri/Map', 'esri/views/MapView'], { css: true }).then(([ArcGISMap, MapView]) => {
      const map = new ArcGISMap({
        basemap: 'topo-vector',
      });

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-118, 34],
        zoom: 8,
      });

      return () => {
        if (view) {
          view.container = null;
        }
      };
    });
  });

  return <div className="webmap" ref={mapRef} />;
};
