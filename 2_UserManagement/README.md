# Module 2: User Authentication and Registration with Amazon Cognito User Pools

In this module you'll create an Amazon Cognito user pool to manage your user accounts. You'll deploy pages that enable customers to register as a new user, verify their email address, and sign into the site.

You can launch one of these AWS CloudFormation templates in the Region of your choice in order to build the necessary resources automatically.

Region| Launch
------|-----
US East (N. Virginia) | [![Launch Module 2 in us-east-1](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cloudformation-launch-stack-button.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=wildrydes-webapp-2&templateURL=https://s3.amazonaws.com/wildrydes-us-east-1/WebApplication/2_UserManagement/user-management.yaml)
US West (Oregon) | [![Launch Module 2 in us-west-2](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cloudformation-launch-stack-button.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=wildrydes-webapp-2&templateURL=https://s3.amazonaws.com/wildrydes-us-west-2/WebApplication/2_UserManagement/user-management.yaml)
EU (Ireland) | [![Launch Module 2 in eu-west-1](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cloudformation-launch-stack-button.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=wildrydes-webapp-2&templateURL=https://s3.amazonaws.com/wildrydes-eu-west-1/WebApplication/2_UserManagement/user-management.yaml)


<details>
<summary><strong>CloudFormation Launch Instructions (expand for details)</strong></summary><p>

1. Choose the **Launch Stack** link above for the region of your choice.

1. Choose **Next** on the Select Template page.

1. Provide the name of your website bucket from module 1 for the  **Website Bucket Name** (e.g. `wildrydes-yourname`) and choose **Next**.

    **Note:** You must specify the same bucket name you used in the previous module. If you provide a bucket name that does not exist or that you do not have write access to, the CloudFormation stack will fail during creation.

    ![Speficy Details Screenshot](../images/module2-cfn-specify-details.png)

1. On the Options page, leave all the defaults and choose **Next**.

1. On the Review page, check the box to acknowledge that CloudFormation will create IAM resources and choose **Create**.
    ![Acknowledge IAM Screenshot](../images/cfn-ack-iam.png)

    This template uses custom resources to create an Amazon Cognito user pool and client as well as generate a configuration file with the details needed to connect to this user pool and upload it to your website bucket. The template will create a role that provides access for creating these resources and uploading the config file to your bucket.

1. Wait for the `wildrydes-webapp-2` stack to reach a status of `CREATE_COMPLETE`.

1. Follow the steps outlined in the [Implementation Verification](#implementation-verification) section to confirm you are ready to move on to the next module.

</p></details>

## Architecture Overview

When users visit your website they will first register a new user account. For the purposes of this workshop we'll only require them to provide an email address and password to register. However, you can configure Amazon Cognito to require additional attributes in your own applications.

After users submit their registration, Amazon Cognito will send a confirmation email with a verification code to the address they provided. To confirm their account, users will return to your site and enter their email address and the verification code they received. You can also confirm user accounts using the Amazon Cognito console if you want to use fake email addresses for testing.

After users have a confirmed account (either using the email verification process or a manual confirmation through the console), they will be able to sign in. When users sign in, they enter their username (or email) and password. A JavaScript function then communicates with Amazon Cognito, authenticates using the Secure Remote Password protocol (SRP), and receives back a set of JSON Web Tokens (JWT). The JWTs contain claims about the identity of the user and will be used in the next module to authenticate against the RESTful API you build with Amazon API Gateway.

![Authentication architecture](../images/authentication-architecture.png)

