// lets Now I am creating the simple user 

const User = {
    name: "Manoj",
    email: "manoj@abc.com",
    isActive: false
}


// creating the one method to create the object which will have the All the properties of the User Object 
const createUser = ({ name: string, isPaid: boolean }) => {

}

//! directlly adding the un-known key will throw the error 

// createUser({ name: "Manoj", isPaid: true, email: "abc@gmail.com" });  //!now here if I will pass the key which is not defined in the function parameter then it will throw the error 


// but if we create the another object then give that in the createUser method it will not throw the error 

let newUser = {
    name: "Manoj",
    isPaid: true,
    email: "abc@gmail.com"   //^this is not mensioned on the function deination still it is getting allowed to add using the same method that is createUser
}

createUser(newUser);     //!now this will not throw the error this is the odd behaviour of the objects in typescript 



// now the example of the function which is returning the object itself 
// in the below function it is taking the prameter in the object format and and also returing the object only that I have explicitlly mensioned it 
// should return the object with the following keys with corresponding value 
// { courseNameFinal: string, courseFeesFinal: number }


const createCourse = ({ courseName: string, courseFees: number }): { courseNameFinal: string, courseFeesFinal: number } => {
    return { courseNameFinal: string, courseFeesFinal: number }
}


createCourse({ courseName: "react-native", courseFees: 1000 });  //calling the function





//! ====================================== Way the we prefer to create the objects ==================

// ^ 1) using the type Aliases 


type User2 = {
    name: string,
    email: string,
    isActive: boolean
}


const createNewUser2 = (user: User2): User2 => {   //here we are accepting the user of the type User2 and also wanted this function should return the object having the same properties as the User 

    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    }
}

const newllyCreatedUser2 = createNewUser2({ name: "Manoj", email: "abc@gmail.com", isActive: false });

console.log(newllyCreatedUser2);

export { }
