// 2
type Dipendente = {
    nome: string,
    cognome: string,
    annoNascita: number,
    sesso: "m" | "f",
    anniDiServizio: number[],
    readonly emailAziendale: string,
    contratto: "indeterminato" | "determinato" | "freelance"
};

type Developer = Dipendente & {
    livelloEsperienza: "Junior" | "Mid" | "Senior",
    linguaggi?: string[],
    certificazioni: string[]
};

type ProjectManager = Dipendente & {
    teamSize: number | null,
    budgetGestito?: number,
    stakeholderPrincipali: string[]
};

type Team = {
    nome: string,
    progettoAttuale: string | null,
    budget: number,
    membri: [ProjectManager, Developer, ...Developer[]]
};