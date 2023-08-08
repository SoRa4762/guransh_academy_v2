# Validation using formik and yup x How to send mail thorugh client side

<form action={`mailto:sonamjungi007@gmail.com?subject=Email%20From%20Contact%20Us%20Page&body=
    ${JSON.stringify(contactUsData)}`}>

    this is how i had done, no validtation what so ever and the output was...
    {"firstName": "Sora", "lastName": "Rai".... } //butt ugly mate,

but i thought it would do, so i wanted to add validation, so i just

-> yarn add formik yup

then 

import {useFormik} from "formik";
import * as Yup from "yup";

const schema = Yup.object({
    
})