import axios from 'axios';

const url = '/api/categorii/';

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