import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

const STORAGE_KEY = 'rak_traders_cart_v1'

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch (e) {
      console.warn('LocalStorage error:', e)
    }
  }, [items])

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage(null)
    }, 3200)
  }

  const addToCart = (product, selectedSize = null, quantity = 1) => {
    const sizeObj = selectedSize || (product.packSizes && product.packSizes[0]) || { size: '500g Pouch', price: product.price || 480 }
    const sizeName = typeof sizeObj === 'string' ? sizeObj : sizeObj.size
    const unitPrice = typeof sizeObj === 'object' && sizeObj.price !== undefined ? sizeObj.price : (product.price || 480)

    setItems(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.size === sizeName)
      if (existingIndex > -1) {
        const copy = [...prev]
        copy[existingIndex].quantity += quantity
        return copy
      } else {
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            fullTitle: product.fullTitle || product.name,
            category: product.category,
            size: sizeName,
            price: unitPrice,
            image: product.image,
            quantity: Math.max(1, quantity)
          }
        ]
      }
    })

    showToast(`Added ${quantity}x ${product.name} (${sizeName}) to cart`)
    setIsCartOpen(true)
  }

  const updateQuantity = (id, size, delta) => {
    setItems(prev => {
      return prev.map(item => {
        if (item.id === id && item.size === size) {
          const newQty = item.quantity + delta
          return newQty > 0 ? { ...item, quantity: newQty } : null
        }
        return item
      }).filter(Boolean)
    })
  }

  const removeFromCart = (id, size) => {
    setItems(prev => prev.filter(item => !(item.id === id && item.size === size)))
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 1500 || subtotal === 0 ? 0 : 150
  const tax = Math.round(subtotal * 0.05) // 5% GST on spices/agricultural nuts
  const total = subtotal + shipping + tax

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        shipping,
        tax,
        total,
        toastMessage
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
