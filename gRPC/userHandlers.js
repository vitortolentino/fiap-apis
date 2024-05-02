import UserRepository from "../database/repositories/UserRepository.js"
import db from '../database/config.js'
import grpc from '@grpc/grpc-js'

await db.connect()

export default {
  createUser: async (call, callback) => {
    const { name } = call.request

    const user = await UserRepository.createUser(name)

    return callback(null, user)
  },

  readUser: async (call, callback) => {
    const { id } = call.request

    const foundUser = await UserRepository.getUserById(id)
    if(!foundUser) {
      return callback({
        code: grpc.status.NOT_FOUND,
        details: 'User not found'
      })
    }

    callback(null, foundUser)
  },

  readUsers: async (call, callback) => {
    const users = await UserRepository.getAllUsers()
    callback(null, { users })
  },

  updateUser: async (call, callback) => {
    const { id, name } = call.request

    const foundUser = await UserRepository.getUserById(id)
    if(!foundUser) {
      return callback({
        code: grpc.status.NOT_FOUND,
        details: 'User not found'
      })
    }

    const updatedUser = await UserRepository.updateUser(id, name)

    callback(null, updatedUser)
  },

  deleteUser: async (call, callback) => {
    const { id } = call.request

    const foundUser = await UserRepository.getUserById(id)
    if(!foundUser) {
      return callback({
        code: grpc.status.NOT_FOUND,
        details: 'User not found'
      })
    }

    await UserRepository.deleteUser(id);

    callback(null, { code: grpc.status.OK })
  }
}
