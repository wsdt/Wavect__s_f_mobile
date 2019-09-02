export enum FontType {
    /**
     * Either put this back into the AppText.tsx (so if you're using the <AppText> Component, you dont
     * have to import the FontType class (1 import statement less...) but visibility suffers!
     *
     */

    // if we need to access this outside of the <AppText> Component, this should always be THE STANDARD
    // (So there's only one place for change!)

    // Standard fonts (use as often as possible)
    STANDARD = 'FuturaStd-Medium',
    STANDARD_BOLD = 'FuturaStd-Bold',

    // Basic Fonts
    BOLD = 'FuturaStd-Bold',
    COND = 'FuturaStd-Condensed',
    HEAVY = 'FuturaStd-Heavy',
    MEDIUM = 'FuturaStd-Medium',
    LIGHT = 'FuturaStd-Light',

    // Customization of Basic Fonts
    BOLD_OBL = 'FuturaStd-BoldOblique',
    COND_BD = 'FuturaStd-CondensedBold',
    COND_BD_OBL = 'FuturaStd-CondensedBoldObl',
    COND_EX_BD = 'FuturaStd-CondensedExtraB',
    COND_LIGHT = 'FuturaStd-CondensedLight',
    COND_LIGHT_OBL = 'FuturaStd-CondensedLight',
    COND_OBL = 'FuturaStd-CondensedLightObl',
    COND_EX_BD_OBL = 'FuturaStd-CondExtraBoldObl',
    EX_BD = 'FuturaStd-ExtraBold',
    EX_BD_OBL = 'FuturaStd-ExtraBoldOblique',
    HEAVY_OBL = 'FuturaStd-HeavyOblique',
    LIGHT_OBL = 'FuturaStd-LightOblique',
    MEDIUM_OBL = 'FuturaStd-MediumOblique',
}
