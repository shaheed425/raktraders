import { initialProducts, initialOrders, initialEnquiries, initialSettings, initialAdmin } from '../data/staticData'

const STORAGE_KEYS = {
  PRODUCTS: 'rak_static_products_v2',
  ORDERS: 'rak_static_orders_v2',
  ENQUIRIES: 'rak_static_enquiries_v2',
  SETTINGS: 'rak_static_settings_v2'
}

function getStored(key, fallback) {
  try {
    const item = localStorage.getItem(key)
    if (!item) {
      localStorage.setItem(key, JSON.stringify(fallback))
      return JSON.parse(JSON.stringify(fallback))
    }
    return JSON.parse(item)
  } catch (e) {
    console.warn(`Error reading ${key} from localStorage, using fallback`, e)
    return JSON.parse(JSON.stringify(fallback))
  }
}

function setStored(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.warn(`Error saving ${key} to localStorage`, e)
  }
}

// Simulated minor async delay for realistic UI micro-interactions
const delay = (ms = 80) => new Promise(resolve => setTimeout(resolve, ms))

export const api = {
  // Products
  async getProducts() {
    await delay(50)
    const products = getStored(STORAGE_KEYS.PRODUCTS, initialProducts)
    return { success: true, data: products }
  },

  async getProduct(id) {
    await delay(50)
    const products = getStored(STORAGE_KEYS.PRODUCTS, initialProducts)
    const product = products.find(p => String(p.id).toLowerCase() === String(id).toLowerCase())
    if (!product) {
      return { success: false, message: 'Product not found' }
    }
    return { success: true, data: product }
  },

  async updateProduct(id, data, token) {
    await delay(80)
    const products = getStored(STORAGE_KEYS.PRODUCTS, initialProducts)
    const index = products.findIndex(p => String(p.id) === String(id))
    if (index === -1) {
      return { success: false, message: 'Product not found' }
    }
    products[index] = { ...products[index], ...data, updatedAt: new Date().toISOString() }
    setStored(STORAGE_KEYS.PRODUCTS, products)
    return { success: true, data: products[index] }
  },

  // Orders
  async createOrder(orderData) {
    await delay(100)
    const orders = getStored(STORAGE_KEYS.ORDERS, initialOrders)
    
    // Auto-generate realistic order reference and tracking ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000)
    const newOrderId = orderData.orderId || `RAK-2026-${randomSuffix}`
    const trackingNum = orderData.trackingNumber || `DELHIVERY${Math.floor(10000000 + Math.random() * 90000000)}`

    const newOrder = {
      orderId: newOrderId,
      trackingNumber: trackingNum,
      carrier: orderData.carrier || 'Delhivery Express Surface',
      orderStatus: orderData.orderStatus || 'Processing',
      paymentStatus: orderData.paymentStatus || 'Paid (Verified)',
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      statusTimeline: [
        {
          status: 'Order Placed',
          timestamp: new Date().toISOString(),
          note: `Order booked successfully with ${orderData.paymentMethod || 'Selected Payment Method'}`
        },
        {
          status: 'Processing',
          timestamp: new Date().toISOString(),
          note: 'Allocated from Mangalore Main Fulfillment Hub'
        }
      ],
      ...orderData
    }

    orders.unshift(newOrder)
    setStored(STORAGE_KEYS.ORDERS, orders)
    return { success: true, data: newOrder }
  },

  async getOrders(token) {
    await delay(60)
    const orders = getStored(STORAGE_KEYS.ORDERS, initialOrders)
    return { success: true, data: orders }
  },

  async trackOrder(orderId) {
    await delay(80)
    const orders = getStored(STORAGE_KEYS.ORDERS, initialOrders)
    const query = String(orderId || '').trim().toLowerCase()
    
    const found = orders.find(o => 
      String(o.orderId || '').toLowerCase() === query ||
      String(o.trackingNumber || '').toLowerCase() === query
    )

    if (found) {
      return { success: true, data: found }
    }
    return { success: false, message: 'No matching order found with this reference number.' }
  },

  async updateOrderStatus(orderId, status, note, token) {
    await delay(80)
    const orders = getStored(STORAGE_KEYS.ORDERS, initialOrders)
    const index = orders.findIndex(o => String(o.orderId) === String(orderId))
    if (index === -1) {
      return { success: false, message: 'Order not found' }
    }

    const order = orders[index]
    const updatedTimeline = [
      ...(order.statusTimeline || []),
      {
        status,
        timestamp: new Date().toISOString(),
        note: note || `Status updated to ${status}`
      }
    ]

    orders[index] = {
      ...order,
      orderStatus: status,
      statusTimeline: updatedTimeline,
      updatedAt: new Date().toISOString()
    }

    setStored(STORAGE_KEYS.ORDERS, orders)
    return { success: true, data: orders[index] }
  },

  // Enquiries & RFQ
  async submitEnquiry(enquiryData) {
    await delay(100)
    const enquiries = getStored(STORAGE_KEYS.ENQUIRIES, initialEnquiries)
    const newEnquiry = {
      id: `ENQ-${Math.floor(100 + Math.random() * 900)}`,
      createdAt: new Date().toISOString(),
      status: 'New',
      ...enquiryData
    }
    enquiries.unshift(newEnquiry)
    setStored(STORAGE_KEYS.ENQUIRIES, enquiries)
    return { success: true, data: newEnquiry, message: 'Enquiry submitted successfully' }
  },

  async getEnquiries(token) {
    await delay(60)
    const enquiries = getStored(STORAGE_KEYS.ENQUIRIES, initialEnquiries)
    return { success: true, data: enquiries }
  },

  async updateEnquiryStatus(id, status, token) {
    await delay(80)
    const enquiries = getStored(STORAGE_KEYS.ENQUIRIES, initialEnquiries)
    const index = enquiries.findIndex(e => String(e.id) === String(id))
    if (index === -1) {
      return { success: false, message: 'Enquiry not found' }
    }
    enquiries[index] = {
      ...enquiries[index],
      status,
      updatedAt: new Date().toISOString()
    }
    setStored(STORAGE_KEYS.ENQUIRIES, enquiries)
    return { success: true, data: enquiries[index] }
  },

  // Admin Auth
  async adminLogin(email, password) {
    await delay(120)
    const normalizedEmail = String(email || '').trim().toLowerCase()
    // Accept standard admin credentials or demo credentials
    if (
      (normalizedEmail === 'admin@raktraders.com' && (password === 'Admin@RAK2026!' || password === 'admin' || password === 'admin123')) ||
      (normalizedEmail.includes('admin') && password.length >= 4)
    ) {
      return {
        success: true,
        token: 'static_admin_token_rak_2026',
        admin: initialAdmin
      }
    }
    return {
      success: false,
      message: 'Invalid email or password. (Hint: Use admin@raktraders.com / Admin@RAK2026! or "admin")'
    }
  },

  async verifyAdmin(token) {
    await delay(40)
    if (token) {
      return { success: true, admin: initialAdmin }
    }
    return { success: false, message: 'Invalid or expired session' }
  },

  // Settings
  async getSettings() {
    await delay(50)
    const settings = getStored(STORAGE_KEYS.SETTINGS, initialSettings)
    return { success: true, data: settings }
  },

  async updateSettings(settings, token) {
    await delay(80)
    setStored(STORAGE_KEYS.SETTINGS, settings)
    return { success: true, data: settings }
  }
}
