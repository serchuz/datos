import _ from 'lodash';
import axios from 'axios';
import config from '../../config'

export class DataService {   

    /**
     * Obtiene los datos de una petición ajax basada en promises
     * 
     */
    fetchData() {
        this.data = [];

        return axios.get(config.dataService.url).then((res) => {
            this.data = res.data.data;
            return res;
        });
    }

    /**
     * Devuelve de un detarminado campo el agrupado por cantidad.
     * 
     * @param {string} campo - Nombre del campo de los datos
     */
    countGroupAll(campo) {
        let agrupados = [];
        let filtros = this.getFiltro(campo);

        filtros.forEach((item) => {
            let cantidad = this.countGroup(campo, item);
            agrupados.push({ dato: item, cantidad: cantidad })
        })

        return agrupados;
    }

    /**
     * Devuelve de un determinado campo y valor, la cantidad
     * 
     * @param {string} campo 
     * @param {string} dato 
     */
    countGroup(campo, dato) {
        let count = 0;

        this.data.forEach((element) => {
            if (element[campo] == dato)
                count++;
        });

        return count;
    }

    /**
     * Devuelve de un determinado campo, los diferentes valores que puede tener.
     * Tambien devuelve si dentro de un dato los hay subdatos separados por |
     * 
     * @param {string} campo 
     */
    getFiltro(campo) {
        let filtro = [];

        this.data.forEach((element) => {
            let dato = element[campo];

            // Excluyo los nulls
            if (dato) {
                // Obtiene todos los sub-datos dentro del dato.
                let subdatos = dato.split("|").map(x => _.trim(x).replace(',', ''));
                filtro.push(...subdatos);
            }
        });

        // Obtiene valos unicos y los ordena.
        filtro = _.sortBy(_.uniq(filtro));
        return filtro;
    }

    /**
     * Devuelve un array copia de los datos originales filtrados
     * 
     * @param {Objeto} filtro - Es un objeto con un valor setea para los diferentes campos.
     */
    setFiltro(filtro) {
        let filterData = this.data.slice();

        for (var key in filtro) {
            var element = filtro[key];

            if (element !== '') {
                filterData = filterData.filter(item => {
                    // Excluyo los nulls
                    if (!item[key])
                        return false;

                    return item[key].includes(element);
                });
            }
        }

        return filterData;
    }
}
