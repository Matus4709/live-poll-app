export interface PollOption {
    id: number;
    name: string;
    votes: number;
}
export interface Poll {
    id: number;
    question: string;
    options: PollOption[];
}