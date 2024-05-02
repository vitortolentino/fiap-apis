import gRPC from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import { ReflectionService } from '@grpc/reflection';
import userHandlers from './userHandlers.js';

const USER_PROTO_PATH = import.meta.dirname + "/user.proto";

const packageDef = protoLoader.loadSync(USER_PROTO_PATH);
const gRPCObject = gRPC.loadPackageDefinition(packageDef);

const userPackage = gRPCObject.user;

const server = new gRPC.Server();
const reflection = new ReflectionService(userPackage);

reflection.addToServer(server);

server.addService(userPackage.User.service, {
  ...userHandlers
});

server.bindAsync("0.0.0.0:4000", gRPC.ServerCredentials.createInsecure(), () => {
  // server.start();
  console.log("Server started at http://localhost:4000");
});
