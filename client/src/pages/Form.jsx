import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import Header2 from "../components/common/Header2";
import { useCreateEmployeeMutation } from "../redux/api/employeeApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const file = watch("profileImg");
  const [imageUrl, setImageUrl] = useState(null);
  const { token } = useSelector((state) => state.userReducer);

  //api
  const [createEmployee] = useCreateEmployeeMutation();

  useEffect(() => {
    if (file && file[0]) {
      imageChange(file[0]);
    }
  }, [file]);

  const imageChange = async (selectedFile) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("upload_preset", "whitefield_internship");
      formData.append("cloud_name", "rahulgudu");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/rahulgudu/image/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const uploadedImageUrl = response.data.secure_url;
      setImageUrl(uploadedImageUrl);
      console.log("Uploaded image URL:", imageUrl);
    } catch (error) {
      console.error("Image Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = async (data) => {
    const params = { ...data, profileImg: imageUrl };
    setLoading(true);
    console.log("params", params);

    try {
      const { data, error } = await createEmployee({ token, params });
      if (error) {
        toast.error(error.data.message);
      }
      if (data) {
        toast.success(data.message);
        navigate("/employees-list");
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header2 title={"Create Employee"} />
      <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white p-10 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Employee Form</h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit(submitHandler)}>
            {/* Name */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter name"
                className="input input-bordered w-full"
                {...register("name")}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full"
                {...register("email")}
              />
            </div>

            {/* Mobile No */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Mobile No</label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                className="input input-bordered w-full"
                {...register("phone")}
              />
            </div>

            {/* Designation */}
            <div className="flex flex-col">
              <label className="mb-2 text-gray-700">Designation</label>
              <select
                className="select select-bordered w-full"
                {...register("designation")}>
                <option disabled selected>
                  Select designation
                </option>
                <option>HR</option>
                <option>Manager</option>
                <option>Sales</option>
                <option>Developer</option>
                <option>Designer</option>
              </select>
            </div>

            {/* Gender */}
            <div className="flex flex-col md:col-span-2">
              <label className="mb-2 text-gray-700">Gender</label>
              <div className="flex space-x-8">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="male"
                    className="radio radio-primary"
                    {...register("gender")}
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value="female"
                    className="radio radio-primary"
                    {...register("gender")}
                  />
                  <span>Female</span>
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
                    value="MCA"
                    className="checkbox checkbox-primary"
                    {...register("course[]")}
                  />
                  <span>MCA</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="BCA"
                    className="checkbox checkbox-primary"
                    {...register("course[]")}
                  />
                  <span>BCA</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value="BSC"
                    className="checkbox checkbox-primary"
                    {...register("course[]")}
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
                onChange={imageChange}
                {...register("profileImg")}
              />
            </div>

            {loading && (
              <div className="">
                <AiOutlineLoading className="animate-spin text-2xl text-primary" />{" "}
                Uploading...
              </div>
            )}

            {imageUrl && (
              <div className="">
                <img
                  src={imageUrl}
                  className="w-24 h-32 rounded-lg object-cover"
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center md:col-span-2 mt-4">
              <button
                type="submit"
                className="btn btn-success w-full md:w-[50%] text-white"
                disabled={loading}>
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
