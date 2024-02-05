import React,{useState} from "react"
import PropTypes from 'prop-types';
export const MyFunction =()=>{
    return (
        <>
        <Student name ="Evans" age = {30} isAstudent ={true} />
        <Student name ="Timo" age = {20} isAstudent ={true} />
        <Student name ="Fridah" age = {10} isAstudent ={false} />
        <Student  />
        <h1>Hello I am a function</h1>
        </>
    );

}
export function Student(user: any){
return(
    <><p>Name: {user.name} </p>
     {" "} <p> age:{user.age}</p>
     <p> Is she/he a students:{user.isAstudent? "Yes": "No"}</p>
    </>
);
}

Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isAstudent: PropTypes.bool

}
Student.defaultProps = {
    name: "Gauest",
    age:0
}