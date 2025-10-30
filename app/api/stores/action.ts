import { createServerClient } from '@/libs/supabase';
import { cookies } from 'next/headers';
import { Store } from './type';

const STORE_TABLE_NAME = 'stores';

export const getAllStores = async (): Promise<Array<Store>> => {
  const cookiesStored = await cookies();
  const supabase = await createServerClient(cookiesStored);

  if (!supabase) {
    throw new Error('Supabase not found');
  }

  const { data, error } = await supabase.from(STORE_TABLE_NAME).select('*');

  if (error) {
    throw new Error(`Error getting all stores: ` + error.message);
  }

  return data;
};
