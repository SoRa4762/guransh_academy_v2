"use client";

import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
// import "maplibre-gl/dist/maplibre-gl.css";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(87.272584);
  const [lat] = useState(26.704236);
  const [zoom] = useState(14);
  const [API_KEY] = useState(process.env.NEXT_PUBLIC_MAP_API_KEY);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });

    //adding control
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    map.current.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    //adding popups
    const myHome = new maplibregl.Popup({
      closeOnClick: true,
    }).setHTML("<b>My Home</b>");
    const taraharaBazar = new maplibregl.Popup({
      closeOnClick: true,
    }).setHTML(
      "<b>Tarahara Bazar</b> <br/> <b>Contact Info:</b> 025-475303 <br/> <b>Avaibility:</b> 5AM - 10PM"
    );

    //adding markers
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([87.290073, 26.705498])
      .setPopup(myHome)
      .addTo(map.current);

    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([87.272584, 26.704236])
      .setPopup(taraharaBazar)
      .addTo(map.current);
  }, [API_KEY, lng, lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
