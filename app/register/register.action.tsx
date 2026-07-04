"use server";

import axios from "axios";
import { redirect } from "next/navigation";

async function registerFormAction(formData: FormData) {
  let userId: string | null = null;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signup`,
      Object.fromEntries(formData),
      { withCredentials: true },
    );

    if (response.data.success) {
      userId = response.data.userId;
      console.log(response.data);
    } else {
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
  if (userId) {
    redirect(`/verify-otp/${userId}`);
  }
}

export default registerFormAction;
