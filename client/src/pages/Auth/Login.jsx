import Header2 from "../../components/common/Header2";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/api/authApi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userExist } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [login] = useLoginMutation();
  const submitHandler = async (body) => {
    console.log("Body", body);
    setLoading(true);
    try {
      const { data, error } = await login(body);
      if (error) {
        setError(error.data.message);
      }
      if (data) {
        console.log(data);
        dispatch(userExist(data.responseData.token));
        localStorage.setItem("username", data.responseData.userName);
        toast.success(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* Header */}
      <Header2 title={"Login Page"} />
      <div className=" w-full bg-base-200 flex flex-col items-center">
        {/* Login Card */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-10">
          <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

              <form onSubmit={handleSubmit(submitHandler)}>
                {/* Email Input */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="input input-bordered w-full focus:border-none"
                    {...register("username")}
                  />
                </div>

                {/* Password Input */}
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="input input-bordered w-full focus:border-none"
                    {...register("password")}
                  />
                </div>

                {error && (
                  <p className="text-error text-sm font-bold mb-4">{error}</p>
                )}

                {/* Login Button */}
                <div className="form-control">
                  <button
                    className="btn btn-primary w-full"
                    type="submit"
                    disabled={loading}>
                    {loading ? "...." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
