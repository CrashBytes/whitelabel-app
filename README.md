# 🎨 White Label Expo App

A production-ready React Native Expo app template with dynamic white-labeling capabilities. Configure app icons, splash screens, colors, localization, and features per client using simple config files.

## 🚀 Quick Start

### Installation

```bash
cd ~/github/whitelabel-app
npm install
```

### Run Default App

```bash
npm start
# or
expo start
```

### Run Client-Specific App

```bash
# Run ACME client
CLIENT=acme npm start

# Run any client
CLIENT=clientname npm start
```

## 📱 Features

- ✅ **Dynamic Configuration** - Single codebase, multiple brands
- ✅ **Zod Validation** - Runtime config validation with clear error messages
- ✅ **Custom Splash Screens** - Per-client splash screens via app.config
- ✅ **Brand Colors** - Theme customization per client
- ✅ **Localization** - i18n support (en, es, fr)
- ✅ **Platform Support** - iOS, Android, Web
- ✅ **Adaptive Icons** - Android adaptive icons
- ✅ **URL Schemes** - Custom deep linking per client
- ✅ **Feature Flags** - Enable/disable features per client

## 🏗️ Architecture

### Directory Structure

```
whitelabel-app/
├── app/                    # Expo Router app directory
│   ├── _layout.tsx        # Root layout with branding
│   └── index.tsx          # Home screen showing config
├── assets/                 # Client-specific assets
│   ├── default/           # Default brand assets
│   │   ├── icon.png
│   │   ├── splash.png
│   │   └── adaptive-icon.png
│   └── acme/              # ACME client assets
│       ├── icon.png
│       ├── splash.png
│       └── adaptive-icon.png
├── configs/               # Client configurations
│   ├── default.config.js  # Default config template
│   └── acme.config.js     # Example client config
├── hooks/                 # Custom hooks
│   └── useTranslation.ts  # i18n hook
├── locales/               # Translations
│   ├── en.json
│   ├── es.json
│   └── fr.json
├── app.config.js          # Dynamic Expo configuration
└── package.json
```

## 🎨 Adding a New Client

### 1. Create Client Config

Copy `configs/default.config.js` to `configs/yourclient.config.js`:

```javascript
module.exports = {
  appName: 'Your Client Name',
  slug: 'yourclient-app',
  scheme: 'yourclient',
  
  icon: './assets/yourclient/icon.png',
  
  splash: {
    image: './assets/yourclient/splash.png',
    backgroundColor: '#YOUR_COLOR',
  },
  
  ios: {
    bundleIdentifier: 'com.yourclient.app',
  },
  
  android: {
    package: 'com.yourclient.app',
  },
  
  brandColors: {
    primary: '#YOUR_PRIMARY',
    secondary: '#YOUR_SECONDARY',
    // ... more colors
  },
  
  features: {
    auth: true,
    darkMode: true,
    // ... feature flags
  },
  
  apiUrl: 'https://api.yourclient.com',
  supportEmail: 'support@yourclient.com',
  locale: 'en',
};
```

### 2. Add Client Assets

Create directory: `assets/yourclient/`

Add these files:
- `icon.png` (1024x1024px)
- `splash.png` (1242x2436px)
- `adaptive-icon.png` (1024x1024px)
- `favicon.png` (48x48px)

See `assets/default/README.md` for detailed specifications.

### 3. Test Client

```bash
CLIENT=yourclient npm start
```

### 4. Build for Production

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Build iOS
CLIENT=yourclient eas build --platform ios

# Build Android
CLIENT=yourclient eas build --platform android
```

## 🌍 Localization

Add translations in `locales/[lang].json`:

```json
{
  "welcome": "Welcome to",
  "clientInfo": "Client Information",
  // ... more translations
}
```

Use in components:

```typescript
import { useTranslation } from '../hooks/useTranslation';

function MyComponent() {
  const { t } = useTranslation();
  return <Text>{t('welcome')}</Text>;
}
```

## 🎨 Accessing Config in Code

```typescript
import Constants from 'expo-constants';

const config = Constants.expoConfig?.extra;

// Access client name
const clientName = config?.clientName;

// Access brand colors
const primaryColor = config?.brandColors?.primary;

// Check feature flags
const hasAuth = config?.features?.auth;

// Get API URL
const apiUrl = config?.apiUrl;
```

## 🔧 Configuration Options

### Brand Colors

```javascript
brandColors: {
  primary: '#007AFF',      // Main brand color
  secondary: '#5856D6',    // Secondary actions
  accent: '#FF9500',       // Highlights
  background: '#FFFFFF',   // App background
  text: '#000000',         // Text color
  error: '#FF3B30',        // Error states
  success: '#34C759',      // Success states
}
```

### Features

```javascript
features: {
  auth: true,              // Authentication
  darkMode: true,          // Dark mode support
  analytics: true,         // Analytics tracking
  pushNotifications: true, // Push notifications
  // Add custom features
}
```

### Splash Screen

```javascript
splash: {
  image: './assets/client/splash.png',
  resizeMode: 'contain',   // or 'cover'
  backgroundColor: '#ffffff',
}
```

## 📦 Building & Deployment

### iOS

```bash
# Configure
CLIENT=yourclient eas build:configure

