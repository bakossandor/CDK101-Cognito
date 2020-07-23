# Cognito deployment with aws-cdk

The main purpose of this minor project is to get me a better understanding of `aws-cdk`,
in the form of a Cognito User Pool deployment.

## Requirements

- Having a user pool with an app client
- The "users" should be able to sign up by them
- The required user properties are [email, phone_number]
- The user email verification should be via a link
- The user pool should have a hosted UI

## Description

`./lib/cdk-101-stack.js` file contains the deployment stack, it includes the following resources
- UserPool
- UserPoolDomain
- UserPoolClient

## Notes
- The JavaScript/TypeScript '@aws-cdk/aws-cognito' library, `OAuthSettings` interface does not implement the `LogoutURLs` property atm.

## Running the project
1. Clone the project
2. `npm install`
3. `cdk deploy`

if you want to checkout the CloudFormation representation, run `cdk synth`

# Generated Template Readme by running `cdk init app`

## Welcome to your CDK JavaScript project!

This is a blank project for JavaScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app. The build step is not required when using JavaScript.

### Useful commands

 * `npm run test`         perform the jest unit tests
 * `cdk deploy`           deploy this stack to your default AWS account/region
 * `cdk diff`             compare deployed stack with current state
 * `cdk synth`            emits the synthesized CloudFormation template
