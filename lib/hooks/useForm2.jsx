import { useState } from "react";

export default function useForm2(initialVal) {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e);
  };

  return [value, handleChange];
}
