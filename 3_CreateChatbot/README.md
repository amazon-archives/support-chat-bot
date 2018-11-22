# Module 3: Create Chat bot

In this module you'll create an Amazon Lex chat bot.

___
## Step 1: Create the AWS Lambda function
You can launch one of these AWS CloudFormation templates in the Region of your choice in order to create the necessary lambda functions automatically.

Region| Launch
------|-----
US East (N. Virginia) | [![Launch Module 2 in us-east-1](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cloudformation-launch-stack-button.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=supportchatbot-lambda-1&templateURL=https://s3.amazonaws.com/supportchatbot-east-1/2_CreateChatbot/create-lambda-bot.yaml)
US West (Oregon) | [![Launch Module 2 in us-west-2](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cloudformation-launch-stack-button.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=supportchatbot-lambda-1&templateURL=https://s3.amazonaws.com/supportchatbot-east-1/2_CreateChatbot/create-lambda-bot.yaml)


<details>
<summary><strong>CloudFormation Launch Instructions (expand for details)</strong></summary><p>

1. Choose the **Launch Stack** link above for the region of your choice.

1. Choose **Next** on the Select Template page.

1. On the Options page, leave all the defaults and choose **Next**.

1. On the Review page, check the box to acknowledge that CloudFormation will create IAM resources and choose **Create**.
    ![Acknowledge IAM Screenshot](../images/cfn-ack-iam.png)

    This template will create a lambda function that will call the cognito API to unlock or reset password. This template will create a role that provides access for accessing the cognito service.

1. Wait for the `supportchatbot-functions` stack to reach a status of `CREATE_COMPLETE`.

</p></details>

## Step 2: Configure Cognito pool id in Lambda function

2.1 Go to output section of supportchatbot-webapp-1 cloud formation template and copy the Cognito Pool Id.

2.2 Open the cognitopwrest function created in step 1.

2.3 Replace the PoolID value in line 12 value to the value copied in step 2.1
```
import json
import boto3

client = boto3.client('cognito-idp')

with open('./response.json', 'r') as r:
    response = json.load(r)
    response_success = response['response_success']
    response_fail = response['response_fail']

#use your cognito user pool ID
PoolID = 'xxxxxxx'
```

## Step 3: Creating your Bot

3.1. Download Bot JSON file from below location

```
https://s3.ap-south-1.amazonaws.com/gsi-ai-ml-bootcamp/Lex/MyBot.json.zip

```

3.2. Create Amazon Lex Bot
Go to Amazon Lex console and click on *Get Started* to go to *Create your Lex bot* page. Click on **cancel** button which is located at the botton right corner of the page. It will take you to Bots listing page.

3.3 Import Bot
Click on **Actions** button and select **Import**. Choose the file downloaded in step 2.1 and click **Import**.

3.4 Click on **Build** to build the bot and test the bot. Type 'hi' to start the coversation and say 'I forgot my password'

## Step 4: Integrating the bot with Lambda and test it

4.1. Add Lambda to the Intent

You need to link your Chatbot to your lambda function. Go to 'Fullfilment' section and choose the lambda you created in step 1 and leave the version as $LATEST. Follow this step for both 'Unlock' and 'PasswordReset' Intents.

4.2. Save The Intent
Now that you have configured your Intent scroll up and save your Intent configuration.

4.3. Build
Once you have configured your chatbot. Click on build to build your chatbot.

![](../images/Build.png)

4.4. Test App

As the build succeeds it's time for you to test the chatbot. Go to the chatbot appearing on the right side of the screen and type any of these messages "Hello", "Hi" and start chatting with the bot.

## Step 5: Host the bot with-in a Web Application

5.1 Launch the AWS CloudFormation stack

 [![Launch](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/images/cloudformation-launch-stack-button.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=lex-web-ui&templateURL=https://s3.amazonaws.com/aws-bigdata-blog/artifacts/aws-lex-web-ui/artifacts/templates/master.yaml)

5.2 In the Lex Bot Configuration Parameters section, for BotName, type your bot’s name.
5.3 In the Web Application Parameters section, complete each of the parameters.
Note: It’s essential that you use your site’s origin for WebAppParentOrigin.
5.4 After AWS CloudFormation launches the stack (the status is CREATE_COMPLETE), you will see a link on the Outputs tab. Open ParentPageURl and you will see your bot there as iFrame.