import "../../assets/styles/bill.css";
import "../../assets/styles/button.css";
import Button  from "../Button/Button";
const Bill = () => {
  return (
    <div className="bill-container">
      <div className="row-bill">
        <p>جمع کل سفارشات:</p>
        <p>تومان 0</p>
      </div>
      <div className="row-bill">
        <p>حق سرویس و کارمزد:</p>
        <p>تومان 0</p>
      </div>
      <div className="row-bill">
        <p>تخفیف:</p>
        <p>  درصد 0 </p>
      </div>
      <div>
        <input type="text" placeholder="کد تخفیف"/>
        <input type="submit"/>
      </div>
      <div className="row-bill row-yellow">
        <p>مبلغ قابل پرداخت:</p>
        <p>تومان 0</p>
      </div>

      <Button btnStyle="btn-bill" text="ثبت سفارش " />

    </div>
  );
};

export default Bill;
