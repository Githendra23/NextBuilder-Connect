let connect : boolean = false;
let errorMsg: {status: number, message: string};

interface data {
    token: string
}

export const register = async (name: string, surname: string, email: string, password: string) => {
    await fetch("http://localhost:8080/user/register", {
      method: "POST",
      body: JSON.stringify({ name, surname, email, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          errorMsg = {status: response.status, message: response.statusText};
        }

        errorMsg = {status: response.status, message: response.statusText};
      });
}

export const login = async (email: string, password: string) => {
    const saveJwtToCookie = (jwtToken: string) => {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); // 1 hour in milliseconds
    
        document.cookie = `jwt=${jwtToken}; expires=${expirationDate.toUTCString()}; path=/;`;
      };

    await fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
            connect = false;
            errorMsg = {status: response.status, message: response.statusText}
        }
      })
      .then((data) => {
        // saveJwtToCookie(data.token);

        connect = true;
        errorMsg = {status: 200, message: ""};
        console.log(errorMsg);
      });
} 

export const isConnected = () => {
    return connect;
}

export const getError = () => {
    return errorMsg;
}