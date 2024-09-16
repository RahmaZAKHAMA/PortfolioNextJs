import React from 'react'

const Contact = () => {
  return (
    <div class="bg-gray-100">
      <div class="bg-blue-900 text-white py-6">
        <div class="container mx-auto text-center">
          <h1 class="text-3xl font-bold">Contact Me</h1>
          <p class="mt-2 text-lg">
            I’d love to hear from you. Feel free to reach out!
          </p>
        </div>
      </div>

      <div class="container mx-auto p-6 md:p-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold mb-4"></h2>
            <form action="#" method="POST">
              <div class="mb-4">
                <label for="name" class="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="email" class="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  required
                ></input>
              </div>
              <div class="mb-4">
                <label for="message" class="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-900 focus:ring focus:ring-blue-900 focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </form>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
            <ul>
              <li class="mb-2">
                <span class="font-semibold">Address:</span>{" "}
                GomyCode,Elmenzah,Tunisia
              </li>
              <li class="mb-2">
                <span class="font-semibold">Phone:</span> (+216) 23 45 36 37
              </li>
              <li class="mb-2">
                <span class="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:rahmazakhama@gmail.com"
                  class="text-blue-900 hover:underline"
                >
                  rahmazakhama@gmail.com
                </a>
              </li>
              <li class="mt-4">
                <span class="font-semibold">Follow Me:</span>
                <div class="flex space-x-4 mt-2">
                  <a href="#" class="text-blue-900 hover:underline">
                    LinkedIn
                  </a>
                  <a href="#" class="text-blue-900 hover:underline">
                    Twitter
                  </a>
                  <a
                    href="https://github.com/RahmaZAKHAMA"
                    class="text-blue-900 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact