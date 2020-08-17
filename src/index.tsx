import React from 'react';
import {WebView} from 'react-native-webview';
import qs from 'query-string';

type CustomerMetadata = {
  name?: string;
  email?: string;
  external_id?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  primaryColor?: string;
  accountId: string;
  baseUrl?: string;
  greeting?: string;
  customer?: CustomerMetadata | null;
  newMessagePlaceholder?: string;
  requireEmailUpfront?: boolean;
};

export default function ChatWidget({
  title,
  subtitle,
  primaryColor,
  accountId,
  baseUrl,
  greeting,
  newMessagePlaceholder,
  requireEmailUpfront,
  customer = {} as CustomerMetadata,
}: Props) {
  const config = {
    title,
    subtitle,
    primaryColor,
    accountId,
    baseUrl,
    greeting,
    newMessagePlaceholder,
    requireEmailUpfront: requireEmailUpfront ? 1 : 0,
    mobile: 1,
    // TODO: figure out the best way to handle identifying customers
    customer: JSON.stringify(customer),
  };
  const iframeUrl =
    'https://chat-window-git-add-viewport-meta.papercups.vercel.app';
  const query = qs.stringify(config, {
    skipEmptyString: true,
    skipNull: true,
  });
  const uri = `${iframeUrl}?${query}`;

  return <WebView source={{uri}} />;
}
