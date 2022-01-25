module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '79b13edac188316e933b548d612ed382'),
  },
});
