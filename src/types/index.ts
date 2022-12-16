import { Application } from "@subscan/widget-core";
import React from "react";

export interface BareProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface BaseApiWrapper<T> {
  code: number;
  data: T;
  message: string;
}

export interface ProApiConfigItem {
  id: number;
  created_at: number;
  updated_at: number;
  user_id: number;
  name: string;
  payload?: string;
}

export interface ProApiConfig {
  name: string;
  id: number | string;
  application: Application;
}

export interface UserNetwork {
  id: string;
  name: string;
  role: string;
}

export interface UserOrganization {
  name: string;
  id: number;
  networks: UserNetwork[];
}
export interface UserInfo {
  id: number;
  public_key: string;
  email: string;
  organizations: UserOrganization[];
}
