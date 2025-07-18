# Alarynt Telemetry Collector

This repository contains the source code for the Alarynt telemetry collector, a lightweight Lambda function responsible for gathering and reporting usage metrics from customer infrastructure to the Alarynt control plane.

## Goals

- **Low Overhead:** The collector is designed to be lightweight and have minimal impact on the performance of the customer's environment.
- **Secure Communication:** Telemetry data is sent securely to the `alarynt-core` via HTTPS, with authentication handled by a shared secret or IAM role.
- **Resiliency:** The collector includes retry logic with exponential backoff to handle transient network issues.
- **Rich Data:** Telemetry data is tagged with important metadata, including tenant ID, timestamp, version, and environment.

## Getting Started

> **Note:** Instructions for deploying and configuring the telemetry collector will be added here.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your changes. #   a l a r y n t - t e l e m e t r y  
 #   a l a r y n t - t e l e m e t r y  
 