import { MapContainer } from '@/libs';
import { getAllStores } from './api/stores/action';

export default async function Home() {
  const stores = await getAllStores();
  console.log({ stores });

  return <MapContainer />;
}
