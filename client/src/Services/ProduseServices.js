import axios from 'axios';

const url = 'http://localhost:3000/api/produse';

class CategoriiServices {
    static getCategorii() {
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

export default CategoriiServices;