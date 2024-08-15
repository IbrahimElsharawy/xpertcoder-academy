import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="bg-white  py-1 px-2 rounded"
        onClick={openModal}
      >
        Contact Us
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h5 className="text-lg font-semibold" id="exampleModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="text-gray-400 hover:text-gray-600"
                onClick={closeModal}
                aria-label="Close"
              >
                <span className="text-xl">&times;</span>
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    {...register("fullName", {
                      required: "Full Name is required *",
                      maxLength: {
                        value: 20,
                        message: "Full Name cannot exceed 20 characters",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/i,
                        message: "Alphabetical characters only",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone *
                  </label>
                  <input
                    id="phoneNumber"
                    {...register("phoneNumber", {
                      required: "Phone number is required *",
                      pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Enter a valid phone number (10-15 digits)",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    {...register("email", {
                      required: "Email address is required *",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register("message", {
                      required: "Message is required *",
                      maxLength: {
                        value: 500,
                        message: "Message cannot exceed 500 characters",
                      },
                    })}
                    style={{ height: "120px", width: "100%" }}
                    className="mt-1 block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-second-border-color sm:text-sm"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-button-color hover:bg-custom-color"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
