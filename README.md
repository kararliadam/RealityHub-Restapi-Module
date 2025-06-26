# RealityHub REST API Module

A REST API module developed for RealityHub. This module provides HTTP REST API access to all RealityHub functions and offers interactive documentation through Swagger UI.

## 🚀 Features

- **REST API Access**: HTTP REST API access to all RealityHub functions
- **Swagger UI**: Interactive API documentation and testing interface
- **Modular Architecture**: Standalone module that can be integrated with RealityHub
- **Real-time Communication**: Real-time communication with RealityHub
- **Comprehensive API**: Engine Control, Rundown Control, Newsroom Control, Graph Control and more

## 📋 Requirements

- Node.js (v14 or higher)
- RealityHub (running instance)
- npm or yarn

## 🛠️ Installation

1. **Clone the project:**
```bash
git clone https://github.com/kararliadam/RealityHub-Restapi-Module.git
cd RealityHub-Restapi-Module
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set RealityHub port (optional):**
   
   RealityHub runs on port 80 by default. If you're using a different port:
```bash
export REALITY_HUB_PORT=3000  # Linux/macOS
# or
set REALITY_HUB_PORT=3000     # Windows
```

## 🚀 Running

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

When the module runs successfully:
- Backend server will run on port 5000
- "RealityHub REST API" option will appear in RealityHub menu
- Swagger UI interface will open within RealityHub

## 📚 API Documentation

When the module is running, you can access the following API categories through the Swagger UI interface:

### 🔧 Engine Control
- Engine status control
- Instance management
- Host management

### 📺 Rundown Control
- Rundown creation and editing
- Timeline management
- Playlist control

### 📰 Newsroom Control
- Newsroom integration
- Content management

### 🎮 Graph Control (Reality Engine 5)
- Graph creation and editing
- Node management
- Graph content control

### 🎮 Rgraph Control (Reality Engine 4.x)
- Rgraph file management
- XML content control

### 🎮 Ustate Control (Unreal Engine)
- Ustate file management
- Unreal Engine integration

### 📁 Projects Control
- Project management
- Map management

### 🚀 Launcher Control
- Launcher management
- System control

### 📋 Lino Rundown Control
- Lino integration
- Rundown synchronization

### 🔄 Batch Requests
- Batch operations
- Multiple API calls

## 🔧 Configuration

### Port Settings
- **Backend Server**: Port 5000 (default)
- **RealityHub**: Port 80 (default) or `REALITY_HUB_PORT` environment variable

### Environment Variables
```bash
REALITY_HUB_PORT=3000  # RealityHub port number
```

## 🏗️ Project Structure

```
RealityHub-Restapi-Module/
├── src/
│   ├── client/                 # Frontend files
│   │   ├── index.html         # Main HTML file
│   │   ├── index.js           # Client JavaScript
│   │   ├── realityhub-api.yaml # Swagger API definition
│   │   ├── styles.css         # CSS styles
│   │   └── SwaggerDark.user.css # Swagger UI theme
│   └── server/
│       └── index.js           # Backend server
├── assets/                    # Asset files
├── docs/                      # Documentation
├── package.json              # Project dependencies
└── README.md                 # This file
```

## 🔌 RealityHub Integration

This module integrates with RealityHub in the following way:

1. **Broker Client**: Communicates with RealityHub
2. **HTTP Server**: Provides REST API endpoints
3. **Swagger UI**: API documentation and testing interface
4. **Static Files**: Serves client files

## 🐛 Troubleshooting

### Module Not Appearing in RealityHub
- Ensure RealityHub is running
- Check port settings
- Review server logs

### API Connection Error
- Check RealityHub port setting
- Verify firewall settings
- Test network connectivity

### Swagger UI Not Loading
- Check browser console for error messages
- Ensure static files are being served correctly

## 📄 License

This project is licensed under GPL-2.0-only. See `COPYING.md` file for details.

## 👥 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions:
- GitHub Issues: [Repository Issues](https://github.com/kararliadam/realityhub-restapi-module/issues)
- Email: ibrahim.erdogan@zerodensity.io

## 🔄 Version History

- **v1.0.0**: Initial release - Basic REST API module

---

**Note**: This module is not an official part of RealityHub and is not supported by Zero Density.
