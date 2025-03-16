import { useNavigate } from '@tanstack/react-router';

const AddEnityManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex flex-col w-full ml-0 xs:ml-16 pt-6 xs:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto w-full">
          <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">
            Create Entity Management
          </h1>
          <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., John"
              />
            </div>

            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., Doe"
              />
            </div>

            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age
              </label>
              <input
                type="number" // Changed to number for age
                id="age"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., 30"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email" // Changed to email type
                id="email"
                required
                placeholder="e.g., example@gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone
              </label>
              <input
                type="tel" // Changed to tel for phone numbers
                id="phone"
                required
                placeholder="e.g., 123-456-7890"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate({ to: '/' })} // Fixed navigation
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Create Entity
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEnityManagement;