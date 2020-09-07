import { FirebaseDatetime } from './firebase-datetime.dto';

export interface Experience {
    id: string;
    title: string;
    location: string;
    description: string;
    from: FirebaseDatetime;
    to: FirebaseDatetime;
}