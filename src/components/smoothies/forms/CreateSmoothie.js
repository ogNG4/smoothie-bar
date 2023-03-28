import { useRouter } from "next/router";
import { useState } from "react";
import Form from "@/form/Form";
import { addSmoothie } from "../../../utils/addSmoothie";

function CreateSmoothie() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please fill in all fields");
      return;
    }

    try {
      await addSmoothie(title, method, rating);
      router.push("/");
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <>
    <Form
      onSubmit={submitHandler}
      title={title}
      method={method}
      rating={rating} 
      setRating={setRating}
      setTitle={setTitle}
      setMethod={setMethod}
    />
    <p className="center">{formError}</p>
    </>
    
  );
}

export default CreateSmoothie;
