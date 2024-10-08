import React, { useState, useEffect } from "react";
import keyIcon from "@/assets/images/icons/passkey.webp";
import { useChangePassword } from "@/utils/queries/useChangePassword";

const ChangePassword = ({ userId }) => {
  const [active, setActive] = useState(false);
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isSame, setIsSame] = useState(false);
  const [message, setMessage] = useState("");

  const { handleChangePassword, loading, error } = useChangePassword();
  const passwordLength = password.length > 0 && checkPassword.length > 0;
  useEffect(() => {
    setIsSame(password === checkPassword && password.length > 0);
  }, [password, checkPassword]);

  const handleActive = () => {
    setMessage("");
    setActive(!active);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSame) return;
    console.log("Changing password for userId:", userId);

    try {
      const result = await handleChangePassword(userId, password);
      if (result.success) {
        setMessage("Password changed successfully");
        setPassword("");
        setCheckPassword("");
        setActive(false);
      } else {
        setMessage(result.message || "Failed to change password");
      }
    } catch (err) {
      setMessage("An error occurred while changing the password");
      console.error(err);
    }
  };
  return (
    <div>
      <div className="profile-item">
        <img src={keyIcon} alt="key icon" width="24" />
        <button className="primary-button" onClick={handleActive}>
          {active ? "Close" : "Change Password"}
        </button>
      </div>

      <form
        className={active ? "new-password-form expanded" : "new-password-form"}
        action=""
        onSubmit={handleSubmit}
      >
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          className={passwordLength ? (isSame ? "valid" : "invalid") : ""}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor=""></label>
        <input
          type="password"
          placeholder="Confirm password"
          value={checkPassword}
          required
          className={passwordLength ? (isSame ? "valid" : "invalid") : ""}
          onChange={(e) => setCheckPassword(e.target.value)}
        />

        <button
          className="primary-button"
          type="submit"
          disabled={!isSame || loading}
        >
          {!isSame ? "Invalid Inputs" : loading ? "Changing..." : "Submit"}
        </button>
      </form>
      {message && <p>{message}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default ChangePassword;
