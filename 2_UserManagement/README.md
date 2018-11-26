# Module 2: User Registration with Amazon Cognito User Pools

In this module you'll create an Amazon Cognito user pool user to login. In the previous module, you deployed pages that enable customers to register as a new user, verify their email address, and sign into the site. In this module you'll step through registering a new user and logging in.


## Details

When users visit your website they will first register a new user account. For the purposes of this workshop we'll only require them to provide an email address and password to register. However, you can configure Amazon Cognito to require additional attributes in your own applications.

<details>
<summary><strong>User Registration (expand for details)</strong></summary><p>

1. Navigate to `/register.html`, and provide an email address as the username, and a password.

1. You'll be redirected to `/verify.html` where you'll be asked to provide a verification code. The verification code will be sent to your email and will include a 6 digit code.

1. After you enter your code and email address, you'll be redirected to `signin.html`

1. Login to verify that your credentials work.


</p></details>

After users submit their registration, Amazon Cognito will send a confirmation email with a verification code to the address they provided. To confirm their account, users will return to your site and enter their email address and the verification code they received. You can also confirm user accounts using the Amazon Cognito console if you want to use fake email addresses for testing.

After users have a confirmed account (either using the email verification process or a manual confirmation through the console), they will be able to sign in. When users sign in, they enter their username (or email) and password. A JavaScript function then communicates with Amazon Cognito, authenticates using the Secure Remote Password protocol (SRP), and receives back a set of JSON Web Tokens (JWT). The JWTs contain claims about the identity of the user and will be used in the next module to authenticate against the RESTful API you build with Amazon API Gateway.

### Authentication Flow
![Authentication architecture](../images/authentication-architecture.png)

After you've successfully created a new user, continue to the next module. [Create Chatbot](../3_CreateChatbot)
