export const initialProducts = [
  {
    id: 'diamond-cut',
    name: 'Diamond Cut',
    fullTitle: 'Diamond Cut Arecanut (Chali / Supari)',
    category: 'Premium Cut',
    subtitle: 'Premium Cut',
    tagline: "Nature's Purity. Refined Faceted Cut.",
    price: 480,
    unit: '500g',
    rating: 4.9,
    reviewsCount: 128,
    image: '/images/packshot-diamond.webp',
    inStock: true,
    stockCount: 850,
    moisture: '< 11%',
    grade: 'Super AAA Grade',
    origin: 'Mangalore & Kerala, India',
    shelfLife: '24 Months',
    processing: 'Sun-dried & Hand-sorted',
    description: 'Hand-selected whole betel nuts precision-sliced into classic faceted diamond gems. Retains natural moisture balance, crisp bite, and rich aromatic flavor. Sourced exclusively from premier plantations in Mangalore and Kerala.',
    packSizes: [
      { size: '250g Pouch', weight: '250g', price: 250, inStock: true },
      { size: '500g Pouch', weight: '500g', price: 480, inStock: true, isPopular: true },
      { size: '1kg Pouch', weight: '1kg', price: 920, inStock: true },
      { size: '5kg Bulk Sack', weight: '5kg', price: 4400, inStock: true },
      { size: '25kg Export Jute Sack', weight: '25kg', price: 21500, inStock: true }
    ],
    specifications: {
      'Moisture Content': 'Under 11%',
      'Cut Profile': 'Faceted Diamond Shape',
      'Impurities': '0% (Mechanically & Hand Cleaned)',
      'Aroma': 'Deep Natural Areca Nut',
      'Preservatives': 'Zero Chemical Additives',
      'Packaging': 'Food-Grade 3-Ply Foil Stand-Up Pouch'
    }
  },
  {
    id: 'salli-cut',
    name: 'Salli Cut',
    fullTitle: 'Areca Salli Cut (Thin Shredded Slivers)',
    category: 'Traditional Form',
    subtitle: 'Traditional Form',
    tagline: 'Fine Shredded Slivers of Natural Arecanut.',
    price: 520,
    unit: '500g',
    rating: 4.95,
    reviewsCount: 164,
    image: '/images/packshot-salli.webp',
    inStock: true,
    stockCount: 620,
    moisture: '< 10%',
    grade: 'Export Premium A+',
    origin: 'Mangalore & Kasaragod, India',
    shelfLife: '24 Months',
    processing: 'Evenly Shredded & Solar Cured',
    description: 'Expertly sliced into uniform thin matchstick slivers. Celebrated across traditional pan blends, culinary mixes, and confectionery for its delicate chew, even drying, and high tannin clarity.',
    packSizes: [
      { size: '250g Pouch', weight: '250g', price: 270, inStock: true },
      { size: '500g Pouch', weight: '500g', price: 520, inStock: true, isPopular: true },
      { size: '1kg Pouch', weight: '1kg', price: 990, inStock: true },
      { size: '5kg Bulk Sack', weight: '5kg', price: 4750, inStock: true },
      { size: '25kg Export Jute Sack', weight: '25kg', price: 23000, inStock: true }
    ],
    specifications: {
      'Moisture Content': 'Under 10%',
      'Cut Profile': 'Fine Shredded Stick Slivers',
      'Impurities': 'Zero Non-Nut Matter',
      'Aroma': 'Fresh Earthy Tropical Spice',
      'Preservatives': '100% All-Natural',
      'Packaging': 'Aroma-Lock Resealable Matte Pouch'
    }
  },
  {
    id: 'chips-cut',
    name: 'Chips Cut',
    fullTitle: 'Areca Chips Cut (Circular Coin Slices)',
    category: 'Value Added',
    subtitle: 'Value Added',
    tagline: 'Wafer-Thin Round Coins with Distinct Marbling.',
    price: 490,
    unit: '500g',
    rating: 4.88,
    reviewsCount: 98,
    image: '/images/packshot-chips.webp',
    inStock: true,
    stockCount: 940,
    moisture: '< 10.5%',
    grade: 'Export Select Grade',
    origin: 'Shimoga & Coastal Karnataka, India',
    shelfLife: '24 Months',
    processing: 'Transverse Precision Slicing',
    description: 'Precision circular disc cuts showcasing the mesmerizing dark and cream woodgrain marbling of aged arecanut kernels. Uniform thinness allows consistent roasting, flavoring, or natural enjoyment.',
    packSizes: [
      { size: '250g Pouch', weight: '250g', price: 260, inStock: true },
      { size: '500g Pouch', weight: '500g', price: 490, inStock: true, isPopular: true },
      { size: '1kg Pouch', weight: '1kg', price: 940, inStock: true },
      { size: '5kg Bulk Sack', weight: '5kg', price: 4500, inStock: true },
      { size: '25kg Export Jute Sack', weight: '25kg', price: 22000, inStock: true }
    ],
    specifications: {
      'Moisture Content': 'Under 10.5%',
      'Cut Profile': 'Round Coin Wafer Slices',
      'Impurities': '0%',
      'Aroma': 'Authentic Sun-Cured Betel Nut',
      'Preservatives': 'None (Pure Organic)',
      'Packaging': 'Food-Grade Heavy Barrier Pouch'
    }
  }
]

