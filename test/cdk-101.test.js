const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Cdk101 = require('../lib/cdk-101-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Cdk101.Cdk101Stack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
