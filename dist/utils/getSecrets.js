"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dopplerSecrets = void 0;
require("isomorphic-fetch");
async function dopplerSecrets() {
    // @ts-ignore
    let project = process.env.DOPPLER_PROJECT || DOPPLER_PROJECT;
    // @ts-ignore
    let config = process.env.DOPPLER_CONFIG || DOPPLER_CONFIG;
    // @ts-ignore
    let token = process.env.DOPPLER_BASE64_TOKEN || DOPPLER_BASE64_TOKEN;
    const url = 'https://api.doppler.com/v3/configs/config/secrets?project=' + project + "&config=" + config;
    const response = await fetch(url, {
        'method': 'GET',
        headers: {
            'Authorization': 'Basic ' + token
        }
    });
    const res = await response.json();
    // @ts-ignore
    return res.secrets;
}
exports.dopplerSecrets = dopplerSecrets;
