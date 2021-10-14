import React from 'react';
import {WebView} from 'react-native-webview';
import qs from 'query-string';

type CustomerMetadata = {
  name?: string;
  email?: string;
  external_id?: string;
};

type Props = {
  token: string;
  inbox?: string;
  // TODO: deprecate, use `token` instead
  accountId?: string;
  title?: string;
  subtitle?: string;
  primaryColor?: string;
  baseUrl?: string;
  greeting?: string;
  awayMessage?: string;
  customer?: CustomerMetadata | null;
  newMessagePlaceholder?: string;
  emailInputPlaceholder?: string;
  agentAvailableText?: string;
  agentUnavailableText?: string;
  showAgentAvailability?: boolean;
  iframeUrlOverride?: string;
  requireEmailUpfront?: boolean;
  scrollEnabled?: boolean;
  debug?: boolean;
};

export default function ChatWidget({
  token,
  inbox,
  accountId,
  title,
  subtitle,
  primaryColor,
  baseUrl,
  greeting,
  awayMessage,
  newMessagePlaceholder,
  requireEmailUpfront,
  emailInputPlaceholder,
  agentAvailableText,
  agentUnavailableText,
  showAgentAvailability,
  iframeUrlOverride,
  scrollEnabled = true,
  debug = false,
  customer = {} as CustomerMetadata,
}: Props) {
  const config = {
    token,
    inbox,
    title,
    subtitle,
    primaryColor,
    baseUrl,
    greeting,
    awayMessage,
    newMessagePlaceholder,
    emailInputPlaceholder,
    agentAvailableText,
    agentUnavailableText,
    requireEmailUpfront: requireEmailUpfront ? 1 : 0,
    showAgentAvailability: showAgentAvailability ? 1 : 0,
    debug: debug ? 1 : 0,
    mobile: 1,
    accountId: accountId || token,
    // TODO: figure out the best way to handle identifying customers
    customer: JSON.stringify(customer),
    metadata: JSON.stringify(customer),
  };

  const iframeUrl = iframeUrlOverride || 'https://chat-widget.papercups.io';
  const query = qs.stringify(config, {
    skipEmptyString: true,
    skipNull: true,
  });
  const uri = `${iframeUrl}?${query}`;

  return <WebView source={{uri}} scrollEnabled={scrollEnabled} />;
}
