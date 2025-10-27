import { RefObject } from 'react';

export default function Map({
  mapContainerRef,
}: {
  mapContainerRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="w-full h-full">
      <div ref={mapContainerRef} className="w-full h-full" />
    </div>
  );
}
