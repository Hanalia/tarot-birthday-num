
import { useState } from "react";
import Image from "next/image";
import Card from "./Card";
const Inputform = () => {
  const [err, setErr] = useState(false);
  const handleChange = () => {

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
  };
  return (
    <div className="formContainer bg-gray-50">
      <div className="formWrapper">
        <span className="logo">타로 생일수 확인</span>
        <form onSubmit={handleSubmit}>
          <input className="normal" placeholder="생년월일 8자리(19990101)" />
          <div className="flex gap-10 pb-3">
            <label htmlFor="individual">
              <input type='radio' id="individual" name='userType' onChange={handleChange} value='indiviual' checked />
              Individual
            </label>
            <label htmlFor="company">
              <input type='radio' id="company" name='userType' onChange={handleChange} value='company' />
              company
            </label>
          </div>
          <input className="normal" placeholder="password" />
          <button>생일수 분석</button>
          {err && <span>Something went wrong</span>}
        </form>

      </div>
      {/* <Card
        cardType={1}
      /> */}
    </div>
  );
};

export default Inputform;
