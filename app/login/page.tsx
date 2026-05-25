import loginFormAction from './login.action'
import ToRegisterNavAction from './toRegisterNavAction'

function loginPage() {
  return (
   <>
      {/* <SubmitLoder isOpen={loading} /> */}
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Officer Login
          </h2>

          <form action={loginFormAction} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                // {...formik.getFieldProps("email")}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )} */}
            </div>

            {/* Mobile */}
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                // {...formik.getFieldProps("mobile")}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* {formik.touched.mobile && formik.errors.mobile && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.mobile}
                </div>
              )} */}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                // {...formik.getFieldProps("password")}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )} */}
            </div>

            {/* Secret Code */}
            <div>
              <input
                type="text"
                name="secretCode"
                placeholder="Officer Secret Code"
                // {...formik.getFieldProps("secretCode")}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {/* {formik.touched.secretCode && formik.errors.secretCode && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.secretCode}
                </div>
              )} */}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="adminToggle"
                // checked={isAdmin}
                // onChange={(e) => setIsAdmin(e.target.checked)}
                className="h-4 w-4"
              />
              <label htmlFor="adminToggle" className="text-gray-700">
                Admin
              </label>

              {/* Admin Code input appears beside checkbox if admin */}
              {/* {isAdmin && ( */}
                <input
                  type="text"
                  name="adminCode"
                  placeholder="Admin Code"
                  // {...formik.getFieldProps("adminCode")}
                  className="border border-gray-300 rounded-lg px-3 py-1 ml-2 focus:outline-none focus:ring-2 focus:ring-red-500 flex-1"
                />
              {/* )} */}
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-gray-500 text-sm text-center">
            Don't have an account?{" "}
            <ToRegisterNavAction />
          </p>
        </div>
      </div>
    </>
  )
}

export default loginPage