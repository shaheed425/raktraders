import React, { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

const AuthContext = createContext()

const TOKEN_KEY = 'rak_traders_admin_token'
const USER_KEY = 'rak_traders_admin_user'

export const AuthProvider = ({ children }) => {
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem(TOKEN_KEY))
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = localStorage.getItem(USER_KEY)
      return saved ? JSON.parse(saved) : null
    } catch {
      return null
    }
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (adminToken) {
      api.verifyAdmin(adminToken)
        .then(res => {
          if (!res.success) {
            logout()
          }
        })
        .catch(() => logout())
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [adminToken])

  const login = async (email, password) => {
    const res = await api.adminLogin(email, password)
    if (res.success && res.token) {
      setAdminToken(res.token)
      setAdminUser(res.admin)
      localStorage.setItem(TOKEN_KEY, res.token)
      localStorage.setItem(USER_KEY, JSON.stringify(res.admin))
      return { success: true }
    }
    return { success: false, message: res.message || 'Login failed' }
  }

  const logout = () => {
    setAdminToken(null)
    setAdminUser(null)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_KEY)
  }

  return (
    <AuthContext.Provider
      value={{
        adminToken,
        adminUser,
        isAuthenticated: !!adminToken,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
