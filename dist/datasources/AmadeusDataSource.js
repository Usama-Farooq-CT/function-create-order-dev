"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasisTheoryApiService_1 = __importDefault(require("./BasisTheoryApiService"));
require("isomorphic-fetch");
const baseUrl = "https://test.travel.api.amadeus.com";
const fs = require("fs");
class AmadeusDataSource {
    async createFlightOrder(amadeusClientId, amadeusSecret, data, basisTheoryToken, parameters) {
        let tokenService = new BasisTheoryApiService_1.default();
        console.log("Data received params", JSON.stringify(parameters));
        let token = await this.getToken(amadeusClientId, amadeusSecret);
        let newData = await tokenService.getToken(data.data.tokenId, basisTheoryToken);
        // @ts-ignore
        const { contacts, travelers } = newData.data;
        const myBody = {
            data: {
                contacts: contacts,
                flightOffers: data.data.flightOffers,
                remarks: {
                    general: [
                        {
                            subType: "GENERAL_MISCELLANEOUS",
                            text: "ONLINE BOOKING FROM INCREIBLE VIAJES",
                        },
                    ],
                },
                ticketingAgreement: {
                    option: "DELAY_TO_CANCEL",
                    delay: "6D",
                },
                travelers: travelers,
                type: "flight-order",
            },
        };
        // fs.writeFileSync("oldbody.json", JSON.stringify(data))
        // fs.writeFileSync("newbody.json", JSON.stringify(myBody))
        // console.log("myBody", myBody)
        let resp = await fetch(baseUrl + "/v1/booking/flight-orders", {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
                "ama-client-ref": parameters.clientRef,
            },
            method: "POST",
            body: JSON.stringify(myBody),
        });
        console.log("response code: " + resp.status);
        let response = await resp.json();
        console.log("response: " + JSON.stringify(response));
        if (resp.ok) {
            // @ts-ignore
            response.dictionaries = JSON.stringify(response.dictionaries);
            return {
                status: "Success",
                msg: "Success",
                response: response,
            };
        }
        else {
            return {
                status: "Failure, code: " + resp.status,
                msg: JSON.stringify(response),
                response: null,
            };
        }
    }
    async getToken(apiKey, apiSecret) {
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials");
        params.append("client_id", apiKey);
        params.append("client_secret", apiSecret);
        let tokenResponse = await fetch(baseUrl + "/v1/security/oauth2/token", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params,
        }).then((response) => {
            return response.json();
        });
        // @ts-ignore
        return tokenResponse.access_token;
    }
}
exports.default = AmadeusDataSource;
