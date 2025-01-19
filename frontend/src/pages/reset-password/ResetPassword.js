import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InvalidToken from "@/pages/verify/InvalidToken";
import useVerification from "@/utils/queries/useVerification";
import { useChangePassword } from "@/utils/queries/useChangePassword";
import "./reset-password.css";

const ResetPassword = () => {
  const { id: token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [validating, setValidating] = useState(true);
  const [userId, setUserId] = useState("");
  const { handleVerifyUser } = useVerification();
  const { handleChangePassword } = useChangePassword();

  // Verify token on component mount
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const result = await handleVerifyUser(token);
        setIsTokenValid(result.success);
        setUserId(result.user.id);
      } catch (error) {
        setIsTokenValid(false);
        console.error("Token verification failed:", error);
      } finally {
        setValidating(false);
      }
    };

    verifyToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await handleChangePassword(userId, password);

      if (result.success) {
        setIsSuccess(true);
        // Redirect to login after 3 seconds
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError(result.message || "Failed to reset password");
      }
    } catch (error) {
      setError(
        "An error occurred while resetting your password. Please try again."
      );
    }
  };

  if (validating) {
    return (
      <div className="reset-password-container">
        <div className="loading">Validating your reset token...</div>
      </div>
    );
  }

  if (!isTokenValid) {
    return (
      <div className="reset-password-container">
        <InvalidToken />
      </div>
    );
  }

  return (
    <div className="reset-password-container">
      {isSuccess ? (
        <div className="success-message-reset-password">
          <h2>Password Reset Successful!</h2>
          <p>
            Your password has been successfully reset. Redirecting to login...
          </p>
        </div>
      ) : (
        <>
          <h2>Reset Your Password</h2>
          <form onSubmit={handleSubmit} className="reset-password-form">
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your new password"
                required
              />
            </div>

            <button type="submit" className="primary-button" disabled={!userId}>
              Reset Password
            </button>
            {error && (
              <div className="error-message-reset-password">{error}</div>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default ResetPassword;
