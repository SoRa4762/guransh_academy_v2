"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Map from "../map/page";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {};

const ContactUs = (props: Props) => {
  const [contactUsData, setContactUsData] = useState<{}>({
    // firstName: "",
    // lastName: "",
    // email: "",
    // phone: "",
    // message: "",
  });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setContactUsData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  //formik way
  const phoneRegExp = /^\d{10}$/;

  const schema = Yup.object().shape({
    firstName: Yup.string().required("first name is a required field!"),
    lastName: Yup.string().required("last name is a required field!"),
    email: Yup.string().required("email is a required field!").email(),
    phone: Yup.string()
      .matches(phoneRegExp, "enter a valid phone number")
      .required("phone is a required field!"),
    message: Yup.string().required("message is a required field!"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },

    validationSchema: schema,

    onSubmit: ({ firstName, lastName, email, phone, message }) => {
      setContactUsData({ firstName, lastName, email, phone, message });
      const mailtoLink = `mailto:sonamjungi007@gmail.com?subject=${encodeURIComponent(
        "Contact Form Submission"
      )}&body=${encodeURIComponent(
        `First Name: ${values.firstName}\nLast Name: ${values.lastName}\nEmail: ${values.email}\nPhone Number: ${values.phone}\nMessage: ${values.message}`
      )}`;

      window.location.href = mailtoLink;
    },
  });
  // console.log(contactUsData);

  const { errors, touched, values, handleSubmit, handleChange } = formik;

  return (
    <div
      id="contactus"
      className="h-full w-full bg-gray-50 flex flex-col px-6 lg:px-16"
    >
      {/* form x map */}
      <div className="h-full w-full grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-4 sm:py-16">
          {/* <h1 className="text-lg md:text-2xl lg:text-3xl font-medium text-center py-4 md:py-6 lg:py-10">
            Got a message for us or looking to enroll? do not hesitate to
            message us!
          </h1> */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center py-6 md:py-10 lg:py-14">
            Contact Us
          </h1>
          {/* form */}
          <form
            className="flex flex-col gap-4 my-2"
            onSubmit={handleSubmit}
            method="post"
            encType="text/plain"
          >
            <div className="flex gap-4">
              <div className="flex flex-col">
                <Input
                  className="h-12 w-[9.5rem] sm:w-[11.5rem]"
                  placeholder="First Name"
                  // onChange={handleInputChange}
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && touched.firstName && (
                  <span className="text-red-500 text-xs sm:text-sm">
                    {errors.firstName}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <Input
                  className="h-12 w-[9.5rem] sm:w-[11.5rem]"
                  placeholder="Last Name"
                  // onChange={handleInputChange}
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && touched.lastName && (
                  <span className="text-red-500 text-xs sm:text-sm">
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            <Input
              className="h-12 w-80 sm:w-96"
              placeholder="Email"
              // onChange={handleInputChange}
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 text-xs sm:text-sm">
                {errors.email}
              </span>
            )}

            <Input
              className="h-12 w-80 sm:w-96"
              placeholder="Phone Number"
              type="number"
              // onChange={handleInputChange}
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && touched.phone && (
              <span className="text-red-500 text-xs sm:text-sm">
                {errors.phone}
              </span>
            )}

            <Textarea
              className="text-xs sm:text-sm"
              placeholder="Your Message"
              // onChange={handleInputChange}
              name="message"
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && touched.message && (
              <span className="text-red-500 text-xs sm:text-sm">
                {errors.message}
              </span>
            )}
            <Button className="text-slate-50 bg-green-500 hover:bg-green-600 sm:text-lg lg:text-xl shadow-md w-80 sm:w-96 shadow-gray-400">
              Contact Us!
            </Button>
          </form>

          <p className="w-80 font-medium sm:w-96 flex flex-col lg:text-lg bg-emerald-200 pl-4 py-2 rounded-md">
            Location
            <br />
            <span className="flex items-center gap-2 font-light">
              <MapPin size={18} /> Itahari - 20, Milan Tole
            </span>
          </p>
          <p className="w-80 font-medium sm:w-96 flex flex-col lg:text-lg bg-red-200 pl-4 py-2 rounded-md">
            Email
            <br />
            <span className="flex items-center gap-2 font-light">
              <Mail size={18} /> guranshacademy79@gmail.com
            </span>
          </p>
          <p className="w-80 font-medium sm:w-96 flex flex-col lg:text-lg bg-pink-200 pl-4 py-2 rounded-md">
            Phone
            <br />
            {/* <div className="flex"> */}
            <span className="flex items-center gap-2 font-light">
              <Phone size={18} /> 9803483838
              <Phone size={18} className="ml-4" /> 9762983355
            </span>
            {/* </div> */}
          </p>
        </div>
        <div>
          <Map />
        </div>
      </div>

      {/* info */}
      {/* <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <div className="flex flex-col justify-center gap-2 sm:gap-4 md:px-8">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center py-6 md:py-10 lg:py-14">
            Contact Us
          </h1>
          <p className="flex items-center gap-2 lg:text-lg bg-gray-200 pr-32 pl-4 py-2 rounded-full">
            <MapPin /> Location: Tarahara, lorem ipsum
          </p>
          <p className="flex items-center gap-2  lg:text-lg bg-gray-200 pr-32 pl-4 py-2 rounded-full">
            <Mail /> Email: guranshacademy@gmail.com
          </p>
          <p className="flex items-center gap-2  lg:text-lg bg-gray-200 pr-32 pl-4 py-2 rounded-full">
            <Phone /> Phone: 9784856548
          </p>
        </div>
        <Image
          src="/cu.jpg"
          alt="Guransh Academy"
          height={1000}
          width={1000}
          className="h-96 w-full object-none"
        />
      </div> */}
    </div>
  );
};

export default ContactUs;
