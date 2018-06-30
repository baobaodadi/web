import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
import formData from 'form-urlencoded';

function handleResponseLogin(promise, url, method) {
  return promise
    .then(res => res.json())
    .then(data => {
      // if (code === 0) {
        return data;
      // }
      // throw Object({code, message, url, method});
    });


}

function handleResponse(promise, url, method) {
  return promise
    .then(res => res.json())
    .then(({code, data, message}) => {
      if (code === 0) {
        return data;
      }
      throw Object({code, message, url, method});
    });
}

export default {
  getLogin(api, params) {
    return handleResponseLogin(
      //
      fetch(api, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'Basic '+btoa(`${params.token}:${params.token}`),
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
      }),
      api,
      'get'
    );
  },

  postLogin(api, params) {
    return handleResponseLogin(
      //
      fetch(api, {
        method: 'POST',
        headers: new Headers({
          'Authorization': 'Basic '+btoa(`${params.username}:${params.password}`),
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
      }),
      api,
      'post'
    );
  },

  get(api, params) {
    const url = params
      ? `${api}?${queryString.stringify(params)}`
      : api;

    return handleResponse(
      fetch(url, {
        credentials: 'include'
      }),
      url,
      'get'
    );
  },

  post(api, params) {
    return handleResponse(
      fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData(params),
      }),
      api,
      'post'
    );
  },

};
