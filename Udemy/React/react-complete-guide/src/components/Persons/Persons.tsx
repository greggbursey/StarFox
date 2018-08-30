import React from "react";
import Person from "./Person/Person";

const persons = (props: any): any => props.persons.map((person: any, index: number): any => {
    return <Person
        click={(): void => props.deletePersonHandler(index)}
        name={persons.name}
        age={person.age}
        key={person.id}
        changed={(event: any) => props.nameChangedHandler(event, person)}
    ></Person>
});

export default persons;