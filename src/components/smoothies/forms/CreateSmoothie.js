import { useRouter } from "next/router";
import { useState } from "react";
import Form from "@/form/Form";
import { submitSmoothie } from "../../../utils/addSmoothie";

function CreateSmoothie() {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "", method: "", rating: "" });
  const [formError, setFormError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    const result = await submitSmoothie(event, formData, setFormError);

    if (result) {
      router.push("/");
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        title={formData.title}
        method={formData.method}
        rating={formData.rating}
        onChange={handleChange}
      />
      <p className="center">{formError}</p>
    </>
  );
}

export default CreateSmoothie;
