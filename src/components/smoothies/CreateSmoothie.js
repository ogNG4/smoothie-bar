import { supabase } from "../../config/supabaseClient";
import Form from "../ui/Form";

import { useRouter } from "next/router";

import { useEffect, useState } from "react";

function CreateSmoothie() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState(0);
  const [formError, setFormError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please fill in all fields");
      return;
    }

    const { data, error } = await supabase
      .from("smoothies")
      .insert([{ title, method, rating }])
      .select();

    router.push("/");
  };

  return (
    <Form
      onSubmit={submitHandler}
      title={title}
      method={method}
      rating={rating}
      setRating={setRating}
      setTitle={setTitle}
      setMethod={setMethod}
    />
  );
}

export default CreateSmoothie;
