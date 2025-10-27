'use client';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { createContext, RefObject, useEffect, useRef } from 'react';
import { INITIAL_VIEW_STATE } from './constants';
import { MapContextType } from './types';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export const MapContext = createContext<MapContextType>({
  map: undefined,
});

export const MapProvider = ({
  children,
  mapContainerRef,
}: {
  children: React.ReactNode;
  mapContainerRef: RefObject<HTMLDivElement | null>;
}) => {
  const mapRef = useRef<mapboxgl.Map | undefined>(undefined);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/standard',
      center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
      zoom: INITIAL_VIEW_STATE.zoom,
      attributionControl: false,
      logoPosition: 'bottom-right',
    });

    if (mapRef.current) {
      new mapboxgl.Marker({
        color: '#000',
        anchor: 'bottom',
        offset: [0, -10],
      })
        .setLngLat([INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude])
        .addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = undefined;
      }
    };
  }, [mapContainerRef]);

  return <MapContext.Provider value={{ map: mapRef.current }}>{children}</MapContext.Provider>;
};
