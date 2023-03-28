import { supabase } from "../config/supabaseClient";

export async function deleteSmoothie(id) {
  try {
    const { data, error } = await supabase
      .from("smoothies")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("Supabase error:", error);
      return { success: false, error };
    }

    console.log("Smoothie deleted successfully:", data);

    return { success: true };
  } catch (error) {
    console.log("Error deleting smoothie:", error);
    return { success: false, error };
  }
}
