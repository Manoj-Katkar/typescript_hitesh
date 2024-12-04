class User {
    userName: string
    readonly userEmail: string
    constructor(userName: string, userEmail: string) {
        this.userName = userName;
        this.userEmail = userEmail
    }
}

const manoj = new User("manoj", "abc@gmail.com");

console.log(manoj);

// ^now lets see if I will try to change the value of the userEmail typescript will restrict it from changing

// manoj.userEmail = "asdf@gmail.com";     //error : Cannot assign to 'userEmail' because it is a read-only property.ts(2540)
