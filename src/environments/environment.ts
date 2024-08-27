export const environment = {
    emailJSServiceId: process.env['emailJSServiceId'] || '',
    emailJSTemplateId: process.env['emailJSTemplateId'] || '',
    emailJSPublicKey: process.env['emailJSPublicKey'] || '',
    production: process.env['NODE_ENV'] === 'production',
  };
  