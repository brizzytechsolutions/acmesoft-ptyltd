import { Person } from "./person";

export interface Employee {
    EmployeeId: number;
    PersonId: number;
    EmployeeNum: string;
    EmployeeDate: Date;
    TerminatedDate: Date;
    person: Person;
}
