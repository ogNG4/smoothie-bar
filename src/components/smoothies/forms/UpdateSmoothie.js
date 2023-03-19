import { supabase } from "../../config/supabaseClient";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Form from "../ui/form/Form";

function UpdateSmoothie() {
  const router = useRouter();
  const { smoothieId } = router.query;

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState(0);
  const [formError, setFormError] = useState(null);
  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", smoothieId)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
      }
    };
    fetchSmoothie();
  }, [smoothieId, router]);

  console.log(smoothieId);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please fill in all fields");
      return;
    }

    await supabase
      .from("smoothies")
      .update({ title, method, rating })
      .eq("id", smoothieId)
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

export default UpdateSmoothie;
