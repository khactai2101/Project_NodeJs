import axios from "axios";

const token = localStorage.getItem("asscessToken");

export const getAllProducts = (token: any) => {
  return axios
    .get("http://localhost:8080/api/v1/products", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};

export const BlockProducts = (data: any) => {
  return axios
    .delete(`http://localhost:8080/api/v1/products/${data.id}`, {
      headers: { Authorization: `Bearer ${data.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
    });
};

export const getOneProduct = (id: number) => {
  return axios
    .get(`http://localhost:8080/api/v1/products/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      throw error;
    });
};
