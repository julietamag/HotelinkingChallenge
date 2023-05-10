import { useEffect, useState } from "react";
import { useStateContext } from "../context/ContextProvider.jsx";
import axiosClient from "../axios-client.js";
import { toast } from "react-hot-toast";

const Profile = () => {
    const { user } = useStateContext();
    const [savedCoupons, setSavedCoupons] = useState([]);

    useEffect(() => {
        if (user.id) {
            axiosClient.get(`/coupons/saved/${user.id}`).then((res) => {
                setSavedCoupons(res.data);
            });
        }
    }, [user.id]);

    function handleRedeem(coupon) {
        axiosClient.put(`/coupon/redeem/${coupon.id}`).then((res) => {
            console.log(res.data);
            toast.success("Redeemed");
            axiosClient.get(`/coupons/saved/${user.id}`).then((res) => {
                setSavedCoupons(res.data);
            });
        });
    }

    return (
        <div className="container w-100">
              <h2 className="text-center mt-4 mb-2">Welcome {user.name}</h2>
              <h4 className="text-center mny-2">Here you can see all your coupons</h4>

            <div className=" d-flex flex-wrap justify-content-center gap-3 text-light text-center ">
                {savedCoupons.coupons &&
                    savedCoupons.coupons.map((coupon) => (
                        <div
                            key={coupon.id}
                            className="card bg-primary"
                            style={{ width: "30rem" }}
                        >
                            <div className="card-body">
                                <h5 className="card-title"> {coupon.code}</h5>
                                <h6 className="card-subtitle mb-2 text-light">
                                    {coupon.brand.name}
                                </h6>
                                <h6 className="card-subtitle mb-2 text-light">
                                    {coupon.brand.discountPercentage}%
                                </h6>
                                <button
                                disabled={!coupon.isUsable && true}
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() =>
                                        coupon.isUsable && handleRedeem(coupon)
                                    }
                                >
                                    {coupon.isUsable ? "Redeem" : "Already Used"}
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Profile;
