# Mobile Frontend [![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors) [![GitHub license](https://img.shields.io/github/license/wsdt/Wavect__s_f_mobile.svg)](https://github.com/wsdt/Wavect__s_f_mobile/blob/master/LICENSE) [![Generic badge](https://img.shields.io/badge/Made%20with-React%20Native-green)](https://reactnative.dev/) ![GitHub followers](https://img.shields.io/github/followers/wsdt?style=social)

Core app made with React Native & Expo. 

Download on **[Play-Store](https://play.google.com/apps/testing/com.wavect)**.

  <img src="https://github.com/wsdt/Wavect__s_f_mobile/blob/master/Docs/Screenshot_1.webp?raw=true" width="250" />   <img src="https://github.com/wsdt/Wavect__s_f_mobile/blob/master/Docs/Screenshot_2.webp?raw=true" width="250" />

**Don't be confused by browsing our commit-history:** 
Our requirements have changed drastically over time, thus we ejected our Expo app to pure React-Native and moved back to a non-ejected Expo-App in 2020. 

## What was Wavect®? ("BeKind" from October 2018 - April 2019)
Wavect® has been a Tech-Startup from October 2018 to May 2020 to offer low-priced and personalized Corporate-Social-Responsibility campaigns to SMEs. We basically built a social-platform where people can solve so-called challenges related to environment-protection, health and solidarity and win prizes based on their interests by companies they love (e.g. exclusive rebates, products, vouchers, ...).

![Image Wavect_Logo](https://github.com/wsdt/Wavect_Base/blob/master/files_github/Marketing/Corporate-Identity/01_Logo/color/combination-mark/png/Logo_WAVECT_color_comb-m_200.png)

### Our latest mockup
Click on the image to view a short YouTube-Video.

[![Wavect - Mockup](https://github.com/wsdt/Wavect_Base/blob/master/files_github/Marketing/Corporate-Identity/15_Prototype/Wireframes_Mockups_Design/20190925_MariellasMockup.png)](https://youtu.be/xrLBjZwvPRU "Wavect - Mockup")


### Main documents
If you should plan to commercialize any of our software or/and business-model, we would greatly appreciate if you get in touch with us!
* [Business-Plan](https://github.com/wsdt/Wavect_Base/blob/master/files_github/Wavect_BusinessPlan.pdf)
* [One-Pager](https://github.com/wsdt/Wavect_Base/blob/master/files_github/Konzept_OnePager.pdf)


### Social-Media (might not be online anymore)
* [Facebook](https://www.facebook.com/wavect/)
* [LinkedIn](https://www.linkedin.com/company/wavect)
* [Instagram](https://www.instagram.com/wavect.io)
* [Github](https://github.com/bekind-austria)


## Contribution [![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

This project is licensed under GNU V3, so contributions/pull-requests are welcome. All contributors get listed here. 

**Contributors** [![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/kennethreitz)
- Kevin Riedl ([WSDT](https://github.com/wsdt))
- Christof Jori ([Jo-Chris](https://github.com/Jo-Chris))
- Reza Shokri ([Bioharz](https://github.com/bioharz))


## How tu use?
Please use **Yarn** instead of **Npm** as Npm might cause problems in combination with Expo. 

### How to run?
**yarn start android** // or // **yarn start ios**

### How to create a release?
Run **npm version {new version in major.minor.bugfix format}** and then create the release build. The previous command 
removes the necessity to adapt the version-numbers in native code. 

### Backend interaction
Please keep in mind that the repo mostly uses the **real** backend (= [api.dev.wavect.io](https://api.dev.wavect.io)). 
In case you want to use the **local** backend to debug, update the backend itself and test new features, you might
need to use "Docker" and change the API-Url in the global_config.ts [/s_f_mobile/src/globalConfiguration/globalConfig.ts]. 
Please refer to the documentation of the base repository as it contains the docker-compose.yml.

### Notes
* No need to run react-native link at any time. We use auto-linking.

If your intending to use the < Text > Component of react-native, please dont forget to use the new **< AppText >** Component to automatically use our **Futura-Font** Package.
