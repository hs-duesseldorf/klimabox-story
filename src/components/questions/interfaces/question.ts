export interface Question{
    title: string;
    choices: Choice[];
}

export interface Choice{
    imagePath?: string;
    //Im alten Angular Projekt wurde noch ein Link mit gegeben. Verwendung des Links noch unklar, da nur '#' dahinter stand
    link?: string; 
    text: string;
}