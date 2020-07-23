const cdk = require('@aws-cdk/core');
const { UserPool, UserPoolClient, OAuthScope, UserPoolDomain } = require('@aws-cdk/aws-cognito')

class Cdk101Stack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    // The code that defines your stack goes here
    const userPool = new UserPool(this, 'userpool-101', {
      selfSignUpEnabled: true,
      standardAttributes: {
        fullname: {
          required: true,
          mutable: true,
        },
        phoneNumber: {
          required: true,
          mutable: true,
        }
      },
      signInAliases: {
        email: true,
      },
      userVerification: {
        emailStyle: 'LINK'
      }
    });

    const userPoolDomain = new UserPoolDomain(this, 'userpool-101-domain-1', {
      userPool: userPool,
      cognitoDomain: {
        domainPrefix: 'this-is-a-c-d-k-test'
      }
    })

    const userPoolClient = new UserPoolClient(this, 'userpool-101-client-1', {
      userPool: userPool,
      authFlows: {
        refreshToken: true,
        userSrp: true,
        userPassword: true
      },
      generateSecret: false,
      oAuth: {
        callbackUrls: [
          'http://localhost:8000',
        ],

        flows: {
          authorizationCodeGrant: true,
          implicitCodeGrant: true,
        },
        scopes: [
          OAuthScope.EMAIL,
          OAuthScope.OPENID,
          OAuthScope.PROFILE,
          OAuthScope.PHONE,
          OAuthScope.COGNITO_ADMIN
        ]
      }
    })
  }
}

module.exports = { Cdk101Stack }
