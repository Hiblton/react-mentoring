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
}) => {
  const response = await fetch(url + mapToQueryParams(params), { method });

  // TODO response with empty body stumbles on .json() call
  if (method === "DELETE") {
    return response;
  }

  return response.json();
};
