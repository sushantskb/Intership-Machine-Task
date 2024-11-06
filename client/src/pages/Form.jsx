import Header2 from "../components/common/Header2";

const Form = () => {
  return (
    <div>
      {/* Header */}
        <Header2 title={"Create Employee"} />
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
        {/* Form Container */}
        <div className="max-w-2xl w-full bg-white p-10 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Employee Form</h2>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full"
              />
            </div>

            {/* Mobile No */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Mobile No</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="input input-bordered w-full"
              />
            </div>

            {/* Designation */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Designation</label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select designation
                </option>
                <option>HR</option>
                <option>Manager</option>
                <option>Sales</option>
              </select>
            </div>

            {/* Gender */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-gray-700">Gender</label>
              <div className="flex space-x-8">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    className="radio radio-primary"
                  />
                  <span>M</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    className="radio radio-primary"
                  />
                  <span>F</span>
                </label>
              </div>
            </div>

            {/* Course */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-gray-700">Course</label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>MCA</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>BCA</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span>BSC</span>
                </label>
              </div>
            </div>

            {/* Image Upload */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-gray-700">Img Upload</label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:col-span-2 mt-4">
              <button
                type="submit"
                className="btn btn-success w-full md:w-[50%] text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
