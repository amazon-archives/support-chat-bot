# Workshop Cleanup

This page provides instructions for cleaning up the resources created during the preceding modules.

## Resource Cleanup Instructions

### 1. Module 1 Cleanup
Delete the Support Chatbot Serverless Application  created in module 1 using the instructions below.


1. Navigate to the **CloudFormation** console under Management Tools.

1. Select the **SupportChatbot-xxx** stack and use the **Actions** dropdown to click **Delete Stack**.

### 2. Module 3 Cleanup
Delete the Lambda Function created to support chatbots using the instructions below.

1. Navigate to the **CloudFormation** console under Management Tools.

1. Select the **Chatbot-Lambda-xxx** stack and use the **Actions** dropdown to click **Delete Stack**.

Delete the Lex Chatbot created in module two using the following instructions

1. In the AWS Management Console, click **Services** then select **Lex**.

1. Select the `VirtualHelpDesk` Lex bot you created in module 3.

1. From the **Actions** drop-down, choose **Delete**.

1. Choose **Delete** when prompted to confirm.

You need to also delete the web application and cognito pools created for hosting chatbot

1. Navigate to the **CloudFormation** console under Management Tools.

1. Select the **lex-web-ui-xxx** stack and use the **Actions** dropdown to click **Delete Stack**.
