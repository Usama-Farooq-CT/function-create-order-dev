"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gql = exports.ApolloServer = void 0;
const constants_1 = require("./constants");
// @ts-ignore
let func_type = process.env.FUNC_TYPE;
// @ts-ignore
let ex_env = process.env.EX_ENV;
const apollo_server_1 = require("apollo-server");
const apollo_server_cloud_functions_1 = require("apollo-server-cloud-functions");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const apollo_server_azure_functions_1 = require("apollo-server-azure-functions");
let ApolloServer = ex_env === constants_1.DEV_ENV ? apollo_server_1.ApolloServer :
    func_type === constants_1.GCP_FUNCTION
        ? apollo_server_cloud_functions_1.ApolloServer
        : func_type === constants_1.AWS_LAMBDA
            ? apollo_server_lambda_1.ApolloServer
            : apollo_server_azure_functions_1.ApolloServer;
exports.ApolloServer = ApolloServer;
let gql = ex_env === constants_1.DEV_ENV ? apollo_server_1.gql :
    func_type === constants_1.GCP_FUNCTION
        ? apollo_server_cloud_functions_1.gql
        : func_type === constants_1.AWS_LAMBDA
            ? apollo_server_lambda_1.gql
            : apollo_server_azure_functions_1.gql;
exports.gql = gql;
