import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./verify-style.css";
import { useAllTokens } from "@/utils/queries/getTokens";
import { UserContext } from "@/contexts/UserContext";
import useVerification from "@/utils/queries/useVerification";
import InvalidToken from "./InvalidToken";
import CorrectToken from "./CorrectToken";

const Verify = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState("");
  const { user, updateUser } = useContext(UserContext);
  const { id: paramId } = useParams();
  const [verificationAttempted, setVerificationAttempted] = useState(false);
  const { handleVerifyUser } = useVerification();
  const { tokenValues, loading, error } = useAllTokens();

  useEffect(() => {
    const verifyEmail = async () => {
      if (verificationAttempted || loading || !tokenValues.length) return;

      try {
        setVerificationAttempted(true);
        if (tokenValues.includes(paramId)) {
          setIsVerified(true);
          setMessage("Verifying your email...");
          const result = await handleVerifyUser(paramId);
          updateUser({ ...user, email: result.user.email, emailVerified: true });
          setMessage("Your email has been successfully verified.");
          console.log("result", result);
          
        } else {
          setIsVerified(false);
          setMessage("No valid verification token found.");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setIsVerified(false);
        setMessage("Verification failed. Please try again later.");
      }
    };
    verifyEmail();
  }, [tokenValues]);

  return (
    <div className="container-verify">
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="box-verify">
          <>{isVerified ? <CorrectToken /> : <InvalidToken />}</>
        </div>
      )}
    </div>
  );
};

export default Verify;
