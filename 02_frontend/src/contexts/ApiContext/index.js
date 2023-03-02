import React, { createContext, useContext } from 'react'
import { useSession } from '../SessionContext'
 
/**
 * Create SessionContext
 * This context will manage the session internally and provide an easy interface
 */
export const ApiContext = createContext()

const base_url = process.env.REACT_APP_SERVER_URL
const failureMsg = 'Something went wrong. Please try again.'

/**
 * Custom provider to session manager
 * This provider has a reducer for manage session state
 * @param {props} props
 */
export const ApiProvicer = ({ children }) => {
  const [{ token }] = useSession()

  // const doLogout = async (onSuccess, onFail) => {
  //   return fetch(base_url + `logout/m/crm?token=${token}`, {
  //     method: 'GET',
  //     headers: {
  //       'Origin': '',
  //       'x-access-token': `${token}`,
  //     },
  //   })
  //   .then((response) => response.json())
  //   .then(async (response) => {
  //     if (response.error) {
  //       throw response.msg;
  //     }
  //     !onSuccess || onSuccess(response);
  //     return response;
  //   })
  //   .catch((error) => {
  //     !onFail || onFail(error);
  //     return {
  //       error: 1,
  //       msg: error === sessionExpiredMsg ? sessionExpiredMsg : failureMsg
  //     }
  //   });
  // }

  // const doUploadFile = (url, data, onSuccess, onFail) => {
  //   const state = store.getState();
  //   const { jwtAccessToken } = state.currentUser;
  //   return fetch(base_url + url, {
  //       method: 'POST',
  //       headers: {
  //         'Origin': '',
  //         'x-access-token': `${jwtAccessToken}`,
  //       },
  //       body: data,
  //     })
  //     .then((response) => response.json())
  //     .then(async (response) => {
  //       if (!response) {
  //         throw failureMsg;
  //       }
  //       if (response.error && response.msg === sessionExpiredServerMsg) {
  //         throw sessionExpiredMsg;
  //       } else {
  //         !onSuccess || onSuccess(response);
  //       }
  //       return response;
  //     })
  //     .catch((error) => {
  //       !onFail || onFail(error);
  //       return {
  //         error: 1,
  //         msg: error === sessionExpiredMsg ? sessionExpiredMsg : failureMsg
  //       }
  //     });
  // }

const doPost = (url, data, onSuccess, onFail, isPut) => {
  console.log(base_url, 'url')
  return fetch(base_url + url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'x-access-token': `${token}`,
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then(async (response) => {
      if (!response) {
        throw failureMsg;
      }
      if (response.error) {
        throw response.result;
      } else {
        !onSuccess || onSuccess(response);
      }
      return response;
    })
    .catch((error) => {
      !onFail || onFail(error);
      return {
        error: true,
        result: error
      }
    });
}

const doDelete = (url, data, onSuccess, onFail) => {
  return fetch(base_url + url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': '',
        'x-access-token': `${token}`,
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then(async (response) => {
      if (!response) {
        throw failureMsg;
      }
      if (response.error) {
        throw response.result;
      } else {
        !onSuccess || onSuccess(response);
      }
      return response;
    })
    .catch((error) => {
      !onFail || onFail(error);
      return {
        error: true,
        result: error
      }
    });
}
const getRole = ()=>{
   const role_token = localStorage.getItem('role')
   if(!role_token) return -1
  return role_token[11]
}
const doGet = (url, data, onSuccess, onFail) => {
  let param = "";
  for (var key in data) {
    if (param == "") {
      param += "?";
    } else {
      param += "&";
    }

    param += key + "=" + data[key];
  }

  return fetch(base_url + url + param, {
      method: 'GET',
      headers: {
        'Origin': '',
        'x-access-token': `${token}`,
      },
    })
    .then((response) => response.json())
    .then(async (response) => {
      if (!response) {
        throw failureMsg;
      }
      if (response.error) {
        throw response.result;
      } else {
        !onSuccess || onSuccess(response);
      }
      return response;
    })
    .catch((error) => {
      !onFail || onFail(error);
      return {
        error: true,
        result: error
      }
    });
};

  const functions = {
    doPost,
    doGet,
    doDelete,
    getRole
  }

  return (
    <ApiContext.Provider value={[functions]}>
      {children}
    </ApiContext.Provider>
  )
}

/**
 * Hook to get and update session state
 */
export const useApi = () => {
  const sessionManager = useContext(ApiContext)
  return sessionManager || [{}, () => {}]
}
