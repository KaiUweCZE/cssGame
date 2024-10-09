import { useCreateToken } from "@/utils/queries/createVerificationToken";
import { useSendEmail } from "@/utils/queries/sendEmail";
import React, { useState } from "react";
import editIcon from "@/assets/images/icons/edit.png";
import { useAddEmail } from "@/utils/queries/useAddEmail";

const CreateEmail = ({ icon, userId }) => {
  const [email, setEmail] = useState("");
  const { handleSendEmail } = useSendEmail();
  const { createToken } = useCreateToken();
  const { addEmail } = useAddEmail();

  const handleSubmit = async () => {
    const response = await createToken(userId);
    if (response) {
      const token = response.token.token;
      const result = await handleSendEmail(email, token);
      const resultAdd = await addEmail(userId, email);

      console.log("result of this function: ", token, result);
      console.log("email send: ", resultAdd);
    }
  };
  return (
    <div className="profile-item">
      <img src={icon} alt="" />
      <div className="profile-item-info">
        <span>Email</span>
        <div className="flex">
          <input
            type="email"
            placeholder="add email?"
            name=""
            id=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <img
            src={editIcon}
            alt="edit icon"
            width="24"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEmail;
