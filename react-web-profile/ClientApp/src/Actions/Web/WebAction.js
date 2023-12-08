import Action from '../index';

export function setWebLanguage(data) {
    return {
        type: Action.Set_Web_Language,
        Language: data
    };
}