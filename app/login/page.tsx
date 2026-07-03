import SecretCodeInputComponent from "@/components/loginPage/secretCodeInputComponent";
import loginFormAction from "./login.action";
import ToRegisterNavAction from "./toRegisterNavAction";

function loginPage() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Officer Login
          </h2>

          <form action={loginFormAction} className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile */}
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Secret Code*/} 
            <SecretCodeInputComponent />

            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-gray-500 text-sm text-center">
            Don't have an account? <ToRegisterNavAction />
          </p>
        </div>
      </div>
    </>
  );
}

export default loginPage;
