import { useContext } from "react";
import { FormContext } from "../../../context/FormContext";
import Input from "./Input";

export default function StepOne() {
  const { handleFormChange } = useContext(FormContext);
  const { formData } = useContext(FormContext);
  return (
    <div>
      {/* address phase */}
      <h3 className="pb-6 text-2xl font-bold">寄送地址</h3>
      <section className="grid grid-cols-6 grid-rows-[65px_65px_65px] gap-5">
        {/* Row One */}
        <div className="col-span-2">
          <div className="text-xs text-gray-600 mb-2">稱謂</div>
          <select
            value={formData.title}
            name="title"
            className="box-border rounded border border-gray-400 w-full h-3/5 text-xs"
            onChange={handleFormChange}
          >
            <option value="mr">先生</option>
            <option value="ms">女士</option>
            <option value="mx">不明</option>
          </select>
        </div>
        <div className="col-span-4">
          <Input
            type="text"
            name="name"
            label="姓名"
            placeholder="請輸入姓名"
            onChange={handleFormChange}
          />
        </div>

        {/* Row Two */}
        <div className="col-span-3">
          <Input
            type="tel"
            name="phoneNumber"
            label="電話"
            placeholder="請輸入行動電話"
            onChange={handleFormChange}
          />
        </div>
        <div className="col-span-3">
          <Input
            type="email"
            name="email"
            label="Email"
            placeholder="請輸入電子郵件"
            onChange={handleFormChange}
          />
        </div>

        {/* Row Three */}
        <div className="col-span-2">
          <div className="text-xs text-gray-600 mb-2">縣市</div>
          <select
            value={formData.region}
            className="box-border rounded border border-gray-400 w-full h-3/5 text-xs"
            required
            name="region"
            onChange={handleFormChange}
          >
            <option value="">請選擇縣市</option>
            <option value="KLU">基隆市</option>
            <option value="TPH">新北市</option>
            <option value="TPE">臺北市</option>
            <option value="TYC">桃園市</option>
            <option value="HSH">新竹縣</option>
            <option value="HSC">新竹市</option>
            <option value="MAC">苗栗市</option>
            <option value="MAL">苗栗縣</option>
            <option value="TXG">臺中市</option>
            <option value="CWH">彰化縣</option>
            <option value="CWS">彰化市</option>
            <option value="NTC">南投市</option>
            <option value="NTO">南投縣</option>
            <option value="YLH">雲林縣</option>
            <option value="CHY">嘉義縣</option>
            <option value="CYI">嘉義市</option>
            <option value="TNN">臺南市</option>
            <option value="KHH">高雄市</option>
            <option value="IUH">屏東縣</option>
            <option value="PTS">屏東市</option>
            <option value="ILN">宜蘭縣</option>
            <option value="ILC">宜蘭市</option>
            <option value="HWA">花蓮縣</option>
            <option value="HWC">花蓮市</option>
            <option value="TTC">臺東市</option>
            <option value="TTT">臺東縣</option>
            <option value="PEH">澎湖縣</option>
            <option value="KMN">金門縣</option>
            <option value="LNN">連江縣</option>
          </select>
        </div>
        <div className="col-span-4">
          <Input
            type="text"
            name="address"
            label="地址"
            placeholder="請輸入地址"
            onChange={handleFormChange}
          />
        </div>
      </section>
    </div>
  );
}
