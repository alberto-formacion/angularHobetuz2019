export class Todo {
    /*public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }*/

    constructor(
        public id: number,
        public nombre: string,
        public terminada: boolean,
        public importante: boolean) {}

}
