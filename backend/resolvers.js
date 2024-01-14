export const resolvers = {
    Query: {
        users: () => {
            return[{
                id: 'test id',
                name: "The name",
                date: "2024-01-14",
                email: "The email",
            },]
        }
    },

    User: {
        date: (user) => toIsoDate(user.createAt),
    }
};


const toIsoDate = (value) => value.slice(0, 'yyyy-mm-dd'.length) 