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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const getSecrets_1 = require("./utils/getSecrets");
const AmadeusDataSource_1 = __importDefault(require("./datasources/AmadeusDataSource"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class AmadeusFlightsService {
    async createFlightOrder(data) {
        let source = new AmadeusDataSource_1.default();
        if (process.env.NODE_ENV !== "test") {
            const secrets = await (0, getSecrets_1.dopplerSecrets)();
            let amadeusApiKey = secrets.AMADEUS_API_KEY.raw;
            let amadeusApiSecret = secrets.AMADEUS_API_SECRET.raw;
            let BASIS_THEORY_TOKEN = secrets.BASIS_THEORY_TOKEN.raw;
            // @ts-ignore
            return await source.createFlightOrder(amadeusApiKey, amadeusApiSecret, data.request, BASIS_THEORY_TOKEN, data.parameters);
        }
        else {
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
exports.resolvers = {
    Query: {
        // @ts-ignore
        createFlightOrder: async (root, data) => {
            return await amadeusFlightsService.createFlightOrder(data);
        },
    },
};
