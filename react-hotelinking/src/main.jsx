import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ContextProvider } from "./context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextProvider>
            <Toaster />
        <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>
);
