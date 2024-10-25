import { gql, useMutation } from "@apollo/client";

const EDIT_DESCRIPTION = gql`
  mutation EditDescription(
    $levelId: ID!
    $userName: String!
    $newDescription: String!
  ) {
    editDescription(
      levelId: $levelId
      userName: $userName
      newDescription: $newDescription
    ) {
      id
      description
    }
  }
`;

const useEditDescription = () => {
  const [editDescription, { data, error, loading }] =
    useMutation(EDIT_DESCRIPTION);

  const handleEditDescription = async (levelId, userName, newDescription) => {
    try {
      const response = await editDescription({
        variables: {
          levelId,
          userName,
          newDescription,
        },
      });
      return response.data.editDescription;
    } catch (err) {
      console.error("Error editing description:", err);
      throw err;
    }
  };

  return {
    editDescription: handleEditDescription,
    data,
    error,
    loading,
  };
};

export default useEditDescription;
