import { datadogRum } from "@datadog/browser-rum";
import { reactPlugin } from "@datadog/browser-rum-react";

datadogRum.init({
  applicationId: "9603e159-3988-46a0-8ed0-0c35d32b8691",
  clientToken: "pubd88dfd1b57d47031418b2e1bdf3d5e22",
  site: "datadoghq.com",
  service: "web",
  env: "prod",

  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  defaultPrivacyLevel: "mask-user-input",
  plugins: [reactPlugin({ router: false })],
});
