"use server";

import axios from "axios";
import { redirect } from "next/navigation";

async function registerFormAction(formData: FormData) {
  
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`,
      Object.fromEntries(formData),
      { withCredentials: true },
    );

    if (response.data.success) {
      
      redirect(`/verify-otp/${response.data.userId}`);
    } 
  } catch (error) {
    console.log(error);
  }
}

export default registerFormAction;
