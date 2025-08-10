"use strict";

class URLParser {
    url = null;

    constructor(url) {
        this.url = url;
    }
    //We find the protocol
    get protocol() {
        let protocolEnd = this.url.indexOf("://");
        if (protocolEnd !== -1) {
            let result = this.url.slice(0, protocolEnd);
            return result;
        } else {
            return "";
        }
    }

    // Finding the domain name of the web host

    get hostname() {
        let start = this.url.indexOf("://") +3
        if (start <3){
         start = 0;
        }
        let end = this.url.indexOf("/", start );
        if (end === -1){
            end = this.url.length;
        }
        let host = this.url.slice(start, end);
        let colon = host.indexOf(":");
        if (colon !== -1){
            host = host.slice(0, colon);
        }
        return host;
    }

    //Finding the path of the current page

    get path() {
        let start = this.url.indexOf(this.hostname) + this.hostname.length;
        let queryStart = this.url.indexOf("?", start);
        if (queryStart !== -1){
            let path = this.url.slice(start, queryStart);
            return path || "/";
        } else {
            let path = this.url.slice(start);
            return path || "/";
        }
    }

    // Finding the object with query-parameters
    get queryParams() {
        const queryIndex = this.url.indexOf("?");
        if (queryIndex === -1) return {};

        const queryString = this.url.slice(queryIndex + 1);
        const pairs = queryString.split("&");

        const params = {};
        for (let pair of pairs) {
            const [key, value] = pair.split("=");
            params[decodeURIComponent(key)] = decodeURIComponent(value || "");
        }
        return params;
    }

}
const parser = new URLParser("https://example.com/products/item?search=book&page=2");

console.log(parser.protocol);
console.log(parser.hostname);
console.log(parser.path);
console.log(parser.queryParams);
