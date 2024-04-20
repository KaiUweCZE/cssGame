import { gql, useMutation } from "@apollo/client";

const CREATE_MESSAGE = gql`
  mutation CreateMessage($userId: ID!, $text: String!) {
    createMessage(userId: $userId, text: $text) {
      author {
        id
        name
      }
      text
    }
  }
`;

export const useCreateMessage = () => {
  const [
    createMessageMutation,
    { error: messageError, data: messageData, loading: messageLoading },
  ] = useMutation(CREATE_MESSAGE);

  const handleCreateMessage = async (userId, text) => {
    try {
      const { data } = await createMessageMutation({
        variables: {
          userId,
          text,
        },
      });
      return data.createMessage;
    } catch (err) {
      console.error("Error creating message: ", err);
      console.error("Full error details: ", JSON.stringify(err, null, 2));
      throw err;
    }
  };
  return {
    handleCreateMessage,
    messageError,
    messageData,
    messageLoading,
  };
};
