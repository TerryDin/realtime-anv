const languages = [
    { name: 'Arabic (Generic)', code: 'ar-XA' },
    { name: 'Bengali (India)', code: 'bn-IN' },
    { name: 'Chinese (Mandarin)', code: 'cmn-CN' },
    { name: 'Dutch (Netherlands)', code: 'nl-NL' },
    { name: 'English (Australia)', code: 'en-AU' },
    { name: 'English (India)', code: 'en-IN' },
    { name: 'English (UK)', code: 'en-GB' },
    { name: 'English (US)', code: 'en-US' },
    { name: 'French (Canada)', code: 'fr-CA' },
    { name: 'French (France)', code: 'fr-FR' },
    { name: 'German (Germany)', code: 'de-DE' },
    { name: 'Gujarati (India)', code: 'gu-IN' },
    { name: 'Hindi (India)', code: 'hi-IN' },
    { name: 'Indonesian (Indonesia)', code: 'id-ID' },
    { name: 'Italian (Italy)', code: 'it-IT' },
    { name: 'Japanese (Japan)', code: 'ja-JP' },
    { name: 'Kannada (India)', code: 'kn-IN' },
    { name: 'Korean (South Korea)', code: 'ko-KR' },
    { name: 'Malayalam (India)', code: 'ml-IN' },
    { name: 'Marathi (India)', code: 'mr-IN' },
    { name: 'Polish (Poland)', code: 'pl-PL' },
    { name: 'Portuguese (Brazil)', code: 'pt-BR' },
    { name: 'Russian (Russia)', code: 'ru-RU' },
    { name: 'Spanish (Spain)', code: 'es-ES' },
    { name: 'Spanish (US)', code: 'es-US' },
    { name: 'Tamil (India)', code: 'ta-IN' },
    { name: 'Telugu (India)', code: 'te-IN' },
    { name: 'Thai (Thailand)', code: 'th-TH' },
    { name: 'Turkish (Turkey)', code: 'tr-TR' },
    { name: 'Vietnamese (Vietnam)', code: 'vi-VN' }
];

function getLanguage(languageCode) {
    return languages.find(lang => lang.code === languageCode);
}

export { languages, getLanguage };
