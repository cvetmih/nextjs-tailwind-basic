import webConfig from "../website.config";

export function generateTitle(value, separator = webConfig.titleSeparator) {
    if (!value) return webConfig.titleSuffix;

    return `${value} ${separator} ${webConfig.titleSuffix}`;
}