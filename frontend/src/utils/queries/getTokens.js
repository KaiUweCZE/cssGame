import { gql, useQuery } from "@apollo/client";

export const GET_ALL_TOKENS = gql`
  query getAllTokens {
    getAllTokens {
      id
      userId
      token
      createdAt
    }
  }
`;

export const useAllTokens = () => {
  const { data, error, loading } = useQuery(GET_ALL_TOKENS);

  const tokens =
    data?.getAllTokens?.map((token) => ({
      ...token,
      createdAt: new Date(parseInt(token.createdAt).toLocaleString()),
    })) ?? [];

  const tokenValues = data?.getAllTokens?.map((token) => token.token) ?? [];

  return { tokens, tokenValues, error, loading };
};
