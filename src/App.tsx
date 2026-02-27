import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet,
  Link
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Words from "./pages/Words";
import WordDetail from "./pages/WordDetail";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Header from "./components/Header";

const queryClient = new QueryClient();

// Create root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <Header />
          <Outlet />
          <Toaster />
          <Sonner />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create words route
const wordsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/words',
  component: Words,
})

// Create word detail route
const wordDetailRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/words/$id',
  component: WordDetail,
})

// Create categories route
const categoriesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/categories',
  component: Categories,
})

// Create about route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  wordsRoute,
  wordDetailRoute,
  categoriesRoute,
  aboutRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;