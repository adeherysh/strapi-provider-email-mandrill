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

### For javascript

```javascript
// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ...
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
  // ...
});
```

### For typescript

```typescript
// path: ./config/plugins.ts

export default ({ env }) => ({
  // ...
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
  // ...
});
```

## References

- [Strapi - Configuring providers](https://docs.strapi.io/developer-docs/latest/development/providers.html#configuring-providers)
- [Strapi - Sending emails with a controller or service](https://docs.strapi.io/developer-docs/latest/plugins/email.html#sending-emails-with-a-controller-or-service)