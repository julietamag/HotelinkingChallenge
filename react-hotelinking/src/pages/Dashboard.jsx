import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import axiosClient from "../axios-client.js";
import { toast } from "react-hot-toast";

export const Dashboard = () => {
    const { user, setBrands, brands } = useStateContext();

    useEffect(() => {
        setBrands();
    }, []);

    function handleSave(brand) {
        axiosClient
            .post(`/users/${user.id}/save-coupon/${brand.id}`)
            .then(() => {
                toast.success("Saved 🔑");
            })
            .catch((err) => console.error(err));
    }

    return (
        <div className="container w-100">
          <h2 className="text-center my-4">Browse all our amazing coupons!</h2>
            <div className=" d-flex flex-wrap justify-content-center gap-3 text-light text-center">
                {brands.brands &&
                    brands.brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="card bg-primary"
                            style={{ width: "30rem" }}
                        >
                            <div className="card-body">
                                <h5 className="card-title"> {brand.name}</h5>
                                <h6 className="card-subtitle mb-2 text-light">
                                    {brand.discountPercentage}%
                                </h6>
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => handleSave(brand)}
                                >
                                    Save Coupon
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
