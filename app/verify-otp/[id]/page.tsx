import ToHomeRegiAction from "@/components/registerPage/toHomeRegiAction";
import SendOtpComponent from "@/components/registerPage/verifyOtpComponent";


async function VerifyOtpPopup({
params
}: {
  params: { id: string };
}) {

    const handleVerifyClick = () => {
    }
    const {id} = await params;

    console.log(id)
  return (
    <div className="fixed z-50 flex items-center justify-center inset-0">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-transparent bg-opacity-80 backdrop-blur-sm"
      ></div>

      {/* Popup Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-11/12 max-w-md p-6 md:p-8 z-10 animate-fadeIn shadow-black">
        {/* Header */}
        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
          Verify Email with OTP
        </h2>

        <SendOtpComponent id={id} />

        {/* Close Link */}
        <ToHomeRegiAction />
        
      </div>
    </div>
  )
}

export default VerifyOtpPopup