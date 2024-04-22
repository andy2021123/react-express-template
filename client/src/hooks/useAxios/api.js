import axios from "axios"

const api = axios.create({
  baseURL: '/api'
})

// jwt access and refresh token setup (optional)

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
//   },
//   (error) => Promise.reject(error)
// )

// api.interceptors.response.use((response) => response,
//   async (error) => {
//     const originalRequest = error.config
    
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true

//       try {
//         const response = await axios.get('/api/auth/refresh')
//         const { access_token } = response.data
//         localStorage.setItem('token', access_token)

//         // Retry the original request with the new token
//         originalRequest.headers.Authorization = `Bearer ${access_token}`
//         return axios(originalRequest)
//       } catch (error) {
//         // Handle refresh token error or redirect to login
//         localStorage.removeItem('token')
//         window.location.replace('/login')
//       }
//     }
//     return Promise.reject(error)
//   }
// )

export default api