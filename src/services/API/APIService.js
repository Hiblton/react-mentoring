const mapToQueryParams = (params) => {
  if (Object.keys(params).length === 0) {
    return '';
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

  return await response.json();
};

export const createDeleteRequest = async ({
  url
}) => {
  await fetch(url, { method: "DELETE"})
}
