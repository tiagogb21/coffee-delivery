import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./Router.tsx";

import "./index.css";
import { ShoppingCartProvider } from "./contexts/cart.tsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <HelmetProvider>
            <ShoppingCartProvider>
                <RouterProvider router={router} />
            </ShoppingCartProvider>
        </HelmetProvider>
    </StrictMode>
);
