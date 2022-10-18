import { Application } from "@sunmao-ui-fork/core";
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
  id: number;
  application: Application;
}
