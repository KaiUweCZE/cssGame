import { gql, useMutation } from "@apollo/client";

const CREATE_MESSAGE = gql`
  mutation CreateMessage(
    $userId: ID!
    $text: String!
    $subject: String
    $images: [String]
  ) {
    createMessage(
      userId: $userId
      text: $text
      subject: $subject
      images: $images
    ) {
      id
      author {
        id
        name
      }
      subject
      images
      text
    }
  }
`;

export const useCreateMessage = () => {
  const [
    createMessageMutation,
    { error: messageError, data: messageData, loading: messageLoading },
  ] = useMutation(CREATE_MESSAGE);

  const handleCreateMessage = async (userId, text, subject, images) => {
    try {
      const { data } = await createMessageMutation({
        variables: {
          userId,
          text,
          subject,
          images,
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
