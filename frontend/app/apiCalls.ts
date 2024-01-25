let connect : boolean = false;
let errorMsg: {status: number, message: string};

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
            return response.json().then((data) => {
                connect = false;
                errorMsg = { status: response.status, message: data.message };
            });
        }

        return response.json().then((data) => {
            errorMsg = { status: response.status, message: data.message };
        });
      })
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
            return response.json().then((data) => {
                connect = false;
                errorMsg = { status: response.status, message: data.message };
            });
        }

        return response.json().then((data) => {
            connect = true;
            saveJwtToCookie(data.token);
            errorMsg = { status: response.status, message: data.message };
        });
      });
} 

export const isConnected = () => {
    return connect;
}

export const getResponse = () => {
    return errorMsg;
}