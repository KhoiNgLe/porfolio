import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#659dbd] flex justify-center items-center p-4">
      <form
        method="POST"
        action="https://getform.io/f/b8e93543-2cda-44c9-b0f4-5658bc17358c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white">
            Contact
          </p>
          <p className="py-4 text-white">
            Submit the form below or shoot me an email - khoi.le3005@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 "
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#c8d8e4]">
          Let's Collaborate{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
