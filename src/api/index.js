import axios from "axios";

const headers = {
  "Content-Type": "application/json"
};

const customRequest = function(url, method, body) {
  return new Promise(function(resolve, reject) {
    const option = {
      url: `http://localhost:3001/${url}`,
      method,
      headers
    };
    if (method === "GET") {
      option.params = body;
    } else {
      option.data = body;
    }

    axios
      .request(option)
      .then(res => {
        resolve(res.data);
      })
      .catch(() => reject("Canot get"));
  });
};

export const GET = url => customRequest(url, "GET");

export const POST = (url, body) => customRequest(url, "GET", body);

export const DELETE = (url, body) => customRequest(url, "DELETE", body);

export const PUT = (url, body) => customRequest(url, "PUT", body);
