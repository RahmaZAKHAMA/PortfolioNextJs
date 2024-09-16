import React from 'react'

const notfound = () => {
  return (
    <div class="bg-gray-100">
      <div class="error-wrapper flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h1 class="text-6xl font-bold text-red-500">404</h1>
          <p class="mt-4 text-xl text-gray-700">
            Oops! The page you are looking for does not exist.
          </p>
          <p class="mt-2 text-gray-500">It might have been moved or deleted.</p>
          <a
            href="/"
            class="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
export default notfound;