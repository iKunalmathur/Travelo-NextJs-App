import axios from "axios";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function getRequest(path) {
  const requestUrl = getStrapiURL(path);

  let config = {
    method: "GET",
    url: requestUrl,
    header: {
      "Content-Type": "application/json",
    },
  };

  const result = await axios(config)
    .then(function (response) {
      // status code in range of 2xx drops here
      return response.data;
    })
    .catch(function (error) {
      // error drops here
      return error.response;
    });

  return result;
}

export async function postRequest(path, data) {
  const requestUrl = getStrapiURL(path);

  let config = {
    method: "POST",
    url: requestUrl,
    header: {
      "Content-Type": "application/json",
    },
    data,
  };

  return await axios(config)
    .then(function (response) {
      // status code in range of 2xx drops here
      return response.data;
    })
    .catch(function (error) {
      // error drops here
      return error.response;
    });
}
