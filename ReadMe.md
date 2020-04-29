# Mobile Frontend [![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors) [![GitHub license](https://img.shields.io/github/license/wsdt/Wavect__s_f_mobile/.svg)](https://github.com/wsdt/Wavect__s_f_mobile//blob/master/LICENSE) 
[![Generic badge](https://img.shields.io/badge/ReactNative-Made%20with%20React%20Native-green)](https://reactnative.dev/)

Core app made with React Native. 

**Don't be confused by browsing our commit-history**
Our requirements have changed drastically over time, thus we ejected our Expo app to pure React-Native and moved back to a non-ejected Expo-App in 2020. 

# How tu use?
Please use **Yarn** instead of **Npm** as Npm might cause problems in combination with Expo. 

## How to run?
**yarn start android** // or // **yarn start ios**

## How to create a release?
Run **npm version {new version in major.minor.bugfix format}** and then create the release build. The previous command 
removes the necessity to adapt the version-numbers in native code. 

## Backend interaction
Please keep in mind that the repo mostly uses the **real** backend (= [api.dev.wavect.io](https://api.dev.wavect.io)). 
In case you want to use the **local** backend to debug, update the backend itself and test new features, you might
need to use "Docker" and change the API-Url in the global_config.ts [/s_f_mobile/src/globalConfiguration/globalConfig.ts]. 
Please refer to the documentation of the base repository as it contains the docker-compose.yml.

## Notes
* No need to run react-native link at any time. We use auto-linking.

If your intending to use the < Text > Component of react-native, please dont forget to use the new **< AppText >** Component to automatically use our **Futura-Font** Package.
