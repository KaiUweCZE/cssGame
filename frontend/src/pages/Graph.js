import React from "react";
import { useMutation, useQuery, gql } from "@apollo/client";
import { trashIcon } from "../data/ImagesData";

const GET_USERS = gql`
query GetUsers{
    users{
        id,
        name,
        email,
        password
    }
    
}
`

const DELETE_USER = gql`
mutation DeleteUser($id: ID!){
    deleteUser(id: $id){
        id
    }
}
`

const Graph = () => {
    const { loading: queryLoading, error: queryError, data } = useQuery(GET_USERS)
    const [deleteUser, {loading: mutationLoading, error: mutationError }] = useMutation(DELETE_USER, {
        refetchQueries: [ {query: GET_USERS}],
        awaitRefetchQueries: true
    })
    
    const handleDeleteUser = (userId) => {
        deleteUser({ variables: {id: userId}})
    }

    return(
        <>
        {
            queryLoading ? <p>Loading</p> :
            queryError ? <p>Error</p> :
            <div>
                <h2>List of users:</h2>
                <div className="users-list">
                    {
                    data.users.map((user) => {
                        return(
                            <ul key={user.id} className="users-list__item">
                                <li>username: {user.name}</li>
                                <li>email: {user.email}</li>
                                <li>password: {user.password}</li>
                                <button onClick={() => handleDeleteUser(user.id)}> {mutationLoading ? 'Deleting...' : <img src={trashIcon} alt="Delete" />}</button>
                            </ul>
                        )
                    })
                    }
                </div>
                
            </div>
        }
        </>
    )
}

export default Graph