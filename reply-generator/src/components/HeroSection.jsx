import React, { useState } from "react";
import TextArea from "./TextArea";
import SelectField from "./SelectField";
import Button from "./Button";
import { toast } from "react-toastify";
const HeroSection = ({ onGenerateReply }) => {
  const [message, setMessage] = useState("");
  const [tone, setTone] = useState("neutral");
  const [loading, setLoading] = useState(false);
  const [generatedReply, setGeneratedReply] = useState("");

  const handleGenerateReply = async () => {
    setLoading(true);
    // Mock API request for demonstration

    //Here we will call the openai's api with the prompt and input data but since openai is no loger support free credits to test its api we are not able to use the actual apiS

    setTimeout(() => {
      const mockResponse = `This is a generated reply based on ${tone} tone.`;
      setGeneratedReply(mockResponse);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto border p-6 mt-6 rounded-md md:w-[1200px]">
      <div className="flex flex-col lg:flex-row">
        {/* Left side */}
        <div className="w-full lg:w-1/2 lg:pr-4">
          <TextArea
            label="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Enter your message"
          />
          <SelectField
            label="Select your tone"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          />
          <Button
            onClick={handleGenerateReply}
            disabled={loading}
            className="bg-blue-500 text-white"
          >
            {loading ? "Generating..." : "Generate Reply"}
          </Button>
        </div>
        {/* Right side */}
        <div className="w-full lg:w-1/2 lg:pl-4 mt-4 lg:mt-0">
          <TextArea
            label="Generated reply"
            value={loading ? "Generating..." : generatedReply}
            rows={7}
            readOnly
          />
          <div className="flex justify-end mt-2 gap-4">
            <Button
              className="bg-transparent border text-black hover:bg-slate-200 w-16"
              onClick={function () {
                setGeneratedReply("");
                toast("Copied");
              }}
            >
              Reset
            </Button>
            <Button
              className="bg-blue-500 hover:bg-blue-600 w-16"
              onClick={function () {
                if (generatedReply.length > 0) {
                  toast("Your text is copied!");
                  navigator.clipboard.writeText(generatedReply);
                }
              }}
            >
              Copy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
