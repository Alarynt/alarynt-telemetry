// This is the main handler for the Lambda function.
// It will be responsible for orchestrating the collection and reporting of telemetry data.

const { collectMetrics } = require('../collectors/metrics-collector');
const { sendTelemetry } = require('../reporters/telemetry-reporter');
const config = require('../utils/config');

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  try {
    // 1. Collect metrics
    const metrics = await collectMetrics();

    // 2. Add metadata
    const telemetryData = {
      tenantId: config.tenantId,
      timestamp: new Date().toISOString(),
      version: config.version,
      environment: config.environment,
      metrics,
    };

    // 3. Send telemetry
    const result = await sendTelemetry(telemetryData);

    console.log('Telemetry sent successfully:', result);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Telemetry processed and sent successfully',
      }),
    };
  } catch (error) {
    console.error('Error processing telemetry:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error processing telemetry',
        error: error.message,
      }),
    };
  }
}; 