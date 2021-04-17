const mapToQueryParams = (params) => {
  if (Object.keys(params).length === 0) {
    return "";
  }

  return `?${Object.entries(params)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join("&")}`;
};

export const createRequest = async ({
  url = "",
  params = {},
  method = "GET",
  body,
}) => {
  const response = await fetch(url + mapToQueryParams(params), {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // TODO response with empty body stumbles on .json() call
  if (method === "DELETE") {
    return response;
  }

  return response.json();
};
