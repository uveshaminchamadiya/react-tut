import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./route/productList"
import ProductDetails from "./route/productDetails"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/:slug/productDetails/:id",
      element: <ProductDetails />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
