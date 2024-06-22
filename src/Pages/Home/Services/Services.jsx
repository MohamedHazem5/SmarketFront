import { MdOutlineLocalShipping } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

function Services() {
  const data = [
    {
      icon: <MdOutlineLocalShipping />,
      title: "Free Shipping",
      disc: "Order above $200",
    },
    {
      icon: <CiMoneyBill />,
      title: "Money-back",
      disc: "30 days guarantee",
    },
    {
      icon: <CiLock />,
      title: "Secure Payment",
      disc: "Secured by Stripe",
    },
    {
      icon: <FiPhone />,
      title: "24/7 Support",
      disc: "Phone and Email support",
    },
  ];

  return (
    <>
      <div className="services">
        <div className="container">
          <div className="py-5 my-2">
            <h3 className="fw-bold"><span className="sixth-color">Our</span> Services</h3>
            <div className="ourservices row d-flex justify-content-between align-items-center mt-3 flex-wrap">
            {data.map((e) => 
              <div className="box col-lg-2 col-4 m-1 rounded-3" data-aos="zoom-in">
                <div className="icon fs-1 fw-normal mb-3">
                  {e.icon}
                </div>
                <h4 className="fs-3 fw-bolc">{e.title}</h4>
                <p className="text-black-50">{e.disc}</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
