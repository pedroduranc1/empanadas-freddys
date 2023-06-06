import { ENV } from "@/utils/constans";

export class Empanadas {
  async getEmpanadas() {
    try {
      const url = `${ENV.LOCALHOST}${ENV.EMPANADAS.GET_EMPANADAS}`;

      const respuesta = await fetch(url);
      const data = await respuesta.json();

      if (respuesta.status !== 200) throw data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async createEmpanada(empanada) {
    try {
      const url = `${ENV.LOCALHOST}${ENV.EMPANADAS.CREATE_EMPANADA}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: empanada }),
      };

      const respuesta = await fetch(url, params);
      const data = await respuesta.json();

      if (respuesta.status !== 200) throw data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateEmpanada(empanadaId, empanadaNueva) {
    try {
      const url = `${ENV.LOCALHOST}${ENV.EMPANADAS.CREATE_EMPANADA}/${empanadaId}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: empanadaNueva }),
      };

      const respuesta = await fetch(url, params);
      const data = await respuesta.json();

      if (respuesta.status !== 200) throw data;

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteEmpanada(empanadaId) {
    try {
      const url = `${ENV.LOCALHOST}${ENV.EMPANADAS.CREATE_EMPANADA}/${empanadaId}`;
      const params = {
        method: "DELETE"
      };

      const respuesta = await fetch(url, params);
      const data = await respuesta.json();

      if (respuesta.status !== 200) throw data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}
