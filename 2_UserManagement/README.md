# Module 2: User Authentication and Registration with Amazon Cognito User Pools

In this module you'll create an Amazon Cognito user pool to manage your user accounts. In the previous module, you deployed pages that enable customers to register as a new user, verify their email address, and sign into the site.

You can launch one of these AWS CloudFormation templates in the Region of your choice in order to build the necessary resources automatically.

## Architecture Overview

When users visit your website they will first register a new user account. For the purposes of this workshop we'll only require them to provide an email address and password to register. However, you can configure Amazon Cognito to require additional attributes in your own applications.

After users submit their registration, Amazon Cognito will send a confirmation email with a verification code to the address they provided. To confirm their account, users will return to your site and enter their email address and the verification code they received. You can also confirm user accounts using the Amazon Cognito console if you want to use fake email addresses for testing.

After users have a confirmed account (either using the email verification process or a manual confirmation through the console), they will be able to sign in. When users sign in, they enter their username (or email) and password. A JavaScript function then communicates with Amazon Cognito, authenticates using the Secure Remote Password protocol (SRP), and receives back a set of JSON Web Tokens (JWT). The JWTs contain claims about the identity of the user and will be used in the next module to authenticate against the RESTful API you build with Amazon API Gateway.

![Authentication architecture](../images/authentication-architecture.png)
