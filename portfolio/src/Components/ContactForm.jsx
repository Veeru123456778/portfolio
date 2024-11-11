// import React, { useState } from 'react';
// import { MdSend } from 'react-icons/md';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     Name: '',
//     Subject: '',
//     Message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send form data to the backend
//       await axios.post('http://localhost:3001/api/send-mail', formData);
//       alert('Form submitted successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

//   return (
//     <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
//       <div className="relative z-0 w-full mb-5 group">
//         <input
//           type="email"
//           name="email"
//           id="floating_email"
//           className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400"
//           placeholder=" "
//           required
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <label
//           htmlFor="floating_email"
//           className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-white"
//         >
//           Email address
//         </label>
//       </div>

//       <div className="relative z-0 w-full mb-5 group">
//         <input
//           type="text"
//           name="Name"
//           id="floating_name"
//           className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400"
//           placeholder=" "
//           required
//           value={formData.Name}
//           onChange={handleChange}
//         />
//         <label
//           htmlFor="floating_name"
//           className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-white"
//         >
//           Your Name
//         </label>
//       </div>

//       <div className="relative z-0 w-full mb-5 group">
//         <input
//           type="text"
//           name="Subject"
//           id="floating_subject"
//           className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400"
//           placeholder=" "
//           required
//           value={formData.Subject}
//           onChange={handleChange}
//         />
//         <label
//           htmlFor="floating_subject"
//           className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-white"
//         >
//           Subject
//         </label>
//       </div>

//       {/* <div className="relative z-0 w-full mb-5 group">
//         <textarea
//           name="Message"
//           id="floating_message"
//           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400 resize h-40"
//           placeholder=" "
//           required
//           value={formData.Message}
//           onChange={handleChange}
//         />
//         <label
//           htmlFor="floating_message"
//           className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:mb-20"
//         >
//           Message
//         </label>
//       </div> */}


//       <div className="relative z-0 w-full mb-5 group mt-14">
//   <textarea
//     name="Message"
//     id="floating_message"
//     // className="block w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400 resize-none h-40 py-2.5 px-0"
//     className="block py-2.5 px-0 w-full text-sm bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400 resize-none h-40 "
//     placeholder=" "
//     required
//     value={formData.Message}
//     onChange={handleChange}
//   />
//   <label
//     htmlFor="floating_message"
//     className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:text-white peer-focus:-translate-y-7"
//   >
//     Enter Message...
//   </label>
// </div>


//       <button
//         type="submit"
//         className="w-full text-white border-2 font-medium rounded-lg text-sm px-5 py-2 flex justify-center transition duration-200 ease-in-out transform hover:scale-105"
//       >
//         <div className='flex items-center gap-2'>
//           <MdSend size={30} className="text-blue-500" />
//           Send Message
//         </div>
//       </button>
//     </form>
//   );
// };

// export default RegistrationForm;


import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '', // Change this to lowercase
    subject: '', // Change this to lowercase
    message: '', // Change this to lowercase
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend
      await axios.post('https://portfolio-backend-gules-theta.vercel.app/api/send-mail', formData); // Updated URL
      alert('Form submitted successfully!');
      setFormData({email:'',name:'',subject:'',message:''});
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="email"
          id="floating_email"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400"
          placeholder=" "
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-white"
        >
          Email address
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name" // Change this to lowercase
          id="floating_name"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400"
          placeholder=" "
          required
          value={formData.name} // Change this to lowercase
          onChange={handleChange}
        />
        <label
          htmlFor="floating_name"
          className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-white"
        >
          Your Name
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="subject" // Change this to lowercase
          id="floating_subject"
          className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400"
          placeholder=" "
          required
          value={formData.subject} // Change this to lowercase
          onChange={handleChange}
        />
        <label
          htmlFor="floating_subject"
          className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-white"
        >
          Subject
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group mt-14">
        <textarea
          name="message" // Change this to lowercase
          id="floating_message"
          className="block py-2.5 px-2 w-full text-sm bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer focus:border-gray-400 resize-none h-40 "
          placeholder=" "
          required
          value={formData.message} // Change this to lowercase
          onChange={handleChange}
        />
        <label
          htmlFor="floating_message"
          className="peer-focus:font-medium peer-focus:text-lg absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-1 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:text-white peer-focus:-translate-y-7 "
        >
          Enter Message...
        </label>
      </div>

      <button
        type="submit"
        className="w-full text-white border-2 font-medium rounded-lg text-sm px-5 py-2 flex justify-center transition duration-200 ease-in-out transform hover:scale-105"
      >
        <div className='flex items-center gap-2'>
          <MdSend size={30} className="text-blue-500" />
          Send Message
        </div>
      </button>
    </form>
  );
};

export default RegistrationForm;
