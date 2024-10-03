import { rtDb } from "../database";

class UsersModel {
  static async getAll() {
    try {
      const usersRef = rtDb.ref("users");
      const users = (await usersRef.get()).val();

      return users;
    } catch (error) {
      throw error;
    }
  }

  static async create(data) {
    try {
      const usersRef = rtDb.ref("users/3");

      usersRef.set({ username: "brenda" }); // REEMPLAZA LO QUE CONTIENE LA REFERENCIA POR LOS DATOS ENVIADOS POR PARÁMETRO
      // usersRef.push({ username: "Sofi" }); // CREA UN NUEVO OBJETO DENTRO DE LA REFERENCIA SIN REEMPLAZAR (GENERA ID ALEATORIO)
    } catch (error) {
      throw error;
    }
  }

  static async update(data) {
    try {
      const usersRef = rtDb.ref("users");

      usersRef.update({ nombre: "brenda" });
    } catch (error) {
      throw error;
    }
  }

  static async delete(data) {
    try {
      const usersRef = rtDb.ref("users");

      usersRef.remove();
    } catch (error) {
      throw error;
    }
  }
}

export default UsersModel;
