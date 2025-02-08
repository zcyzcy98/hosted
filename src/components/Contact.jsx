import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaSkype } from 'react-icons/fa';

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-600 text-xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">sales@plasticpro.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaPhone className="text-blue-600 text-xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaWhatsapp className="text-blue-600 text-xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">WhatsApp</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center">
              <FaSkype className="text-blue-600 text-xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Skype</h3>
                <p className="text-gray-600">plasticpro.sales</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact