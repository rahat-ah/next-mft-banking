"use client";

import axios from "axios";
import { toast } from "react-toastify";

async function loginFormAction(formData: FormData) {
  console.log("Form data received in action:", formData);

  try {
    const payload = {
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      password: formData.get("password"),
      secretCode: formData.get("secretCode") || formData.get("adminCode"),
    };

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signin`,
      payload, {withCredentials: true}
    );

    console.log("Login response:", response.data);
  } catch (error) {
    toast.error("An error occurred . Please try again.");
    console.log(error);
  }
}

export default loginFormAction;
