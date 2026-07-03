
import axios from "axios";
import SendOptComponent from "./sendOptComponent";

async function verifyOtpComponent({ id }: { id: String }) {

  const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/get-user/${id}`
        );

  return (
    <>
      <p className="text-sm text-gray-600 mb-1 text-left">
        Email: <span className="font-medium text-orange-500">{response.data.user.email}</span>
      </p>

      <p className="text-sm text-gray-600 mb-4 text-left">
        Mobile Number:{" "}
        <span className="font-medium text-orange-500">{response.data.user.mobileNumber}</span>
      </p>
      <SendOptComponent email={response.data.user.email} />
    </>
  );
}

export default verifyOtpComponent;
