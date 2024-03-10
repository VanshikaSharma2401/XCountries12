import axios from 'axios'; // Import axios from 'axios'

export const getCountrydata = async () => { // Make the function asynchronous to use await
    try {
        const response = await axios.get("https://restcountries.com/v3.1/all"); // Use await to wait for the response
        return response.data; // Return response.data instead of response
    } catch (e) {
        console.log(e);
        return null; // Return null in case of error
    }
}
