import { useForm } from "react-hook-form";

const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4    mb-[4rem] ">
      <div className="dark:bg-transparent bg-darkblack p-7 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Schedule a Consultation
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                {...register("fullName", { required: "Full Name is required" })}
                className="p-3 rounded-md bg-slate-800 border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="p-3 rounded-md bg-slate-800 border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-300"
            >
              How can we help you?
            </label>
            <textarea
              id="message"
              placeholder="Tell us about your project or needs..."
              rows="5"
              {...register("message", { required: "Message is required" })}
              className="p-3 rounded-md bg-slate-800 border border-slate-600 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`primary-btn ${
              isSubmitting ? "opacity-80 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Schedule Consultation"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
