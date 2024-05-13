import  {BASE_URL} from "../Util/globalVeribels.js"

export const login = async (username, password) => {
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

        if (!result.ok) {
            throw new Error(`Login failed with status: ${result.status}`);
        }

        const data = await result.json();
        console.log(data);
        return data; // Return data from the function
    } catch (e) {
        console.log(e);
        throw e; // Re-throw the error so it can be caught and handled in the calling code
    }
}