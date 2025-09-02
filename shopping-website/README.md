# ShopHub - React Shopping Website

A complete, modern e-commerce website built with React, featuring a beautiful UI, dark/light mode, and all essential shopping features.

## Features

### 🛍️ Shopping Features
- **Product Catalog**: Browse products with search, filtering, and sorting
- **Product Details**: Detailed product pages with related products
- **Shopping Cart**: Add/remove items, update quantities, calculate totals
- **Wishlist**: Save favorite products for later
- **Checkout**: Complete checkout process

### 🔐 Authentication & User Management
- **User Registration & Login**: Secure authentication system
- **Protected Routes**: Secure access to user-specific features
- **User Account**: Manage profile and preferences
- **Session Management**: Persistent login with localStorage

### 🎨 UI/UX Features
- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes
- **Modern UI**: Clean, attractive design with Tailwind CSS
- **Smooth Animations**: Enhanced user experience

### 🚀 Technical Features
- **React Router**: Client-side routing
- **Context API**: State management
- **API Integration**: Fetch products from FakeStore API
- **Local Storage**: Persistent data storage
- **Responsive Grid**: Flexible product layouts

## Pages

1. **Home** - Featured products and hero section
2. **Shop** - Product listing with search and filters
3. **Product Detail** - Individual product information
4. **Cart** - Shopping cart management
5. **Wishlist** - Saved favorite products
6. **Checkout** - Order completion
7. **Login/Register** - User authentication
8. **Account** - User profile management
9. **About** - Company information
10. **Contact** - Contact form
11. **404** - Error page

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shopping-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation bar
│   └── ProtectedRoute.js # Route protection component
├── contexts/            # React Context providers
│   ├── AuthContext.js   # Authentication state
│   ├── CartContext.js   # Shopping cart state
│   ├── WishlistContext.js # Wishlist state
│   └── ThemeContext.js  # Dark/light mode state
├── pages/               # Page components
│   ├── Home.js         # Homepage
│   ├── Shop.js         # Product listing
│   ├── ProductDetail.js # Product details
│   ├── Cart.js         # Shopping cart
│   ├── Wishlist.js     # Wishlist
│   ├── Checkout.js     # Checkout process
│   ├── Login.js        # User login
│   ├── Register.js     # User registration
│   ├── Account.js      # User account
│   ├── About.js        # About page
│   ├── Contact.js      # Contact page
│   └── NotFound.js     # 404 page
├── utils/               # Utility functions
│   └── api.js          # API integration
├── App.js              # Main app component
└── index.js            # App entry point
```

## Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Axios** - HTTP client for API calls
- **FakeStore API** - Product data source

## Features in Detail

### Authentication System
- User registration and login
- Protected routes for authenticated users
- Persistent sessions with localStorage
- Automatic redirect after login

### Shopping Cart
- Add products to cart
- Update quantities
- Remove items
- Calculate totals with tax
- Move items to wishlist

### Wishlist Management
- Add/remove products
- Move items to cart
- Persistent storage
- Visual indicators

### Product Management
- Fetch from external API
- Search functionality
- Category filtering
- Price and rating sorting
- Related products

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Component styles in individual files
- Global styles in `src/index.css`

### API Integration
- Update `src/utils/api.js` to use your own API
- Modify API endpoints and data structure
- Add authentication headers if needed

### Features
- Add new pages in `src/pages/`
- Create new components in `src/components/`
- Extend contexts for additional state management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ using React and Tailwind CSS
