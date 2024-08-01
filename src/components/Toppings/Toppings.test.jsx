import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Toppings from ".";

test("sosları ekleme ve çıkarma işleminin toplam fiyata etkisi", async () => {
  const user = userEvent.setup();

  // render
  render(<Toppings />);

  //bütün checboxlarını al
  const toppings = await screen.findAllByRole("checkbox");

  //toplam span
  const total = screen.getByTestId("total");

  //checkboxların tiksiz old kontrol et
  toppings.forEach((i) => expect(i).not.toBeChecked());

  //toplam ücret 0 mı 
  expect(total.textContent).toBe("0");

  //sosa tıkla
  await user.click(toppings[4]);

  //toplam ücret 3 mü 
  expect(total.textContent).toBe("3");

  // farklı bir sos tikle
  await user.click(toppings[0]);

  //toplam ücret 6 mı 
  expect(total.textContent).toBe("6");

  // soslardan birinin tikini kaldır
  await user.click(toppings[0]);

  // toplam ücret 3 mü kontrol et
  expect(total.textContent).toBe("3");

  // soslardan birinin tikini kaldır
  await user.click(toppings[4]);

  // toplam ücret 0 mü kontrol et
  expect(total.textContent).toBe("0");
});