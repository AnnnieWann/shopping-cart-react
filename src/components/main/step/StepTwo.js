export default function StepTwo() {
  return (
    <div>
      <form>
        <h3 className="pb-6 text-2xl font-bold">運送方式</h3>

        {/* Option one */}
        <label className="border border-black flex flex-row justify-center items-center py-3 px-5 mb-6 rounded">
          <div className="w-1/6 mr-5">
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              checked
            />
          </div>
          <div className="radio-info w-4/5">
            <div className="flex flex-row justify-between">
              <div className="text">標準運送</div>
              <div className="price">免費</div>
            </div>
            <div className="period col col-12">約 3~7 個工作天</div>
          </div>
        </label>

        {/* Option two */}
        <label className="border border-black flex flex-row justify-center items-center py-3 px-5 rounded">
          <div className="w-1/6 mr-5">
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              checked
            />
          </div>
          <div className="radio-info w-4/5">
            <div className="flex flex-row justify-between">
              <div className="text">DHL 貨運</div>
              <div className="price">$500</div>
            </div>
            <div className="period col col-12">48 小時內送達</div>
          </div>
        </label>
      </form>
    </div>
  );
}
