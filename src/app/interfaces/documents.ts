export interface Documents {
    title: string;
    showQuotes: boolean;
    information: Information;
    quotes: Quote[];
}

interface Quote {
    filename: string;
}

interface Information {
    filename: string;
}