module.exports = ({ env }) => ({
  //host: env('HOST', 'ftp.templaterocha2.hospedagemdesites.ws'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3002),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '828811e8aace1aa789067dffc85af376'),
    },
  },
});
