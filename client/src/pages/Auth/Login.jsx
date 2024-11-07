import Header2 from "../../components/common/Header2";

const Login = () => {
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

              {/* Email Input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="input input-bordered w-full focus:border-none"
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
                />
              </div>

              {/* Login Button */}
              <div className="form-control">
                <button className="btn btn-primary w-full">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
