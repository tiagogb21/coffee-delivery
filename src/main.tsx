import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./Router.tsx";

import "./index.css";
import { ShoppingCartProvider } from "./contexts/cart.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ShoppingCartProvider>
            <RouterProvider router={router} />
        </ShoppingCartProvider>
    </StrictMode>
);
