// INTERFACES

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IEmployee = {
  username: "tom",
  email: "tom@test.com",
  age: 42,
  employeeId: 1,
};

const client: IUser = {
  username: "tom",
  email: "tom@test.com",
  age: 42,
};
