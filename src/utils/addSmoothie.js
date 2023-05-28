// import { supabase } from "../config/supabaseClient";

// export async function addSmoothie(title, method, rating) {

//   const addSmoothieHandler = async (event) => {
//   try {
//     const { data } = await supabase
//       .from("smoothies")
//       .insert([{ title, method, rating }])
//       .select();

//     return data;
//   } catch (error) {
//     return error;
//   }
// }

// }


import { supabase } from "../config/supabaseClient";

export async function addSmoothie(formData) {
  try {
    const { data} = await supabase
      .from("smoothies")
      .insert([{ ...formData }])
      .select();
    return {  data: data[0] };
  } catch (error) {
    return {  error: error.message };
  }
}

export async function submitSmoothie(event, formData, setFormError) {
  event.preventDefault();

  if (!formData.title || !formData.method || !formData.rating) {
    setFormError("Please fill in all fields");
    return;
  }

  const result = await addSmoothie(formData);

  if (!result.success) {
    setFormError(result.error);
    return;
  }

  return result.data;
}