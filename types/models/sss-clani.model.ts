export type SssClaniModel = {
    imageUrl: string;
    intro: string;
    leadership: SssLeaderModel[];
    memberDorms: SssDormModel[];
}

export type SssLeaderModel = {
    image: string;
    backgroundImage: string;
    email: string;
    name: string;
    phone: string;
    function: string;
}

export type SssDormModel = {
    name: string;
    dormImage: string;
    location: string;
    dormMotto: string;
    noOfStudents: number;
    presidentName: string;
    presidentImage: string;
    subPresidentName: string;
    subPresidentImage: string;
}