/** Parent of package.json scripts.
 * We are using 'nps' which extracts our scripts from package.json and
 * adds them to a local package-scripts.js. Therefore, we are able to have
 * here a parent js-File from which the services extend their scripts to sustain
 * maintainability.
 *
 * To run the initilization command (to extract all scripts from the package.json
 * into a separate package-scripts.js just run following commands):
 * - npm i nps --save-dev
 * - ./node_modules/.bin/nps init
 *
 * If you want to use .yml instead of .js just add --type yml behind the init
 * command. Commands which output the constant error message need to
 * be overwritten in child js-Files.
 */

module.exports = {
    scripts: {
        default: 'react-native start',
        ios: 'yarn start genLangSchema && ' + 'react-native run-ios && ' + 'react-native log-ios',
        android:  'adb reverse tcp:9090 tcp:9090 && ' +
            'rimraf ./android/app/build && ' +
            'yarn start genLangSchema && ' +
            'react-native run-android && ' +
            'react-native log-android', // adb for reactotron (each time necessary), rimraf for android build dir bug (no permission)
        genLangSchema: 'python ./src/assets/translations/generate_schema.py || python3 ./src/assets/translations/generate_schema.py',
        build: 'react-native build',
        clean: 'rimraf ./dist',
        test: 'jest --detectOpenHandles',
        prettier: 'prettier --write "**/*.{ts,tsx,js,jsx,scss,css,json}"',
        tslint: 'tslint -p ./tsconfig.json',
        tslintFix: 'tslint --fix -p ./tsconfig.json',
        evaluate: 'yarn test && yarn start prettier && yarn start tslintFix',
    },
}
