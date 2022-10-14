import { useCallback, useEffect, useState } from "react";
import { BaseApiWrapper, ProApiConfig, ProApiConfigItem } from "types";
import useFetch, { CachePolicies } from "use-http";

const fetchHeaders = (withContentType = true) => {
  const headers: Record<string, string> = {
    // TODO
    authorization: "",
  };
  if (withContentType) headers["content-type"] = "application/json";
  return headers;
};

const PREFIX = process.env.REACT_APP_SUBSCAN_PRO_API;

export const useFetchAppConfigs = () => {
  const { get, response, loading, error } = useFetch<BaseApiWrapper<ProApiConfigItem[]>>(PREFIX, {
    headers: fetchHeaders(false),
    cachePolicy: CachePolicies.NO_CACHE,
  });
  const [configs, SetConfigs] = useState<ProApiConfigItem[]>([]);

  const fetchData = useCallback(
    async function fetch() {
      const data = await get("/open/v2/low-code/configs");
      if (response.ok) SetConfigs(data.data);
    },
    [get, response.ok]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData, get, response.ok]);

  return { refetch: fetchData, data: configs, response, loading, error };
};

export const useSaveAppConfigs = () => {
  const { post, del, response, loading, error } = useFetch<BaseApiWrapper<ProApiConfigItem[]>>(
    `${PREFIX}/open/v2/low-code/config`,
    {
      headers: fetchHeaders(false),
      cachePolicy: CachePolicies.NO_CACHE,
    }
  );

  return { post, del, response, loading, error };
};

export const useDeleteAppConfigs = () => {
  const { del, response, loading, error } = useFetch<BaseApiWrapper<ProApiConfigItem[]>>(
    `${PREFIX}/open/v2/low-code/config`,
    {
      headers: fetchHeaders(),
      cachePolicy: CachePolicies.NO_CACHE,
    }
  );

  return { del, response, loading, error };
};

export async function fetchConfigById(id: string): Promise<ProApiConfig> {
  const application = await (
    await fetch(`${PREFIX}/open/v2/low-code/config?id=${id}`, { headers: fetchHeaders() })
  ).json();

  const config = JSON.parse(application?.data?.payload || "{}");
  if (config.kind === "Application") {
    return { id: application?.data?.id, application: config, name: application?.data?.name };
  }

  throw new Error("failed to load schema");
}

export async function saveConfig(body: string) {
  await (await fetch(`${PREFIX}/open/v2/low-code/config`, { headers: fetchHeaders(), method: "post", body })).json();
}

export async function deleteConfig(body: string) {
  await (await fetch(`${PREFIX}/open/v2/low-code/config`, { headers: fetchHeaders(), method: "delete", body })).json();
}
