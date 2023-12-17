export const EnumPortfolioProject = key => {
    let value = ""
    switch (key) {
        case 1 : value = "KMA Marketplace"; break;
        case 2 : value = "Krungsri Auto SmartQ"; break;
        case 3 : value = "Ekyc App"; break;
        case 4 : value = "Seanheng Chatbot"; break;
        case 5 : value = "Thai Smart Card Reader Library"; break;
        case 6 : value = "SCB Smart Teller"; break;
        case 7 : value = "Kbol Backend FX Special Rate (SWIFT)"; break;
        case 8 : value = "Giving Forward Api Adapter Library"; break;
        case 9 : value = "Skill Development Workshop"; break;
        default: value = null;
    }
    return value;
}