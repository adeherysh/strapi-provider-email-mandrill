# strapi-provider-email-mandrill

Mandrill email provider for Strapi

## Installation

```bash
# using yarn
yarn add https://github.com/adeherysh/strapi-provider-email-mandrill

# using npm
npm install https://github.com/adeherysh/strapi-provider-email-mandrill --save
```

## Configuration

### ./config/plugins.js (for javascript)

```javascript
module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-mandrill',
      providerOptions: {
        apiKey: env('MANDRILL_API_KEY'),
      },
      settings: {
        defaultFrom: env('MANDRILL_EMAIL_FROM'),
        defaultReplyTo: env('MANDRILL_EMAIL_REPLY_TO'),
      },
    },
  },
});
```

### ./config/plugins.ts (for typescript)

```typescript
export default ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-mandrill',
      providerOptions: {
        apiKey: env('MANDRILL_API_KEY'),
      },
      settings: {
        defaultFrom: env('MANDRILL_EMAIL_FROM'),
        defaultReplyTo: env('MANDRILL_EMAIL_REPLY_TO'),
      },
    },
  },
});
```