export interface EpisodeModel {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    error?: string;
    created: Date;
}