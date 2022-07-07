import react from "react";


const AuthHeader = () => {
    
    let user = JSON.parse(localStorage.getItem('user') || '');
 
    const ret =  user && user.token ? { 'Authorization': 'Bearer' + user.token} : {};
 
    return ret;
}

export default AuthHeader;