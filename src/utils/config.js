// This module will handle configuration management.

const config = {
  controlPlaneUrl: process.env.CONTROL_PLANE_URL || 'https://api.alarynt.com/telemetry',
  tenantId: process.env.TENANT_ID,
  environment: process.env.ENVIRONMENT || 'production',
  version: process.env.VERSION || '0.1.0',
  authentication: {
    secret: process.env.AUTH_SECRET,
    iamRole: process.env.IAM_ROLE,
  },
};

module.exports = config; 