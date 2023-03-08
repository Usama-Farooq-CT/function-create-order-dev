"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// we import a function that we wrote to create a new instance of Apollo Server
const index_1 = require("../index");
// we will use supertest to test our server
const supertest_1 = __importDefault(require("supertest"));
// this is the query we use for our test
const queryData = {
    query: `query {
  WorkerIPA(ip: "my-ip") {
    status
  }
}`,
    variables: { ip: 'test-ip' },
};
describe('e2e test', () => {
    let server, url;
    // before the tests we will spin up a new Apollo Server
    beforeAll(async () => {
        // Note we must wrap our object destructuring in parentheses because we already declared these variables
        // We pass in the port as 0 to let the server pick its own ephemeral port for testing
        ({ server, url } = await (0, index_1.createTestApolloServer)({ port: 0 }));
    });
    // after the tests we will stop our server
    afterAll(async () => {
        await server?.close();
    });
    it('test IP API', async () => {
        // send our request to the url of the test server
        const response = await (0, supertest_1.default)(url).post('/').send(queryData);
        expect(response.errors).toBeUndefined();
        console.log(response.body.data);
        expect(response.body.data?.WorkerIPA?.status).toBe('Success');
    });
});
