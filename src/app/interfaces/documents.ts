export interface Documents {
    title: string;
    information: Information;
    showExtraInformation: boolean;
    extraInformation: ExtraInformation[];
    showQuotes: boolean;
    quotes: Quote[];
}

interface Quote {
    filename: string;
}

interface Information {
    filename: string;
}

interface ExtraInformation {
    filename: string;
}