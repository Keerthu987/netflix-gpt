export const checkValidData=(email,password,name)=>{
    let isName=true;
    if(name) {
        isName=  /^[a-zA-Z ]{2,30}$/.test(name)}
        
    const isEmailValid= /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPassValid=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password)

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPassValid) return "Password is not valid";
    if(!isName) return "Name should be Valid"

    return null;


}