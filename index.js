import 'swagger-ui/dist/swagger-ui.css';
import SwaggerUI from 'swagger-ui';
import IvyLayoutPlugin from './src/plugins/IvyLayoutPlugin';

SwaggerUI({
  dom_id: '#swagger-ui',
  url: 'https://petstore3.swagger.io/api/v3/openapi.json',
  configUrl: 'config.yaml',
  deepLinking: true,
  presets: [SwaggerUI.presets.apis],
  plugins: [SwaggerUI.plugins.DownloadUrl, IvyLayoutPlugin],
  layout: 'IvyLayout'
});