# Build
CLIENT=yourclient eas build --platform ios --profile production

# Submit to App Store
CLIENT=yourclient eas submit --platform ios
```

### Android

```bash
# Build
CLIENT=yourclient eas build --platform android --profile production

# Submit to Play Store
CLIENT=yourclient eas submit --platform android
```

## 🔐 Environment Variables

Set client at build time:

```bash
# Development
CLIENT=acme expo start

# Production builds
CLIENT=acme eas build
```

## 📱 Platform-Specific Configuration

### iOS

```javascript
ios: {
  bundleIdentifier: 'com.client.app',
  supportsTablet: true,
  infoPlist: {
    CFBundleDisplayName: 'Client Name',
    LSApplicationQueriesSchemes: ['clientscheme'],
  },
}
```

### Android

```javascript
android: {
  package: 'com.client.app',
  adaptiveIcon: {
    foregroundImage: './assets/client/adaptive-icon.png',
    backgroundColor: '#FFFFFF',
  },
  permissions: ['CAMERA', 'NOTIFICATIONS'],
}
```

## 🛠️ Development Tips

### Hot Reload

Changes to client configs require app restart:
```bash
# Stop current server
# Change CLIENT variable
CLIENT=newclient npm start
```

### Asset Management

- Use high-resolution assets (1024x1024 minimum)
- Compress PNGs with [TinyPNG](https://tinypng.com)
- Consider git-lfs for binary assets
- Test on multiple device sizes

### Testing Multiple Clients

```bash
# Terminal 1
CLIENT=default npm start

# Terminal 2  
CLIENT=acme npm start -- --port 19001

# Terminal 3
CLIENT=other npm start -- --port 19002
```

## ✅ Configuration Validation

All client configs are validated using [Zod](https://zod.dev) for type safety and format checking.

### Automatic Validation

Configs are validated when you start the app:

```bash
CLIENT=acme npm start

# ✅ Valid config:
✅ Loaded config for client: acme
✅ Configuration validated successfully

# ❌ Invalid config:
❌ Configuration validation failed!
Errors:
  - ios.bundleIdentifier: Must be a valid bundle identifier
  - brandColors.primary: Must be a valid hex color
```

### Manual Validation

```bash
# Validate before running
npm run validate acme
```

### Common Validation Rules

- **Bundle IDs**: Lowercase, reverse domain format (e.g., `com.acme.app`)
- **Package Names**: Same as bundle IDs, underscores allowed for Android
- **Colors**: Hex format with # (e.g., `#1E3A8A`)
- **URLs**: Valid URLs with protocol (e.g., `https://api.acme.com`)
- **Emails**: Valid email format (e.g., `support@acme.com`)

See [docs/ZOD_VALIDATION.md](docs/ZOD_VALIDATION.md) for complete validation rules.

## 📚 Resources

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [App Configuration](https://docs.expo.dev/workflow/configuration/)
- [i18n-js Documentation](https://github.com/fnando/i18n-js)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [Zod Documentation](https://zod.dev)

## 🤝 Contributing

1. Create client config in `configs/`
2. Add assets to `assets/[client]/`
3. Test thoroughly on iOS and Android
4. Document any custom features
5. Update this README if needed

## 📄 License

MIT

## 🆘 Troubleshooting

### Validation Errors

**Problem**: Config fails Zod validation

**Solution**:
- Read the specific error message
- Check [docs/ZOD_VALIDATION.md](docs/ZOD_VALIDATION.md) for format rules
- Run `npm run validate <client>` for detailed errors
- Common issues:
  - Bundle IDs with uppercase or underscores (iOS)
  - Colors missing # or wrong format
  - Invalid asset paths

### Config Not Loading

- Verify file exists: `configs/[client].config.js`
- Check for syntax errors in config
- Run `npm run validate <client>` to check validation
- Restart development server

### Assets Not Showing

- Verify asset paths in config
- Check file extensions match exactly
- Ensure assets meet size requirements
- Run `npm run validate <client>` to verify assets exist
- Clear cache: `expo start -c`

### Build Failures

- Validate config first: `npm run validate <client>`
- Check bundle identifiers are unique
- Verify all required assets exist
- Ensure package names follow platform conventions
- Review EAS build logs

## 🎯 Roadmap

- [ ] Add more example clients
- [ ] Automated asset generation
- [✅] Config validation script (Zod integration complete)
- [ ] UI theme provider
- [ ] More translations
- [ ] Advanced feature flags
- [ ] Custom font support
- [ ] TypeScript types from Zod schema
