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
  agentAvailableText?: string;
  agentUnavailableText?: string;
  showAgentAvailability?: boolean;
  requireEmailUpfront?: boolean;
  scrollEnabled?: boolean;
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
  agentAvailableText,
  agentUnavailableText,
  showAgentAvailability,
  scrollEnabled = true,
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
    agentAvailableText,
    agentUnavailableText,
    requireEmailUpfront: requireEmailUpfront ? 1 : 0,
    showAgentAvailability: showAgentAvailability ? 1 : 0,
    mobile: 1,
    // TODO: figure out the best way to handle identifying customers
    customer: JSON.stringify(customer),
    metadata: JSON.stringify(customer),
  };

  const iframeUrl = 'https://chat-widget.papercups.io';
  const query = qs.stringify(config, {
    skipEmptyString: true,
    skipNull: true,
  });
  const uri = `${iframeUrl}?${query}`;

  return <WebView source={{uri}} scrollEnabled={scrollEnabled} />;
}
