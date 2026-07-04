"use server";

import axios from "axios";
import { redirect } from "next/navigation";

async function loginFormAction(formData: FormData) {
  console.log("Form data received in action:", formData);

  const data = Object.fromEntries(formData) as Record<string, FormDataEntryValue>;

  // Pick whichever code exists and rename it to secretCode
  const secretCode = data.officeCode || data.adminCode;

  // Remove old keys and create final payload
  const payload: Record<string, FormDataEntryValue> = {
    ...data,
    secretCode,
  };

  delete payload.officeCode;
  delete payload.adminCode;

  console.log(payload)

  let redirectPath: string | null = null;

 try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/signin`,
      payload,
      { withCredentials: true },
    );

    if (response.data.success) {
      console.log("Login successful:", response.data);
      redirect(`/home`);
    } else if(response.data?.isVerified === false){
      redirectPath = `/verify-otp/${response.data.id}`;
    }else{
      console.log(response.data)
    }
  } catch (error) {
    console.log(error);
  }
  if (redirectPath) {
    redirect(redirectPath);
  }
}

export default loginFormAction;
