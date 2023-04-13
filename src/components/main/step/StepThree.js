import Input from "./Input";

export default function StepThree() {
  return (
    <div>
      <form>
        <h3 className="pb-6 text-2xl font-bold">付款資訊</h3>
        <section className="grid grid-cols-6 grid-rows-[65px_65px_65px] gap-5">
          {/* Row One */}
          <div className="col-span-4">
            <Input type="text" label="持卡人姓名" placeholder="John Doe" />
          </div>
          <div className="col-span-4">
            <Input
              type="number"
              label="卡號"
              placeholder="1111 2222 3333 4444"
            />
          </div>
          <div className="col-span-3">
            <Input type="text" label="有效期限" placeholder="MM/YY" />
          </div>
          <div className="col-span-3">
            <Input type="number" label="CVC / CCV" placeholder="123" />
          </div>
        </section>
      </form>
    </div>
  );
}
