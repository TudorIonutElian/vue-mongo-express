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

    static async adaugaCategorie(categorieNoua) {
        return new Promise((resolve, reject) => {
            try {
                axios({
                    method: 'post',
                    url: url,
                    data: {
                        titlu: categorieNoua.titlu,
                        descriere: categorieNoua.descriere
                    }
                });
                resolve(200);
            } catch (error) {
                reject(error);
            }
        });

    }

    static async stergeCategorie(idCategorie) {
        return new Promise((resolve, reject) => {
            try {
                axios({
                    method: 'delete',
                    url: url,
                    data: {
                        idCategorie: idCategorie
                    }
                });
                resolve(200);
            } catch (error) {
                reject(error);
            }
        });
    }
}

export default CategoriiServices;