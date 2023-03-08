"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiBase = 'https://api.basistheory.com/tokens/';
class BasisTheoryDataSource {
    async getToken(tokenId, authToken) {
        let readToken = await fetch(`${apiBase}${tokenId}`, {
            headers: {
                "Content-Type": "application/json",
                'BT-API-KEY': authToken
            }
        });
        return await readToken.json();
    }
}
exports.default = BasisTheoryDataSource;
