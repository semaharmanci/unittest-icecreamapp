import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Check edildi mi?", () => {
  // 1 render etme
  render(<Form />);

  // 2 gerekli element cagir
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // 3 checkbox tikli mi ?
  expect(checkbox).not.toBeChecked();

  // 4 buton inakfif
  expect(button).toBeDisabled();

  // 5 checkbox tikle
  fireEvent.click(checkbox);

  // 6 buton aktif mi ?
  expect(button).toBeEnabled();

  // 7 tiki kaldir
  fireEvent.click(checkbox);

  // 8 buton inaktif mi??
  expect(button).toBeDisabled();
});

test("buton hover a gore popup", () => {

  // 1 Form render
  render(<Form />);
  
  // 2 gerekli element al
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/Size birsey/i);

  // 3 checkbox tikle
  fireEvent.click(checkbox);

  // 4 bildirimin ekranda olmadigini kontrol et
  expect(alert).not.toBeVisible();

  // 5 mouse'u butonun uzerine getir
  fireEvent.mouseEnter(button);

  // 6 ekranda bildiirm var mi kontrol et
  expect(alert).toBeVisible();

  // 7 Mouse u butondan cek
  fireEvent.mouseLeave(button);

  // 8 bildirimin ekranda olmadigini kontrol et
  expect(alert).not.toBeVisible();
});
