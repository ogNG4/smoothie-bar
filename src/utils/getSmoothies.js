import {supabase} from '../config/supabaseClient'

export async function getSmoothies(orderBy) {
  try {
    const { data } = await supabase
      .from("smoothies")
      .select()
      .order(orderBy, { ascending: false });
    return { data, orderBy };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
