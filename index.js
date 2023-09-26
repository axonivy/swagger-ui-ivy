import 'swagger-ui/dist/swagger-ui.css';
import SwaggerUI from "swagger-ui";
import SwaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset"

SwaggerUI({
  dom_id: '#swagger-ui',
  url: "https://petstore3.swagger.io/api/v3/openapi.json",
  configUrl: 'config.yaml',
  deepLinking: true,
  presets: [
    SwaggerUI.presets.apis,
    SwaggerUIStandalonePreset
  ],
  plugins: [
    SwaggerUI.plugins.DownloadUrl
  ],
  layout: "StandaloneLayout"
})