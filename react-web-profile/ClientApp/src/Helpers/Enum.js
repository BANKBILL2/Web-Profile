export const EnumPortfolioProject = name => {
    let key = ""
    switch (name) {
        case "KMA Marketplace": key = 1; break;
        case "KA Auto Softkeypad": key = 2; break;
        case "Ekyc App": key = 3; break;
        case "Seanheng Chatbot": key = 4; break;
        case "Thai Smart Card Reader Library": key = 5; break;
        case "WPF Smart Teller": key = 6; break;
        case "Kbol Backend FX Special Rate (SWIFT)": key = 7; break;
        case "Giving Forward Api Adapter Library": key = 8; break;
        case "Skill Development Workshop": key = 9; break;
        default: key = null;
    }
    return key;
}