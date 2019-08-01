"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_image_picker_1 = require("react-native-image-picker");
exports.openFilePicker = function (cb) {
    var options = {
        title: "Beweis es!",
        mediaType: "photo",
        storageOptions: {
            skipBackup: true,
            path: "photo",
        },
    };
    react_native_image_picker_1.default.showImagePicker(options, function (res) {
        cb(res);
    });
};
//# sourceMappingURL=FilePickerController.js.map