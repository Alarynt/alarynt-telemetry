// This module will be responsible for collecting usage metrics.

const collectMetrics = async () => {
  // TODO: Implement metric collection logic
  console.log('Collecting metrics...');
  return {
    ruleEvaluations: 100,
    lambdaExecutionTime: 500,
    matches: 75,
    noOps: 25,
    triggerExecutions: 10,
  };
};

module.exports = {
  collectMetrics,
}; 