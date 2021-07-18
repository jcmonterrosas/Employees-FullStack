import { Deserealizable } from './deserializable.model'

export class Employee implements Deserealizable{
    id?: any;
    fullname?: string;
    function?: string;

    deserialize(input: any): this{
        return Object.assign(this, input);
    }
}
