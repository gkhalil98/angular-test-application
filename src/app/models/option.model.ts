import { Deserializable } from './deserializable.model';

export class Option implements Deserializable{
    public id!: number;
    public questionId!: number;
    public name!: string;
    public isAnswer!: boolean;
    static deserialize: any;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}