export const initialOrders = [
  {
    orderId: 'RAK-2026-9041',
    customer: {
      name: 'Mohamed Tariq',
      email: 'tariq.imports@dubaitrade.ae',
      phone: '+971 50 839 2104',
      company: 'Emirates Spice & Nut Trading LLC',
      country: 'United Arab Emirates'
    },
    shippingAddress: {
      line1: 'Warehouse 14, Al Quoz Industrial Area 3',
      city: 'Dubai',
      state: 'Dubai',
      postalCode: 'PO Box 48190',
      country: 'United Arab Emirates'
    },
    items: [
      {
        id: 'diamond-cut',
        name: 'Diamond Cut',
        size: '25kg Export Jute Sack',
        price: 21500,
        quantity: 8,
        total: 172000
      },
      {
        id: 'salli-cut',
        name: 'Salli Cut',
        size: '25kg Export Jute Sack',
        price: 23000,
        quantity: 4,
        total: 92000
      }
    ],
    subtotal: 264000,
    shippingFee: 0,
    tax: 0,
    totalAmount: 264000,
    currency: 'INR',
    paymentMethod: 'Bank Wire / RTGS',
    paymentStatus: 'Paid',
    orderStatus: 'Dispatched',
    trackingNumber: 'MAEU982340192',
    carrier: 'Maersk Global Cargo',
    estimatedDelivery: '2026-11-04',
    createdAt: '2026-10-21T09:30:00.000Z',
    statusTimeline: [
      { status: 'Order Placed', timestamp: '2026-10-21T09:30:00.000Z', note: 'Export order booked with Commercial Invoice' },
      { status: 'Quality Inspected', timestamp: '2026-10-22T11:15:00.000Z', note: 'Moisture and cut uniformity verified' },
      { status: 'Custom Vacuum Packed', timestamp: '2026-10-23T14:00:00.000Z', note: 'Loaded into fumigated 25kg export bags' },
      { status: 'Dispatched to Mangalore Port', timestamp: '2026-10-24T08:00:00.000Z', note: 'Customs cleared for vessel loading' }
    ]
  },
  {
    orderId: 'RAK-2026-8812',
    customer: {
      name: 'Venkatesh Rao',
      email: 'venkat.rao@bangaloretraders.in',
      phone: '+91 98450 12345',
      company: 'Sri Balaji Supari Stores',
      country: 'India'
    },
    shippingAddress: {
      line1: '#42, Avenue Road, City Market',
      city: 'Bangalore',
      state: 'Karnataka',
      postalCode: '560002',
      country: 'India'
    },
    items: [
      {
        id: 'chips-cut',
        name: 'Chips Cut',
        size: '5kg Bulk Sack',
        price: 4500,
        quantity: 2,
        total: 9000
      },
      {
        id: 'diamond-cut',
        name: 'Diamond Cut',
        size: '1kg Pouch',
        price: 920,
        quantity: 3,
        total: 2760
      }
    ],
    subtotal: 11760,
    shippingFee: 0,
    tax: 588,
    totalAmount: 12348,
    currency: 'INR',
    paymentMethod: 'UPI / Online (Test Mode)',
    paymentStatus: 'Paid',
    orderStatus: 'Processing',
    trackingNumber: 'DELHIVERY98127391',
    carrier: 'Delhivery Express Surface',
    estimatedDelivery: '2026-10-27',
    createdAt: '2026-10-23T16:20:00.000Z',
    statusTimeline: [
      { status: 'Order Placed', timestamp: '2026-10-23T16:20:00.000Z', note: 'Payment confirmed online' },
      { status: 'Processing & Batch Allocation', timestamp: '2026-10-24T10:00:00.000Z', note: 'Allocated from Mangalore Main Hub' }
    ]
  }
]

export const initialEnquiries = [
  {
    id: 'ENQ-101',
    name: 'Suresh Patel',
    company: 'Gujarat Supari Mart',
    email: 'suresh@gujaratsupari.com',
    phone: '+91 98250 88991',
    productOfInterest: 'Diamond Cut & Salli Cut',
    volumeRequired: '2 Metric Tons / Month',
    destination: 'Ahmedabad, Gujarat',
    message: 'We are expanding our wholesale distribution across Western India. Looking for steady supply of AAA grade diamond cut and fine salli cuts. Please share FOB pricing and sample dispatch details.',
    status: 'New',
    createdAt: '2026-10-24T11:00:00.000Z'
  },
  {
    id: 'ENQ-100',
    name: 'Farooq Al-Mansoor',
    company: 'Al Mansoor General Trading LLC',
    email: 'farooq@almansoor-trade.com',
    phone: '+971 4 223 9988',
    productOfInterest: 'Diamond Cut (Export Grade)',
    volumeRequired: '1 x 20ft Container (15 Tons)',
    destination: 'Jebel Ali Port, UAE',
    message: 'Requesting quotation for 20ft FCL of Diamond Cut Arecanut in 25kg vacuum-sealed poly-lined jute bags. CIF Jebel Ali terms.',
    status: 'Contacted',
    createdAt: '2026-10-23T14:15:00.000Z'
  }
]

export const initialSettings = {
  storeName: 'RAK TRADERS',
  email: 'raktraders784@gmail.com',
  phone: '+91 7358 807 848',
  whatsapp: '+917358807848',
  location: 'Mangalore, Karnataka & Kerala, India',
  currency: 'INR',
  currencySymbol: '₹',
  enableCOD: true,
  enableTestPayment: true,
  freeShippingAbove: 1500,
  flatShippingRate: 150,
  taxRatePercent: 5
}

export const initialAdmin = {
  email: 'admin@raktraders.com',
  name: 'RAK Traders Head Office'
}
