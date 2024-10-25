import { gql, useMutation } from "@apollo/client";

const DELETE_LEVEL = gql`
  mutation DeleteLevel($levelId: ID!, $levelName: String!) {
    deleteLevel(levelId: $levelId, levelName: $levelName) {
      id
      name
    }
  }
`;

const useDeleteLevel = (options = {}) => {
  const [deleteLevel, { error, data, loading }] = useMutation(DELETE_LEVEL, {
    ...options,

    /* context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    },*/
  });

  const handleDeleteLevel = async (levelId, levelName) => {
    try {
      const result = await deleteLevel({
        variables: { levelId, levelName },

        update: (cache) => {
          cache.modify({
            fields: {
              levels: (existingLevels = [], { readField }) => {
                return existingLevels.filter(
                  (levelRef) => readField("id", levelRef) !== levelId
                );
              },
            },
          });
        },
      });

      return result;
    } catch (err) {
      console.error("Error deleting level:", err);
      throw err;
    }
  };

  return {
    deleteLevel: handleDeleteLevel,
    loading,
    error,
    data,
  };
};

export default useDeleteLevel;
