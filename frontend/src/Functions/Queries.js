import {gql, useMutation} from '@apollo/client'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'


const LEVEL_UP = gql`
    mutation IncreaseLevel($id: ID!, $level: Int!){
        increaseLevel(id: $id, level: $level){
            id,
            level
        }
    }
`

const useLevelUp = () => {
    const [increaseLevelMutation, { error, loading}] = useMutation(LEVEL_UP)
    const {user, setUser} = useContext(UserContext)

    const levelUp = async (userId, newLevel) => {
        try {
            const response = await increaseLevelMutation({
                variables: { id: userId, level: newLevel}
            })
            if(response){
                const updatedUser = {
                    ...user,
                    level: response.data.increaseLevel.level
                };

                setUser(updatedUser)
                localStorage.setItem('user', JSON.stringify(updatedUser));
            }
        } catch (error) {
            onsole.error('Error in levelUp mutation:', err);
        }
    }

    return{
        levelUp,
        error,
        loading
    }
}

export default useLevelUp