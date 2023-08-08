# Validation using formik and yup x How to send mail thorugh client side

<form action={`mailto:sonamjungi007@gmail.com?subject=Email%20From%20Contact%20Us%20Page&body=
    ${JSON.stringify(contactUsData)}`}>

    this is how i had done, no validtation what so ever and the output was...
    {"firstName": "Sora", "lastName": "Rai".... } //butt ugly mate,

but i thought it would do, so i wanted to add validation, so i just

-> yarn add formik yup

then

import {useFormik} from "formik";
import \* as Yup from "yup";
const [contactUsData, setContactUsData] = useState<{}>({})

//setting up schema for yup
const schema = Yup.object().shape({
firstName: Yup.string().required(),
lastName: Yup.string().requried(),
phone: Yup.number().requrired(),
email: Yup.string().requried().email("Please enter a valid email address"),
message: Yup.string().required()
})

//jsut demoed this website to nikesh as well lol, now back to coding aight?

const formik = useFormik({
initialValue: {
firstName: "",
lastName: "",
email: "",
phone: "",
message: "",
},

validationSchema: schema,

//setting up mailto with formik
onSubmit: ({firstName, lastName, email, phone, message}) => {
setContactUsData({firstName, lastName, email, phone, message});
const mailttoLink = `mailto:recipient@example.com?subject=${encodeURIComponent(
        "Contact Form Submission"
      )}&body=${encodeURIComponent(
        `First Name: ${values.firstName}\nLast Name: ${values.lastName}\nEmail: ${values.email}\nPhone Number: ${values.phone}\nMessage: ${values.message}`
      )}`;

      window.location.href = mailtoLink;

}
})

const {errors, touched, values, handleSubmit, handleChange} = formik;

return (

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
              className="text-red-500 text-xs sm:text-sm"
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

)

and there you have it folks, thats how you do it!

//setting up useState to get multiple values from multiple textfields

const [multipleFormValues, setMultipleFormValues] = useState<{}>({});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
const {name, value} = e.target;
setMultipleFormValues((prevData)=>({
...prevData,
[name]: value,
}));
};

//this is how you do it

//for input tho
<input name="firstName" onChange={handleChange} />
