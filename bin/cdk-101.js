#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { Cdk101Stack } = require('../lib/cdk-101-stack');

const app = new cdk.App();
new Cdk101Stack(app, 'Cdk101Stack');
