import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './home/home';

import './App.css';

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
