import  {BASE_URL} from "../Util/globalVeribels.js"

const login = async (username, password) => {
    try {
        const result = await fetch (`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        });
        const data = await result.json();
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}

login('admin', '1234');