import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Map from "../map/page";
import { Textarea } from "../ui/textarea";

type Props = {};

const ContactUs = (props: Props) => {
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
          <div className="flex gap-4">
            <Input
              className="h-12 w-[9.5rem] sm:w-[11.5rem]"
              placeholder="First Name"
            />
            <Input
              className="h-12 w-[9.5rem] sm:w-[11.5rem]"
              placeholder="Last Name"
            />
          </div>
          <Input className="h-12 w-80 sm:w-96" placeholder="Email" />
          <Input className="h-12 w-80 sm:w-96" placeholder="Phone Number" />
          <Textarea className="w-80 sm:w-96" placeholder="Your Message" />
          <Button className="text-slate-50 bg-green-500 hover:bg-green-600 sm:text-lg lg:text-xl shadow-md w-80 sm:w-96 shadow-gray-400">
            Contact Us!
          </Button>
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
