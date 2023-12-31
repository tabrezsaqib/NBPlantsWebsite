import axios from "axios"
import * as localStore from "../../generics/localStore"

export async function get(url) {
  return axios(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (response) => {
      return await response
    })
    .catch((err) => {
      return err.response.data
    })
}

export async function adminLogin(url, params = {}) {
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then(async (response) => {
      return await response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export async function post(url, params = {}) {
  let accessToken = localStore.getToken()
  return fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer" + accessToken,
    },
    body: JSON.stringify(params),
  })
    .then(async (response) => {
      return await response
    })
    .catch((err) => {
      console.log(err)
    })
}

export function capitalizeFirstLetter(data) {
  return data.toString().charAt(0).toUpperCase() + data.slice(1)
}
