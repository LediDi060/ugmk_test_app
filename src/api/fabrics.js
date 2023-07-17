import { API_URL } from "../utils/constants/constants";

export default class FabricsApi {
    static getFabricsData = async () => {
         try {
            const result = await fetch(`${API_URL}/products`);
            const data = await result.json();
            return data
        }
        catch (error) {
            console.error(error);
        }
    }
}
