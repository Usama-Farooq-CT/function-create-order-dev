import {DEV_ENV} from "./constants";

import {ApolloServer, gql} from "./apolloProvider";

import {resolvers} from './resolvers';
import * as fs from 'fs';
import * as path from 'path';

let gqlString = fs.readFileSync(path.resolve(__dirname, './schema.graphql')).toString('utf-8')
const typeDefs = gql`${gqlString}`
// const server = new ApolloServer({
//     schema: buildSubgraphSchema([{
//         typeDefs,
//         resolvers,
//     }]),
// });
const server = new ApolloServer({ typeDefs, resolvers});

let gqlHandler = null;

console.log("creating handler for env: " + process.env.EX_ENV)
console.log("creating handler for func type: " + process.env.FUNC_TYPE)

if (process.env.EX_ENV !== DEV_ENV) {
    // @ts-ignore
    gqlHandler = server.createHandler();
} else {
    if (process.env.NODE_ENV !== "test") {
        // @ts-ignore
        server.listen(4000).then(({url}) => {
            console.log(`🚀 Gateway ready at ${url}`);
            // @ts-ignore
        }).catch(err => {
            console.error(err)
        });
    }
}

export const createTestApolloServer = async (options = { port: 4000 }) => {
    // @ts-ignore
    const serverInfo = await server.listen(options);
    console.log(
        `🚀 Query endpoint ready at http://localhost:${options.port}${server.graphqlPath}`,
    );
    // serverInfo is an object containing the server instance and the url the server is listening on
    return serverInfo;
};

exports.index = gqlHandler