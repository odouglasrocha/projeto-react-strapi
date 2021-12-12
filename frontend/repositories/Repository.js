import axios from "axios";
export const baseDomain = "http://templaterocha.com.br/";
export const baseUrlProduct = "http://templaterocha.com.br/";

export const customHeaders = {
    Accept: "application/json",
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join("&");
};
