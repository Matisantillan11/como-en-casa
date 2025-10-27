# 🧉 Como en Casa

Como en Casa is a community-powered project that helps people around the world find familiar flavors and products from Latin America — from yerba mate to snacks and local stores.

Whether you're traveling or living abroad, this map makes it easy to discover places that feel like home. Users can share new spots, rate experiences, and connect with others who miss the same tastes.

Built for Latin travelers, dreamers, and food lovers — wherever they are.

## 🌟 Features

- **Interactive Map**: Discover Latin American stores, restaurants, and markets worldwide
- **Community-Driven**: Users can add new locations and share their experiences
- **Location Discovery**: Find familiar products and flavors wherever you are
- **Rating System**: Rate and review places to help others in the community
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 16.0.0** - React framework for production
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **HugeIcons** - Icon library for React

### Maps & Location
- **Mapbox GL JS 3.16.0** - Interactive maps
- **@types/mapbox-gl** - TypeScript definitions

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Package manager

## 📋 Requirements

### System Requirements
- **Node.js** >= 20.0.0
- **pnpm** >= 9.0.0 (recommended)

### Environment Variables
Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
```

### Mapbox Setup
1. Sign up for a [Mapbox account](https://www.mapbox.com/)
2. Get your access token from the [Mapbox dashboard](https://account.mapbox.com/access-tokens/)
3. Add the token to your `.env.local` file

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Matisantillan11/como-en-casa.git
cd como-en-casa
```

### 2. Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install
```

### 3. Set Up Environment Variables
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your actual values
```

### 4. Run the Development Server
```bash
# Using pnpm
pnpm dev
```

### 5. Open Your Browser
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.


## 🎯 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint



## 🙏 Acknowledgments

- **Mapbox** for providing excellent mapping services
- **Next.js team** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS framework
- **The Latin American community** for inspiration and support

## 📞 Support

If you have any questions or need help, please:

- Open an [issue](https://github.com/Matisantillan11/como-en-casa/issues) on GitHub
- Contact us at [matias1.santillan@gmail.com]

---

Made with ❤️ for the Latin American community around the world.
