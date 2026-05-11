import { useState } from 'react'

function Form() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "" });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Logging the current state on submit
    const { name, email } = formData;
    console.log({ name, email });

    // Resetting the state
    // setName("");
    // setEmail("");
    setFormData({ name: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' id="name" name='name' value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input type='email' id="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
