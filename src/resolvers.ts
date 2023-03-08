import { Resolvers } from "./@types/schema.generated";
import { dopplerSecrets } from "./utils/getSecrets";
import AmadeusDataSource from "./datasources/AmadeusDataSource";
import * as fs from "fs";
import * as path from "path";

class AmadeusFlightsService {
  async createFlightOrder(data: any) {
    let source = new AmadeusDataSource();
    if (process.env.NODE_ENV !== "test") {
      const secrets = await dopplerSecrets();
      let amadeusApiKey = secrets.AMADEUS_API_KEY.raw;
      let amadeusApiSecret = secrets.AMADEUS_API_SECRET.raw;
      let BASIS_THEORY_TOKEN = secrets.BASIS_THEORY_TOKEN.raw;
      // @ts-ignore
      return await source.createFlightOrder(
        amadeusApiKey,
        amadeusApiSecret,
        data.request,
        BASIS_THEORY_TOKEN,
        data.parameters
      );
    } else {
      let sampleRes = fs
        .readFileSync(path.resolve(__dirname, "__tests__/sampleResponse.json"))
        .toString("utf-8");
      return {
        status: "Success",
        msg: "OK",
        IPA: JSON.parse(sampleRes),
      };
    }
  }
}

const amadeusFlightsService = new AmadeusFlightsService();

export const resolvers: Resolvers<{}> = {
  Query: {
    // @ts-ignore
    createFlightOrder: async (root, data: any) => {
      return await amadeusFlightsService.createFlightOrder(data);
    },
  },
};
