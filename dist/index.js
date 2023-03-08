"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTestApolloServer = void 0;
const constants_1 = require("./constants");
const apolloProvider_1 = require("./apolloProvider");
const resolvers_1 = require("./resolvers");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
let gqlString = fs.readFileSync(path.resolve(__dirname, './schema.graphql')).toString('utf-8');
const typeDefs = (0, apolloProvider_1.gql) `${gqlString}`;
// const server = new ApolloServer({
//     schema: buildSubgraphSchema([{
//         typeDefs,
//         resolvers,
//     }]),
// });
const server = new apolloProvider_1.ApolloServer({ typeDefs, resolvers: resolvers_1.resolvers });
let gqlHandler = null;
console.log("creating handler for env: " + process.env.EX_ENV);
console.log("creating handler for func type: " + process.env.FUNC_TYPE);
if (process.env.EX_ENV !== constants_1.DEV_ENV) {
    // @ts-ignore
    gqlHandler = server.createHandler();
}
else {
    if (process.env.NODE_ENV !== "test") {
        // @ts-ignore
        server.listen(4000).then(({ url }) => {
            console.log(`🚀 Gateway ready at ${url}`);
            // @ts-ignore
        }).catch(err => {
            console.error(err);
        });
    }
}
const createTestApolloServer = async (options = { port: 4000 }) => {
    // @ts-ignore
    const serverInfo = await server.listen(options);
    console.log(`🚀 Query endpoint ready at http://localhost:${options.port}${server.graphqlPath}`);
    // serverInfo is an object containing the server instance and the url the server is listening on
    return serverInfo;
};
exports.createTestApolloServer = createTestApolloServer;
exports.index = gqlHandler;
