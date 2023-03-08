import {DEV_ENV, AWS_LAMBDA, GCP_FUNCTION} from "./constants";

// @ts-ignore
let func_type = process.env.FUNC_TYPE
// @ts-ignore
let ex_env = process.env.EX_ENV

import {ApolloServer as AP, gql as A_GQL} from "apollo-server";
import {ApolloServer as GAP, gql as GA_GQL} from "apollo-server-cloud-functions";
import {ApolloServer as AAP, gql as AA_GQL} from "apollo-server-lambda";
import {ApolloServer as A_ZAP, gql as AZA_GQL} from "apollo-server-azure-functions";

let ApolloServer =
  ex_env === DEV_ENV ? AP :
    func_type === GCP_FUNCTION
      ? GAP
      : func_type === AWS_LAMBDA
        ? AAP
        : A_ZAP
let gql =
  ex_env === DEV_ENV ? A_GQL :
    func_type === GCP_FUNCTION
      ? GA_GQL
      : func_type === AWS_LAMBDA
        ? AA_GQL
        : AZA_GQL

export {ApolloServer, gql}
