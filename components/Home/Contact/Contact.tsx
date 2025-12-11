import { cn } from "@/components/lib/utils";
import { BiEnvelope, BiMap } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto px-4 md:px-6 lg:px-8 pt-15 relative"
    >
      <div className="pt-16 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-foreground/80 text-lg mt-4 text-center">
            Feel free to reach out if you have any questions or would like to
            work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 ">
            <div className="bg-card border border-border rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Send a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-foreground/80"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className={cn(
                        "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
                      )}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-foreground/80"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className={cn(
                        "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
                      )}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-base block mb-2 text-foreground/80"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className={cn(
                      "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
                    )}
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-base block mb-2 text-foreground/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className={cn(
                      "w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600/50"
                    )}
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="cosmic-button flex items-center justify-center gap-2"
                >
                  Send Message
                  <LuSend size={16} />
                </button>
              </form>
            </div>
          </div>
          <div className="h-full">
            <div className="h-full bg-card border border-border rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4 pr-2 md:pr-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <BiEnvelope className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5">Email</h4>
                    <a href="mailto:zoey.c.zhao@outlook.com">
                      <p className="font-semibold text-gray-500 text-sm md:text-base break-all md:break-normal">
                        zoey.c.zhao@outlook.com
                      </p>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <BiMap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-0.5">Location</h4>
                    <p className="font-bold text-gray-500">Oulu, Finland</p>
                  </div>
                </div>
                <div className="mt-12 flex space-x-8">
                  <div
                    className={cn(
                      "p-3 rounded-full bg-primary/10 flex justify-center items-center cursor-pointer flex-col hover:bg-sky-400 transition-all duration-300"
                    )}
                  >
                    <FaXTwitter className="w-6 h-6 text-primary" />
                  </div>

                  <div
                    className={cn(
                      "p-3 rounded-full bg-primary/10 flex justify-center items-center cursor-pointer flex-col hover:bg-pink-400 transition-all duration-300"
                    )}
                  >
                    <FaInstagram className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              {/* <div className="mt-12">
                <h4 className="text-xl font-bold mb-6">Working Hours</h4>
                <div className="text-foreground/80 space-y-2">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Weekend: Available for urgent matters</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
