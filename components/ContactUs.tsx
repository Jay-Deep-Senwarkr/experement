import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Toaster } from "./ui/toaster";
import { toast } from "./ui/use-toast";

const ContactUs = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5329a34f-19da-4791-8d43-3065cd742a0e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast({title:"Success", description:"Your message has been sent successfully."})
      event.target.reset();
    } else {
      toast({title:"Failed", description:"Something went wrong please try again!"})
      setResult(data.message);
    }
  };
  return (
    <div className="p-6 flex flex-col w-[75%]  h-[70%] justify-center" id="ContactUs">
      <p className="text-3xl font-semibold mb-4 text-center text-white">Contact</p>
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <Label htmlFor="full-name" className="text-white text-lg ">
            Name{" "}
            <sup className="text-white text-opacity-40 text-xs font-light">
              required
            </sup>{" "}
          </Label>
          <Input
            type="text"
            id="full-name"
            placeholder="Enter your name"
            className="text-white bg-transparent"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="email" className="text-white text-lg">
            Email address{" "}
            <sup className="text-white text-opacity-40 text-xs font-light">
              required
            </sup>
          </Label>
          <Input
            className="bg-transparent bg-opacity-20 text-white"
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="number" className="text-white text-lg">
            Phone Number
          </Label>
          <Input
            className="bg-transparent bg-opacity-20 text-white"
            type="text"
            id="number"
            placeholder="Enter your phone number"
            name="phone number"
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="message" className="text-white text-lg">
            Your Message{" "}
            <sup className="text-white text-opacity-40 text-xs font-light">
              required
            </sup>
          </Label>
          <textarea
            id="message"
            placeholder="Enter your message"
            required
            className=" text-white flex h-24 w-full border border-gray-300 bg-transparent bg-opacity-20 dark:bg-zinc-800 dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]"
            name="message"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-800 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-400 transition duration-300">
          Send Message
        </button>
      </form>
    <div className="">
      <Toaster />
    </div>
    </div>
  );
};

export default ContactUs;