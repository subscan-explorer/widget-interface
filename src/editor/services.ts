import { Application } from "@sunmao-ui-fork/core";
import { DEFAULT_APP_TEMPLATE } from "config/constants";
import { useCallback, useEffect, useState } from "react";
import { ProApiConfig, ProApiConfigItem } from "types";
import service from "./api";

const PREFIX = process.env.REACT_APP_SUBSCAN_PRO_API;

export const useFetchAppConfigs = () => {
  const [configs, SetConfigs] = useState<ProApiConfigItem[]>([]);
  const [loading, SetLoading] = useState(false);
  const fetchData = useCallback(async () => {
    SetLoading(true);
    try {
      const { data } = await service.get<ProApiConfigItem[]>(`${PREFIX}/open/v2/low-code/configs`);
      console.log(data);
      SetConfigs(data.data);
      SetLoading(false);
    } catch (error) {
      SetLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { refetch: fetchData, data: configs, loading };
};

export const useSaveAppConfigs = () => {
  const [loading, SetLoading] = useState(false);

  const fetchData = useCallback(async (data: { name: string; payload: string }) => {
    SetLoading(true);
    try {
      await service.request({
        url: `${PREFIX}/open/v2/low-code/config`,
        method: "POST",
        headers: {},
        data,
      });
      SetLoading(false);
    } catch (error) {
      SetLoading(false);
    }
  }, []);

  return { action: fetchData, loading };
};

export const useDeleteAppConfigs = () => {
  const [loading, SetLoading] = useState(false);

  const fetchData = useCallback(async (data: number[]) => {
    SetLoading(true);
    try {
      await service.request({
        url: `${PREFIX}/open/v2/low-code/config`,
        method: "DELETE",
        headers: {},
        data,
      });
      SetLoading(false);
    } catch (error) {
      SetLoading(false);
    }
  }, []);

  return { action: fetchData, loading };
};

export async function fetchConfigById(id: string): Promise<ProApiConfig> {
  const { data: application } = await service.get<ProApiConfigItem>(`${PREFIX}/open/v2/low-code/config?id=${id}`);

  const config = JSON.parse(application?.data?.payload || "{}");
  if (config.kind === "Application") {
    return { id: application?.data?.id, application: config, name: application?.data?.name };
  }
  return { id: application?.data?.id, application: DEFAULT_APP_TEMPLATE as Application, name: application?.data?.name };
}

export async function saveConfig(body: any) {
  return await service.post(`${PREFIX}/open/v2/low-code/config`, body);
}

export async function deleteConfig(body: any) {
  return await service.delete(`${PREFIX}/open/v2/low-code/config`, body);
}
