import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useCallback } from "react";
import { UserContext } from "@/contexts/UserContext";

const DELETE_USER = gql`
  mutation DeleteUser($userId: ID!, $password: String!) {
    deleteUser(userId: $userId, password: $password) {
      success
      message
      user {
        id
        name
      }
    }
  }
`;

export const useDeleteUser = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const [deleteUserMutation, { loading }] = useMutation(DELETE_USER, {
    onCompleted: (data) => {
      if (data.deleteUser.success) {
        logout(); 
        navigate("/");
      } else {
        setError(data.deleteUser.message);
      }
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const deleteUser = useCallback(async (userId, password) => {
    try {
      const { data } = await deleteUserMutation({
        variables: {
          userId,
          password,
        },
      });

      if (!data.deleteUser.success) {
        throw new Error(data.deleteUser.message);
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message || "An unexpected error occurred",
      };
    }
  }, [deleteUserMutation]);

  return {
    deleteUser,
    loading,
    error,
  };
};