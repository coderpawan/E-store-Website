import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="checkout_sum">
              <div className="NoOfItems">
                Subtotal ({basket?.length} items):
              </div>
              <strong>{value}</strong>
            </div>
            <div className="gift">
              <input type="checkbox" className="check"></input>
              <div className="check_title">
                The order contains a <b>gift</b>
              </div>
            </div>
            <button
              className="Proceed"
              onClick={(e) => history.push("/payment")}
            >
              Proceed to Checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;
