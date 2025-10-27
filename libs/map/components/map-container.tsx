'use client';
import { useRef } from 'react';
import { MapProvider } from '../context';
import Map from './map';

export default function MapContainer() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <MapProvider mapContainerRef={mapContainerRef}>
      <div className="h-full w-full">
        <Map mapContainerRef={mapContainerRef} />
      </div>
    </MapProvider>
  );
}
