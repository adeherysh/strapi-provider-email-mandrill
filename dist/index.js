'use strict'

module.exports = {
  init(providerOptions = {}, settings = {}) {
    const mailchimpClient = require('@mailchimp/mailchimp_transactional')(
      providerOptions.apiKey
    )
    return {
      send: async (options) => {
        let { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options
        to = Array.isArray(to) ? to : [{ email: to }]

        const message = {
          from_email: settings.defaultFrom,
          to,
          cc,
          bcc_address: bcc,
          replyTo: replyTo || settings.defaultReplyTo,
          subject,
          text,
          html,
          ...rest,
        }

        const response = await mailchimpClient.messages.send({ message })
        return response
      },
    }
  },
}
