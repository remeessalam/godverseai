import MapComponent from "../Components/MapComponent";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen dark:bg-darkblack text-white flex flex-col items-center justify-center pt-[7rem] px-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h1 className="main-title mb-8">Get in Touch</h1>
            <div className="space-y-4 desc">
              <p>Phone: [Your Phone Number]</p>
              <p>Email: [Your Email Address]</p>
              <p>Office Address: [Your Office Address]</p>
              <p>Website: [Your Website URL]</p>
            </div>
          </div>

          <MapComponent />
        </div>

        <div className="w-full max-w-2xl mx-auto paddingbottom">
          <h2 className="main-title mb-8 text-center">
            Schedule a Consultation
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="5"
              className="p-3 rounded bg-[#1c2130] border border-[#2a2f42] w-full"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#1e88e5] hover:bg-[#1976d2] text-white py-3 rounded transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
