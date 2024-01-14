import React from 'react'
import {ApolloClient, InMemoryCache, HttpLink, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:9000/graphql'}),
    cache: new InMemoryCache(),
})

export const ApolloClientProvider = ({ children }) => {
    return(
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
    )
}