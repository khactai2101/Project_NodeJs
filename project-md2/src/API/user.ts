import axios from "axios";
import BaseAxios from "./axiosClient";

const token = localStorage.getItem("asscessToken");
export const getAllUsers = (token: any) => {
  return axios
    .get("http://localhost:8080/api/v1/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      console.error("Error!!!!", error);
      return [];
    });
};
export const getOneUser = (accessToken: any) => {
  return axios
    .get(`http://localhost:8080/api/v1/users/profile`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((response) => {
      // console.log(response.data.data.id);

      return response.data;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};

// export const changeStatusUser = (id: number) => {
//   return axios
//     .delete(`http://localhost:8080/api/v1/users/${id}`,{headers: { Authorization: `Bearer ${token}}}`})
//     .then((response) => {
//       console.log(response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.error("Error!!!!", error);
//     });
// };
export const changeStatusUser = (req: any) => {
  return axios
    .delete(`http://localhost:8080/api/v1/users/${req.id}`, {
      headers: { Authorization: `Bearer ${req.token}` },
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};
export const addToCart = async (dataCart: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${dataCart.token}`,
    },
  };

  return await axios
    .post(`http://localhost:8080/api/v1/cart`, dataCart.dataCart, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};
export const createOrderItem = async (dataCart: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${dataCart}`,
    },
  };

  return await axios
    .post(`http://localhost:8080/api/v1/orderItems`, null, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};

export const createOrder = async (data: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  };

  return await axios
    .post(`http://localhost:8080/api/v1/order`, data, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};
export const getAllProductSize = async () => {
  return await axios
    .get("http://localhost:8080/api/v1/productSizes")
    .then((response: any) => {
      return response.data.data;
    })
    .catch((error: any) => {
      console.error("Error!!!!", error);
      return [];
    });
};

export const getAllCartByUser = async (dataCart: any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${dataCart}`,
    },
  };

  return await axios
    .get(`http://localhost:8080/api/v1/cart/one`, config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};

export const login = async (data: any) => {
  return await axios
    .post(`http://localhost:8080/api/v1/auth/login`, data)
    .then((response) => {
      console.log(response);

      return response;
    })
    .catch((error) => {
      console.error("Error!!!!", error);
      return [];
    });
};
// export const login = (data: object) =>
//   BaseAxios({
//     url: "/auth/login",
//     method: "POST",
//     // withCredentials: true,
//     data: data,
//   });
