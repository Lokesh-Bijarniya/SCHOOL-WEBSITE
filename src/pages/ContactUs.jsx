import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    localStorage.setItem('contactFormData', JSON.stringify({ name, email, message }));
    alert('Your message has been sent successfully!');
  };

  return (
    <div className="p-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4">123 School St, XYZ city, XYZ State 123456</p>
        <p className="mt-2">Phone: (123) 456-7890</p>
        <p className="mt-2">Email: <a href="mailto:xyz@innovative.edu">xyz@innovative.edu</a></p>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block mb-2">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <label className="block mb-4">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </label>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Send
          </button>
        </form>
      </section>
      <section>
        <h2 className="text-3xl font-bold">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.548973366843!2d-122.419418484681!3d37.77492927975835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a4edfc6e7%3A0x54f7eac4a4b2f3c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1609712127153!5m2!1sen!2sus"
          width="800"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
