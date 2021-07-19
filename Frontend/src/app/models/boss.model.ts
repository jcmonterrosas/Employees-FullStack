import { Employee } from './employee.model'
import { Deserealizable } from './deserializable.model'

export class Boss implements Deserealizable {
    id?: any;
    bossId?: any;
    fullname?: string;
    function?: string;
    employees?: Employee[];

    deserialize(input: any){
        Object.assign(this, input);
        this.employees = input.employees.map((employee: any) => new Employee().deserialize(employee));
        return this;
    }
}
