import Config from '../config/index';

export interface RequestOptions {
  config: { apiUrl: string };
  fetchFunc: typeof window.fetch;
}

class ResponseError extends Error {
  public response?: Response;
  public body: any;
}

export const corsFetchOptions: {
  mode: RequestMode;
} = {
  mode: 'cors',
};

export const acceptJsonHeaders = {
  Accept: 'application/json'
};

export const contentTypeJsonHeaders = {
  'Content-Type': 'application/json; charset=utf-8'
};

export const contentTypeFormUrlEncodedHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

const checkStatus = async (response: Response) => {
  if (!response.ok) {
    const error = new ResponseError(
      `${response.status} ${response.statusText}`
    );
    error.response = response;
    // Try to parse the response body as JSON.
    let body;
    try {
      body = await response.json();
    } catch (e) {
      // parsing the error response to json failed
      // Reject the new promise
      throw error;
    }
    // parsing the error response was succuess
    // Add body property to error
    error.body = body;
    // Reject the new promise
    throw error;
  }
  return response;
};

const parseJson = <T>(response: Response): T | Promise<T> =>
  response.status === 204 ? ({} as T) : response.json();

export const get = async <T>(url: string, options?: RequestOptions) => {
  const mergedOptions: RequestOptions = {
    config: Config,
    fetchFunc: fetch,
    ...options
  };
  const { config, fetchFunc } = mergedOptions;

  const headers = {
    ...acceptJsonHeaders
  };

  const fetchOptions = {
    ...corsFetchOptions,
    method: 'GET',
    headers
  };
  const finalUrl = `${config.apiUrl}${url}`;

  const response = await fetchFunc(finalUrl, fetchOptions);
  const checkedResponse = await checkStatus(response);
  return parseJson<T>(checkedResponse);
};

const requestWithBody = async <T>(
  method: string,
  url: string,
  data: any,
  options?: RequestOptions
) => {
  const mergedOptions: RequestOptions = {
    config: Config,
    fetchFunc: fetch,
    ...options
  };
  const { config, fetchFunc } = mergedOptions;

  // process different data types
  let body: string;
  let headers: { [key: string]: string };
  if (typeof data === 'string') {
    headers = {
      ...acceptJsonHeaders,
      ...contentTypeFormUrlEncodedHeaders
    };
    body = data;
  } else {
    headers = {
      ...acceptJsonHeaders,
      ...contentTypeJsonHeaders
    };
    body = JSON.stringify(data);
  }

  const fetchOptions = {
    ...corsFetchOptions,
    method,
    headers,
    body
  };

  const finalUrl = `${config.apiUrl}${url}`;

  // this is the browser actually doing the fetch
  const response = await fetchFunc(finalUrl, fetchOptions);
  const checkedResponse = await checkStatus(response);
  return parseJson<T>(checkedResponse);
};

export const post = <T>(url: string, data: any, options?: RequestOptions) =>
  requestWithBody<T>('POST', url, data, options);

export const put = <T>(url: string, data: any, options?: RequestOptions) =>
  requestWithBody<T>('PUT', url, data, options);

export const patch = <T>(url: string, data: any, options?: RequestOptions) =>
  requestWithBody<T>('PATCH', url, data, options);

/**
 * Makes a DELETE request. Is called destroy because delete is a JavaScript keyword.
 */
export const destroy = <T>(url: string, data?: any, options?: RequestOptions) =>
  requestWithBody<T>('DELETE', url, data, options);
