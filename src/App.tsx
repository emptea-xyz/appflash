import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;
//3rd-party
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//routes
import { Layout } from "./components/Layout";
import { ConnectionProvider } from "@solana/wallet-adapter-react";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

declare global {
  interface Window {
    xnft: any;
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
]);

function App() {
  return (
    <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL}>
      <RouterProvider router={router} />
    </ConnectionProvider>
  );
}

export default App;
