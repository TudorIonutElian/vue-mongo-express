import axios from 'axios';

const url = 'http://localhost:5000/api/produse';

class ProduseServices {
    static getproduse() {
        return new Promise((resolve, reject) => {
            try {
                const data = axios.get(url);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default ProduseServices;