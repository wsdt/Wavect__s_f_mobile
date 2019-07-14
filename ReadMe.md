# Mobile Frontend
Please use **Yarn** instead of **Npm** as Npm might cause problems in combination with Expo. 

## How to run, if everything is setup?
Execute following commands in separate terminals: 
1. **yarn start**
2. **yarn start android** // or // **yarn start ios**

## How to initially setup?
1. **yarn install**
2. **react-native link**
3. See "How to run"

## Backend interaction
Please keep in mind that the repo mostly uses the **real** backend (= [api.dev.wavect.io](https://api.dev.wavect.io)). 
In case you want to use the **local** backend to debug, update the backend itself and test new features, you might
need to use "Docker" and change the API-Url in the global_config.ts [/s_f_mobile/src/globalConfiguration/globalConfig.ts]. 
Please refer to the documentation of the base repository as it contains the docker-compose.yml.

