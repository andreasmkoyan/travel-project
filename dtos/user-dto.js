module.exports = class UserDto{
    id;
    name;
    surname;
    email;
    isVerified;
    type;
    role;
    constructor(model){
        this.id = model.id;
        this.name = model.name;
        this.surname = model.surname;
        this.email = model.email;
        this.isVerified = model.isVerified;
        this.type = model.type;
        this.role=model.role;
    } 
}