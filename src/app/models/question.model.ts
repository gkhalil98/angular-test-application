import { Option } from './option.model';
import { Deserializable } from './deserializable.model';

export class Question implements Deserializable {
    id!: number;
    name!: string;
    options!: Option[];
    isAnswered!: boolean;


    deserialize(input: any): this {
        Object.assign(this, input);
        this.options = input.options.map((option: any) => new Option.deserialize(option));

        return this;
    }

    getQuestion(id: number) {
        return this.name;
    }
}