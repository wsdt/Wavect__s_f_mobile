"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_image_picker_1 = require("react-native-image-picker");
var MultiLingualityController_1 = require("../MultiLingualityController/MultiLingualityController");
var FilePickerController_translations_1 = require("./FilePickerController.translations");
exports.openFilePicker = function () {
    return new Promise(function (resolve, reject) {
        var options = {
            title: MultiLingualityController_1.t(FilePickerController_translations_1.default.dialog.title),
            mediaType: "photo",
            storageOptions: {
                skipBackup: true,
                path: "photo",
            },
        };
        try {
            react_native_image_picker_1.default.showImagePicker(options, function (res) {
                resolve(res);
            });
        }
        catch (e) {
            reject(e);
        }
    });
};
//# sourceMappingURL=FilePickerController.js.map