import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <form className="mb-5 d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        type="checkbox"
        id="terms"
        className="form-check-input"
      />

      <div className="wrapper">
        <p style={{ opacity: isHover ? 1 : 0 }}>
          Size birsey teslim edilmeyecek.
        </p>
        <label htmlFor="terms">Kosullari okudum ve kabul ediyorum.</label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Siparisi Onayla
      </button>
    </form>
  );
};

export default Form;
