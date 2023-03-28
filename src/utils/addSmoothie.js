import { supabase } from "../config/supabaseClient";

export async function addSmoothie(title, method, rating) {
  try {
    const { data } = await supabase
      .from("smoothies")
      .insert([{ title, method, rating }])
      .select();

    return data;
  } catch (error) {
    return error;
  }
}
