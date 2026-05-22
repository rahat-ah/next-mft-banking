
import ToLoginNavigate from "@/components/registerPage/toLoginNavAction";
import registerFormAction from "./register.action";
import VerificationInput from "@/components/registerPage/verificationInput";

function registerPage() {
  
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-orange-50 to-blue-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl w-full xs:max-w-xs sm:max-w-md p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Officer Registration
        </h2>

        <form action={registerFormAction} className="flex flex-col gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <VerificationInput />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="role"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="manager">Manager</option>
            <option value="loan_officer">Loan Officer</option>
            <option value="ceo">CEO</option>
          </select>

          <input
            type="text"
            name="secretCode"
            placeholder="Officer Secret Code"
            required
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className={`mt-4 px-6 py-3 rounded-xl  text-white bg-blue-600 ${
              false ? "bg-gray-400 cursor-not-allowed" : " hover:bg-blue-700 "
            }font-medium transition`}
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-gray-500 text-sm text-center">
          Already have an account?{" "}
          <ToLoginNavigate />
        </p>
      </div>
    </div>
  );
}

export default registerPage;
