import { useState } from "react";  

const AdmissionForm = () => {  
  const [formData, setFormData] = useState({  
    name: "",  
    email: "",  
    phone: "",  
    address: "",  
    academicRecords: "",  
    recommendations: "",  
    message: "",  
  });  

  const [errors, setErrors] = useState({});  

  const validate = () => {  
    const newErrors = {};  
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    const regexPhone = /^\d{10}$/;   

    if (!formData.name.trim()) newErrors.name = "Name is required.";  
    if (!regexEmail.test(formData.email)) newErrors.email = "Valid email is required.";  
    if (!regexPhone.test(formData.phone)) newErrors.phone = "Valid phone number is required.";  
    if (!formData.address.trim()) newErrors.address = "Address is required.";  
    if (!formData.academicRecords.trim()) newErrors.academicRecords = "Academic records are required.";  

    setErrors(newErrors);  
    return Object.keys(newErrors).length === 0;   
  };  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({ ...formData, [name]: value });  
    if (errors[name]) {  
      setErrors({ ...errors, [name]: null }); 
    }  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    if (validate()) {  
      console.log("Form submitted successfully:", formData);  
      alert("Application submitted successfully!");  
      setFormData({ // Reset form  
        name: "",  
        email: "",  
        phone: "",  
        address: "",  
        academicRecords: "",  
        recommendations: "",  
        message: "",  
      });  
    }  
  };  

  return (  
    <div className=" mx-auto bg-white p-5 rounded shadow-md">  
      <h2 className="text-xl font-semibold mb-5">Application Form</h2>  
      <form onSubmit={handleSubmit}>  
        {Object.keys(formData).map((key) => (  
          <div className="mb-4" key={key}>  
            <label className="block text-gray-700" htmlFor={key}>  
              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}  
            </label>  
            {key === 'message' || key === 'address' ? (  
              <textarea  
                name={key}  
                id={key}  
                value={formData[key]}  
                onChange={handleChange}  
                required  
                className="mt-1 block w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"  
              />  
            ) : (  
              <input  
                type={key === 'email' ? 'email' : 'text'}  
                name={key}  
                id={key}  
                value={formData[key]}  
                onChange={handleChange}  
                required  
                className="mt-1 block w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"  
              />  
            )}  
            {errors[key] && <p className="text-red-500 text-xs">{errors[key]}</p>}  
          </div>  
        ))}  

        <button  
          type="submit"  
          className="w-1/4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"  
        >  
          Submit Application  
        </button>  
      </form>  
    </div>  
  );  
};  

export default AdmissionForm;