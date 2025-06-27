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

const { BrokerClient } = require("@zerodensity/realityhub-api");
const express = require('express');
const path = require('path');

const swaggerUiDist = require('swagger-ui-dist').getAbsoluteFSPath();
const REALITY_HUB_PORT = process.env.REALITY_HUB_PORT || 80;

class RestApiModuleBackend {

  async initBroker() {
    this.brokerClient = await BrokerClient.initModule({
      menuTitle: 'RealityHub REST API',
      clientModuleName: 'zero_density.realityhub_restapi_client',
      moduleName: 'zero_density.realityhub_restapi',
      serverURL: 'http://127.0.0.1:5000/',
      hub: {
        host: '127.0.0.1',
        port: REALITY_HUB_PORT,
      },
    });

    this.api = this.brokerClient.api.zero_density.realityhub_restapi;

    this.brokerClient.once('disconnect', () => {
      this.brokerClient.destroy();
      this.restart();
    });
  }

  startHTTPServer() {
    const app = express();

    app.use('/swagger-ui', express.static(swaggerUiDist));

    app.use(express.static(path.join(__dirname, '../client')));

    app.listen(5000, '0.0.0.0', () => {
      console.info('REST API Documentation backend started on port 5000');
    });
  }

  init() {
    this.startHTTPServer();
    this.restart();
  }

  async restart() {
    try {
      await this.initBroker();
    } catch(e) {
      console.error('Unable to initialize Broker, exiting..');
      process.exit(1);
    }

   
  }

}

const restApiModuleBackend = new RestApiModuleBackend();
restApiModuleBackend.init();
