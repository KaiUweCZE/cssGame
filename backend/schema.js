import { 
    GraphQLObjectType, GraphQLID, GraphQLBoolean,
    GraphQLString, GraphQLList, GraphQLSchema,
    GraphQLNonNull } from "graphql";
import { User } from "./User.js";

const UserType = new GraphQLObjectType({
    name:'User',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        level: {type: GraphQLString}
    }
})

const RootQueryType = new GraphQLObjectType({
    name:'Query',
    fields:{
        users:{
            type: new GraphQLList(UserType),
            resolve: (root, args) => {
                return User.find()
            }
        },
        user:{
            type: UserType,
            args:{id:{type: GraphQLID}},
            resolve: (parent, args) => {
                return User.findById(args.id)
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        createUser: {
            type: UserType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                password: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parent, args){
                const user = new User({
                    name: args.name,
                    email: args.email,
                    password: args.password
                })
                return user.save()
            }
        },
        deleteUser: {
            type: UserType,
            args:{id:{type: new GraphQLNonNull(GraphQLID)}},
            resolve(parent, args){
                return User.findByIdAndDelete(args.id)
            }
        },
        loginUser: {
            type: UserType,
            args:{
                name:{type: new GraphQLNonNull(GraphQLString)},
                password:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: async (parent, args)=>{
                const user = await User.findOne({name: args.name, password: args.password})
                if (!user){
                    throw new Error('Invalid credentials')
                }

                return user;
            }
        },
        logoutUser: {
            type:UserType,
            args:{id:{type: new GraphQLNonNull(GraphQLString)}},
            resolve: async(parent, args) => {
                const user = await User.findById(args.id)
                if(!user){
                    throw new Error('Logout failed')
                }

                return user
            }
        }
    }
})

export const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation
})