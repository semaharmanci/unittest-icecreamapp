import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

it("api den alinan veri icin", async () => {
  render(<Scoops />);


  //ekrana basilan kartlari al
  //api yi beklemsi lazim ondan dolayi hata oluyor getbyrole

  //! seciciler : get,query,find

  const images = await screen.findAllByRole("img"); //bircok img oldugu icin all ile
 // ekrandaki kartlarin sayısı 1 den fazla mı ?
  expect(images.length).toBeGreaterThanOrEqual(1);
});

it("cesitlerin ekleme azaltma ozelliklerinin toplam fiyata etkisi", async () => {
  //render
  render(<Scoops />);

  //userveent kurulumu
  const user = userEvent.setup();

  //butonlari cagir
  const addButton = await screen.findAllByRole("button", { name: "Ekle" });
  const delButton = await screen.findAllByRole("button", { name: "Azalt" });
  //toplam fiyat elementini cagir
  const total = screen.getByTestId("total");
  //0 mi kontrol et
   expect(total.textContent).toBe("0")
  //ekle butonuna tikla
  await user.click(addButton[2])
  //toplm fiyat 20 mi kontrol et
  expect(total.textContent).toBe("20")
  //baska bir ekle butonuna iki kez tikla
  await user.dblClick(addButton[1])
  //toplm fiyat 60 mi kontrol et
  expect(total.textContent).toBe("60")
  //azalta tiklat
  await user.click(delButton[1])
  //toplam 40 mi ?
  expect(total.textContent).toBe("40")
  //azalta tiklat
  await user.click(delButton[1])
  //toplam 20 mi ?
  expect(total.textContent).toBe("20")
  //azalta tiklat
  await user.click(delButton[2])
  //toplam 0 mi ?
  expect(total.textContent).toBe("0")
});
