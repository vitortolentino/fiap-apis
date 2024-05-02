import AddressRepository from '../database/repositories/AddressRepository.js'
import userRepository from '../database/repositories/UserRepository.js'

const resolvers = {
  Query: {
    getUsers: async () => {
      return await userRepository.getAllUsers()
    },
    getUserById: async (_, { id }) => {
      return await userRepository.getUserById(id)
    },
  },
  User: {
    addresses: async (parent) => {
      try {
        const addresses = await AddressRepository.getByUserId(parent.id)
        return addresses
      } catch (error) {
        console.log(error)
        return []
      }
    }
  },
  Address: {
    user: async (parent) => {
      return userRepository.getUserById(parent.user_id)
    }
  },
  Mutation: {
    createUser: async (_, { name }) => {
      return await userRepository.createUser(name)
    },
    updateUser: async (_, { id, name }) => {
      return await userRepository.updateUser(id, name)
    },
    deleteUser: async (_, { id }) => {
      await userRepository.deleteUser(id)
      return id
    },
    createAddress: async (_, { input }) => {
      const { street, city,state, postal_code, user_id } = input
      console.log({ street, city,state, postal_code, user_id }, input)
      return AddressRepository.create({ street, city,state, postal_code, user_id })
    },
  }
}

export default resolvers
