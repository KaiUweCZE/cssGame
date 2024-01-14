import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_GREETING_QUERY = gql`
query GetGreeting{
    greeting
}
`

const Graph = () => {
    const { loading, error, data } = useQuery(GET_GREETING_QUERY)
    
    return(
        <>
        {
            loading ? <p>Loading</p> :
            error ? <p>Error</p> :
            <div>
                <h2>Greeting from GraphQL:</h2>
                <p>{data?.greeting}</p>
            </div>
        }
        </>
    )
}

export default Graph