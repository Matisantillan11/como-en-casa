export type Store = {
  id: string;
  created_at: string;
  updated_at?: string;
  deleted_at?: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  image_url?: Array<string>;
  store: string;
};
