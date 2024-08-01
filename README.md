# KÜTÜPHANELER

- json-server
- axios@^0.27.2
- bootstrap
- @testing-library/user-event@14.0

<img src="./public/images/Zight Recording 2024-08-01 at 10.41.57 AM.gif">

# Selectors - Seciciler

https://testing-library.com/docs/queries/about

# HTML element roles

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

# Matchers - Kontrolculer
- expect komutu ile birlikte kullanilan ve bir elementin uzerindeki beklentimizi kontrol eden methodlar.

https://github.com/testing-library/jest-dom

# Test Gelistirme Surecleri

## TDD ( Test Driven Development )

- Önce testler yazilir. Sonra Bilesen kodlanir
- red to green
- Daha islevsel. Daha hizli kod.

## BDD ( Behaviour Driven Development )

- Önce özellik / islev gelistirilir daha sonra testleri yazilir.


# FireEvent

- rtl icerisinde gelen olay tetikleme methodu
- gercek kullanicidan uzak tepkiler verdigi icin yerini userEvent e birakti
- Tetiklenen olaylar gercek bir insanin tepkisinden cok daha hizli bir sekilde aniden gerceklestigi icin testlerde tutarsizliklara ve beklenmedik sonuclara yol acabiliyor

# UserEvent

- firevent in modern / gelismis versiyonu
- tetikledigimiz olaylar fireevent gibi dogrudan tetiklenmesi yerien gercek bir kullaniciyi simule ederek belirli bir geciklemnn ardindan tetiklenir.
- kullanilmasi icicn kutuphanenin projeye kurulmasi gerekir.


