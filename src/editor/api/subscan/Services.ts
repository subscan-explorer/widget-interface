import { Application } from '@subscan/widget-core';
import { DEFAULT_APP_TEMPLATE } from 'config/constants';
import { useCallback, useEffect, useState } from 'react';
import { ProApiConfig, ProApiConfigItem, UserInfo } from 'types';
import axiosRequest from './AxiosRequest';

const PREFIX = process.env.REACT_APP_SUBSCAN_PRO_API;

export const useFetchAppConfigs = () => {
  const [configs, SetConfigs] = useState<ProApiConfigItem[]>([]);
  const [loading, SetLoading] = useState(false);
  const fetchData = useCallback(async () => {
    SetLoading(true);
    try {
      const { data } = await axiosRequest.get<ProApiConfigItem[]>(`${PREFIX}/open/v2/widgets`);
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

export const useFetchUserInfo = () => {
  const [userInfo, SetUserInfo] = useState<UserInfo>();
  const [loading, SetLoading] = useState(false);
  const fetchData = useCallback(async () => {
    SetLoading(true);
    try {
      const { data } = await axiosRequest.get<UserInfo>(`${PREFIX}/open/v1/user/info`);
      SetUserInfo(data.data);
      SetLoading(false);
    } catch (error) {
      SetLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { refetch: fetchData, data: userInfo, loading };
};

export const useSaveAppConfigs = () => {
  const [loading, SetLoading] = useState(false);

  const fetchData = useCallback(async (data: { name: string; payload: string; networks: number[] }) => {
    SetLoading(true);
    try {
      await axiosRequest.request({
        url: `${PREFIX}/open/v2/widget`,
        method: 'POST',
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
      await axiosRequest.request({
        url: `${PREFIX}/open/v2/widget`,
        method: 'DELETE',
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
  const { data: application } = await axiosRequest.get<ProApiConfigItem>(`${PREFIX}/open/v2/widget?id=${id}`);

  const config = JSON.parse(application?.data?.payload || '{}');
  if (config.kind === 'Application') {
    return { id: application?.data?.id, application: config, name: application?.data?.name };
  }
  return { id: application?.data?.id, application: DEFAULT_APP_TEMPLATE as Application, name: application?.data?.name };
}

export async function saveConfig(body: any) {
  return await axiosRequest.post(`${PREFIX}/open/v2/widget`, body);
}

export async function deleteConfig(body: any) {
  return await axiosRequest.delete(`${PREFIX}/open/v2/widget`, body);
}
