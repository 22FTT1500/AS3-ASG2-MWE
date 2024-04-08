# Project Overview
BinRadar is an innovative mobile phone applications that aims to transform trash management by giving consumers intelligent notifications and real-time monitoring of garbage bin fill levels. 

# Project Setup 
create new repository on git hub 
push the code of the ionic framework into the repository and commit 

navigate to the Project Directory: 
cd AS3-ASG2-Mwe
cmd ionic serve 
open web browser and navigate to the localhost 

# Usage Instructions 
Add Bin:
- users are able to add how many bins that they want to monitor

Monitoring fill level: 
- users are able to monitor the fill level of their rubbish bins in rel time.

Analysis:
- users are able to see the overall statistics of all the rubbish bins that they connected.

Refresh: 
- users are able to reset their bin monitoring level after it being emptied.

Notification:
- users are able to receive alert if their rubbish bin reach the maximum level.

Profile: 
- users are able to see the name that they registered and also they are able to change their passwords whenever they want.

# Contributing Guidelines:
1. copy the repository:
   https://github.com/22FTT1500/AS3-ASG2-MWE.git

2. commit and push changes that has been made with appropriate messages

3. Review code and fixing bugs continuously while making changes on the mobile application apps.

# Deployment for android studio: 
1. Navigate to the project directory by opening your terminal and executing the command: `cd AS3-ASG2-mwe`.

2. Once in the project directory, initiate a production build of the application by running: `ng build`.

3. Integrate the Android platform into your project by executing the command: `ionic capacitor add android`.

4. Open your project in your preferred code editor by running:` code .`.

5. Within the project, create a file named `capacitor.config.json` if it does not already exist, and add the following configuration:

json
Copy code
{
  "appId": "com.myepquest",
  "appName": "Ep Quest",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "www",
  "cordova": {}
}
6. Copy the web assets into the Android project by executing: `ionic capacitor copy android`.

7. Add the Android platform to your Ionic project by running: `ionic cap add android`.

8. Synchronize the changes made to the Android project by executing: `ionic cap sync`.

9. Launch Android Studio by executing: `npx cap open android`.

10. Within Android Studio, click on the "Run" button to deploy and view the application on your connected Android device or emulator.

  


