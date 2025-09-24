//Generic trong TS



type User = {
    name: string,
    age: number
}

const indentity = <Type> (value : Type) => value;

const result = indentity<User>(
    {
        name: "John", 
        age: 30
    }
);