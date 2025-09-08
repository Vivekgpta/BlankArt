import React from 'react'
import { Link } from 'react-router-dom'

const ContactUsFormSection = () => {
  return (
    <div className="bg-[#ffedf3] w-full py-10">
      <div className="flex flex-col lg:flex-row justify-around items-stretch gap-8 w-full max-w-7xl mx-auto px-6">
        
        {/* Left Side Contact Info */}
        <div className="bg-[#fffaf9] shadow-2xl shadow-black w-full lg:w-1/2 p-6 rounded-3xl">
          <h1 className="text-3xl font-bold mb-6 font-serif text-pink-950">
            Let's Connect!
          </h1>

          <p className="text-gray-500 mb-8 font-medium">
            Have a custom art project in mind? Want to collaborate? Or just want
            to say hello? I'd love to hear from you! Drop me a message and let's
            bring your creative vision to life.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex gap-4 items-center p-3 hover:bg-[#ffe9f0] hover:rounded-xl transition-all duration-300 ease-in-out">
              <i className="fa-solid fa-envelope text-[#ff5c8f] text-3xl"></i>
              <div>
                <h1 className="font-medium">Email</h1>
                <p className="text-gray-500">blankart@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4 items-center p-3 hover:bg-[#ffe9f0] hover:rounded-xl transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 bg-[#ffeaf1] p-1 rounded-full text-[#ff5d8f]"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 21c-4.97-5.373-8-8.485-8-12a8 8 0 1116 0c0 3.515-3.03 6.627-8 12z" />
                <circle cx="12" cy="9" r="2.5" fill="currentColor" />
              </svg>
              <div>
                <h1 className="font-medium">Location</h1>
                <p className="text-gray-500">Bhopal, (M.P.)</p>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex gap-4 items-center p-3 hover:bg-[#ffe9f0] hover:rounded-xl transition-all duration-300 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 bg-[#ffeaf1] p-1 rounded-full text-[#ff5d8f]"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 6v6h4.5M12 22a10 10 0 100-20 10 10 0 000 20z" />
              </svg>
              <div>
                <h1 className="font-medium">Response Time</h1>
                <p className="text-gray-500">Usually within 24-48 hours</p>
              </div>
            </div>
          </div>

          <hr className="w-full h-1 my-8 bg-[#ffe9f0] border-0" />

          <h3 className="text-pink-950 text-xl font-medium mb-4">
            Follow My Journey
          </h3>
          <div className="flex gap-6 text-3xl text-[#ff5c8f]">
            <Link to="/" className="hover:text-[#ff5e8f]"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="/" className="hover:text-[#ff5e8f]"><i className="fa-brands fa-pinterest"></i></Link>
            <Link to="/" className="hover:text-[#ff5e8f]"><i className="fa-solid fa-envelope"></i></Link>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white shadow-2xl shadow-black w-full lg:w-1/2 p-6 rounded-3xl">
          <h1 className="text-3xl font-bold mb-6 font-serif text-pink-950">
            Send Me a Message
          </h1>
          <form className="flex flex-col gap-4 text-lg font-medium">
            <label>Your Name *</label>
            <input type="text" placeholder="Enter Your Name"
              className="border-2 border-[#ffdfe9] rounded-lg p-2 pl-4" />

            <label>Email Address *</label>
            <input type="email" placeholder="Enter Your Email"
              className="border-2 border-[#ffdfe9] rounded-lg p-2 pl-4" />

            <label>Subject *</label>
            <input type="text" placeholder="What's this about?"
              className="border-2 border-[#ffdfe9] rounded-lg p-2 pl-4" />

            <label>Message *</label>
            <textarea rows={3} placeholder="Tell me about yourself or say, Hello."
              className="border-2 border-[#ffdfe9] rounded-lg p-2 pl-4" />

            <input type="submit" value="Send Message"
              className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md cursor-pointer hover:bg-pink-600 hover:shadow-lg transition-all duration-300" />
          </form>
        </div>

      </div>
    </div>
  )
}

export default ContactUsFormSection
