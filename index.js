import 'swagger-ui/dist/swagger-ui.css';
import SwaggerUI from "swagger-ui";
import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist';

SwaggerUI({
  dom_id: '#swagger-ui',
  url: "https://petstore.swagger.io/v2/swagger.json",
  configUrl: 'config.yaml',
  deepLinking: true,
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset
  ],
  plugins: [
    SwaggerUIBundle.plugins.DownloadUrl
  ],
  layout: "StandaloneLayout"
})