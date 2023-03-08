// we import a function that we wrote to create a new instance of Apollo Server
import {createTestApolloServer} from '../index';

// we will use supertest to test our server
import request from "supertest";

// this is the query we use for our test
const queryData = {
    query: `query {
  WorkerIPA(ip: "my-ip") {
    status
  }
}`,
    variables: {ip: 'test-ip'},
};

describe('e2e test', () => {
    let server, url;

    // before the tests we will spin up a new Apollo Server
    beforeAll(async () => {
        // Note we must wrap our object destructuring in parentheses because we already declared these variables
        // We pass in the port as 0 to let the server pick its own ephemeral port for testing
        ({server, url} = await createTestApolloServer({port: 0}));
    });

    // after the tests we will stop our server
    afterAll(async () => {
        await server?.close();
    });

    it('test IP API', async () => {
        // send our request to the url of the test server
        const response = await request(url).post('/').send(queryData);
        expect(response.errors).toBeUndefined();
        console.log(response.body.data)
        expect(response.body.data?.WorkerIPA?.status).toBe('Success');
    });
});
