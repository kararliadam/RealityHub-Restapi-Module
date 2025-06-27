// Copyright (c) 2021 Zero Density Inc.
//
// This file is part of realityhub-module-example.
//
// realityhub-module-example is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License version 2, as published by 
// the Free Software Foundation.
//
// realityhub-module-example is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with realityhub-module-example. If not, see <https://www.gnu.org/licenses/>.

class RestApiModuleClient {
  
  async start() {
    this.containerElement = document.createElement('div');

    const initModule = (params) => {
      const { brokerClient } = params;

      this.api = brokerClient.api.zero_density.realityhub_restapi;  

      return this.containerElement;
    }
    
    const destroyModule = () => {
      if(this.containerElement) {
        this.containerElement.remove();
      }

    }

    await window.registerRealityHubModule({
      name: 'zero_density.realityhub_restapi_client',
      label: 'RealityHub REST API',
      init: (registrationResult) => initModule(registrationResult),
      destroy: () => destroyModule(),
    });

    // Download Module Example's HTML file and set it to our container element
    const response = await fetch('/modules/zero_density.realityhub_restapi/index.html');
    this.containerElement.innerHTML = await response.text();

    // Swagger UI dynamic load functions
    function loadScript(url) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    async function loadSwaggerUI() {

      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = '/modules/zero_density.realityhub_restapi/assets/styles.css';
      document.head.appendChild(css);

      // Add CSS dynamically too
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/modules/zero_density.realityhub_restapi/swagger-ui/swagger-ui.css';
      document.head.appendChild(link);

      // Add DarkTheme CSS dynamically too
      const darkCss = document.createElement('link');
      darkCss.rel = 'stylesheet';
      darkCss.href = '/modules/zero_density.realityhub_restapi/assets/swaggerdark.css';
      document.head.appendChild(darkCss);

      // Load JS files sequentially
      await loadScript('/modules/zero_density.realityhub_restapi/swagger-ui/swagger-ui-bundle.js');
      await loadScript('/modules/zero_density.realityhub_restapi/swagger-ui/swagger-ui-standalone-preset.js');

      // Start Swagger UI
      const ui = window.SwaggerUIBundle({
        url: '/modules/zero_density.realityhub_restapi/realityhub-api.yaml',
        dom_id: '#swagger-ui',
        presets: [
          window.SwaggerUIBundle.presets.apis,
          window.SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
      });
      window.ui = ui;
    }

    // Launch Swagger UI after HTML is loaded
    loadSwaggerUI();
  }


}

const restApiModuleClient = new RestApiModuleClient();
restApiModuleClient.start();
