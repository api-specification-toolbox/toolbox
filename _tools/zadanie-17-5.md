---
name: Zadanie_17_5
description: " 17. ExpressJS - ekspresowe tworzenie aplikacji w NodeJS Wyzwania: Dowiesz
  si\u0119 czym jest ExpressJS Nauczysz si\u0119 korzysta\u0107 z routingu Poznasz
  czym s\u0105 szablony 17.1. Wprowadzenie do Expressa Express jest jednym z najpopularniejszych
  framework\xF3w dla aplikacji pisanych w Node.js. Jest bardzo lekki i pozwala na
  lepsz\u0105 organizacj\u0119 aplikacji w modelu MVC. Ok, zwolnijmy. Ju\u017C na
  samym starcie pojawi\u0142y si\u0119 dwa poj\u0119cia, kt\xF3rych do tej pory nie
  om\xF3wili\u015Bmy zbyt dok\u0142adnie: framework i MVC. Na pocz\u0105tku przypomnijmy
  sobie czym jest framework.  Czym s\u0105 frameworki? Framework to swego rodzaju
  szkielet, na kt\xF3rym opieramy budow\u0119 naszej aplikacji. Jest pewnym poziomem
  abstrakcji, na kt\xF3rej konstruujemy nasz\u0105 aplikacj\u0119.  Czym jest abstrakcja?
  Abstrakcja w in\u017Cynierii oprogramowania to technika, dzi\u0119ki kt\xF3rej jeste\u015Bmy
  w stanie zapanowa\u0107 nad z\u0142o\u017Cono\u015Bci\u0105 systemu. Najzwyczajniej
  w \u015Bwiecie nie da si\u0119 my\u015Ble\u0107 na wielu p\u0142aszczyznach na raz,
  dlatego programi\u015Bci dziel\u0105 problemy na pewne poziomy i to na nich rozwi\u0105zuj\u0105
  mniejsze problemy. Przyk\u0142adowo - programista korzystaj\u0105cy z Reacta nie
  martwi si\u0119 o ni\u017Cszy poziom abstrakcji, z kt\xF3rego nie\u015Bwiadomie
  korzysta u\u017Cywaj\u0105c Reacta. Korzystaj\u0105c z komputera tak\u017Ce nie
  zastanawiamy si\u0119 za bardzo co dzieje si\u0119 w \u015Brodku procesora czy te\u017C
  w jaki spos\xF3b jest skonstruowany. Tym poziomem abstrakcji po prostu nie zawracamy
  sobie g\u0142owy. U\u017Cywaj\u0105c JavaScriptu nie my\u015Blimy w jaki spos\xF3b
  parser analizuje sk\u0142adni\u0119 j\u0119zyka. Je\u015Bli nie jest to nam potrzebne,
  to mo\u017Cemy zaj\u0105\u0107 si\u0119 tym, co jest dla nas naprawd\u0119 istotne
  - pisaniem aplikacji internetowych!  Express to w\u0142a\u015Bnie kolejny, wy\u017Cszy
  poziom abstrakcji, dzi\u0119ki kt\xF3remu mo\u017Cemy skupi\u0107 si\u0119 na w\u0142a\u015Bciwym
  problemie. Zawiera zbi\xF3r generycznych (mo\u017Cliwych do zastosowania w wielu
  miejscach / uniwersalnych) funkcjonalno\u015Bci, kt\xF3re powtarzaj\u0105 si\u0119
  w obr\u0119bie ka\u017Cdej aplikacji. Ca\u0142y zamys\u0142 frameworka opiera si\u0119
  na zasadzie - nie wymy\u015Blaj ko\u0142a na nowo, bo mo\u017Cna budowa\u0107 na
  podstawie dobrych, uniwersalnych rozwi\u0105za\u0144. Po wykonaniu tego samego zadania
  wiele razy, cz\u0142owiek instynktownie szuka sposobu na automatyzacj\u0119 problemu
  - szczeg\xF3lnie leniwy programista. :)  Framework ma niestety jedn\u0105 wad\u0119,
  kt\xF3ra bywa momentami r\xF3wnie\u017C zalet\u0105 - narzuca programi\u015Bcie
  spos\xF3b w jaki nale\u017Cy rozwi\u0105za\u0107 problem. Takie podej\u015Bcie z
  jednej strony nieco nas ogranicza, bo nie pozwala nam 'grzeba\u0107' w rozwi\u0105zaniu,
  a z drugiej strony zmniejsza ilo\u015B\u0107 miejsc, w kt\xF3rych mogliby\u015Bmy
  pope\u0142ni\u0107 jaki\u015B b\u0142\u0105d. Zalet\u0105 takiego podej\u015Bcia
  jest te\u017C to, \u017Ce programi\u015Bci korzystaj\u0105cy z framework\xF3w cz\u0119sto
  borykaj\u0105 si\u0119 z podobnymi problemami, przez co \u0142atwo jest znale\u017A\u0107
  rozwi\u0105zania, bo kto\u015B ju\u017C na pewno zetkn\u0105\u0142 si\u0119 z czym\u015B,
  co sprawia nam k\u0142opot :)  Wracaj\u0105c do Expressa - jest on niewielkim frameworkiem,
  kt\xF3ry daje programi\u015Bcie przyjemn\u0105 podstawk\u0119 do tworzenia aplikacji,
  ale nie narzuca \u017Cadnych praktyk - mo\u017Ce o tym \u015Bwiadczy\u0107 chocia\u017Cby
  fakt, \u017Ce wiele znanych framework\xF3w opiera swoj\u0105 budow\u0119 na Express.
  Mo\u017Cna do nich zaliczy\u0107 przyk\u0142adowo Loopbacka, Sailsa czy Krakena.
  \ Model-View-Controller Ok, wiemy ju\u017C czym jest framework - pora na poj\u0119cie
  MVC :) Jest to skr\xF3t od ang. Model View Controller (Model Widok Kontroler). Jest
  jednym z najcz\u0119\u015Bciej przewijaj\u0105cych si\u0119 wzorc\xF3w architektonicznych
  w internecie. Popularno\u015Bci\u0105 poma\u0142u wypiera go architektura Flux,
  o kt\xF3rej coraz cz\u0119\u015Bciej s\u0142ycha\u0107 (szczeg\xF3lnie w \u015Brodowisku
  Reacta), ale o tym wzorcu powiemy sobie jeszcze przy okazji omawiania Reduxa - wr\xF3\u0107my
  do MVC.  G\u0142\xF3wnym za\u0142o\u017Ceniem przyj\u0119tym podczas projektowania
  MVC by\u0142o oddzielenie warstwy prezentacji od logiki biznesowej aplikacji. To
  podej\u015Bcie umo\u017Cliwia tworzenie narz\u0119dzi dzia\u0142aj\u0105cych bez
  graficznego interfejsu (zast\u0119puje go wtedy tzw. Command Line Interface, a.k.a.
  CLI) i jest dalej popularne w \u015Brodowisku Unixowym. Tak wi\u0119c:  Model jest
  reprezentacj\u0105 logiki aplikacji / problemu z jakim si\u0119 zmagamy / domen\u0105.
  Widok opisuje w jaki spos\xF3b co\u015B wy\u015Bwietli\u0107. W React s\u0105 to
  komponenty (szczeg\xF3lnie te prezentacyjne). Kontroler przyjmuje dane od u\u017Cytkownika
  aplikacji i reaguje na jego dzia\u0142ania w obr\u0119bie widoku. Aktualizuje widok
  i model aplikacji. O samej architekturze mo\u017Cna napisa\u0107 osobny modu\u0142
  tym bardziej, \u017Ce jak ju\u017C wcze\u015Bniej wspomnieli\u015Bmy bardzo cz\u0119sto
  przewija si\u0119 on w \u015Brodowisku front-end developer\xF3w i jest cz\u0119\u015Bci\u0105
  sk\u0142adow\u0105 wielu framework\xF3w. Sama implementacja MVC wymaga wiedzy na
  temat programowania obiektowego i wzorc\xF3w projektowych. Zainteresowanych zapraszam
  do przeczytania tej ksi\u0105\u017Cki na temat wzorc\xF3w projektowych stosowanych
  w JavaScripcie.  Express dostarcza wielu funkcjonalno\u015Bci do tworzenia aplikacji
  webowych. Jak ju\u017C wspomnia\u0142em, u\u0142atwia on przede wszystkim szybki
  rozw\xF3j aplikacji opartych na Node.js. Podstawowymi cechami tego frameworka s\u0105:
  \ serwowanie plik\xF3w statycznych za pomoc\u0105 jednej komendy konfigurowanie
  middleware, czyli po\u015Brednika mi\u0119dzy \u017C\u0105daniem a odpowiedzi\u0105
  w momencie, kiedy u\u017Cytkownik wykonuje jakie\u015B akcje, np. wysy\u0142a formularz,
  middleware mo\u017Ce wykona\u0107 pewne czynno\u015Bci zanim dane zostan\u0105 zapisane.
  Nie sprowadza si\u0119 to oczywi\u015Bcie tylko do zapisu danych, ale szerzej na
  temat tego zagadnienia powiemy sobie w dalszym rozdziale definiowanie tablicy routingu,
  czyli \u015Bcie\u017Cek (adres\xF3w), kt\xF3re wy\u015Bwietlaj\u0105 odpowiednie
  tre\u015Bci, przyjmuj\u0105 i zapisuj\u0105 dane, b\u0105d\u017A odpytane o dane
  zwracaj\u0105 je. Bazuj\u0105 na protokole HTTP oraz URI (ang. Uniform Resource
  Identifier) pozwala na dynamiczne tworzenie stron HTML bazuj\u0105cych na argumentach
  przekazanych do istniej\u0105cych szablon\xF3w Nie przejmuj si\u0119, je\u015Bli
  powy\u017Csze opisy wydaj\u0105 si\u0119 by\u0107 nieco zagmatwane. Kolejne rozdzia\u0142y
  rozja\u015Bni\u0105 spraw\u0119! Zanim jednak przejdziemy do omawiania poszczeg\xF3lnych
  funkcjonalno\u015Bci Expressa, przeprowadzimy proces instalacji.  Je\u015Bli masz
  w\u0105tpliwo\u015Bci do powy\u017Cszego materia\u0142u, to - zanim zatwierdzisz
  - zapytaj na czacie :) Zapozna\u0142e(a)m si\u0119! 17.2. Instalacja ExpressJS Framework
  Express instalujemy u\u017Cywaj\u0105c npm, analogicznie do innych pakiet\xF3w,
  kt\xF3re dodawali\u015Bmy ju\u017C we wcze\u015Bniejszych modu\u0142ach. Dla przypomnienia,
  wystarczy, \u017Ce zainicjujesz sw\xF3j projekt - npm init, a nast\u0119pnie u\u017Cyjesz
  komendy npm install express --save, kt\xF3ra zapisze zainstalowany pakiet w katalogu
  node_modules/ i doda go do sekcji dependencies w pliku package.json.  Razem z Expressem
  nale\u017Cy zainstalowa\u0107 jeszcze jeden wa\u017Cny modu\u0142 - body-parser,
  kt\xF3ry jest pakietem pozwalaj\u0105cym na obs\u0142ug\u0119 r\xF3\u017Cnych format\xF3w
  danych w middleware takich jak JSON, text czy tzw. surowe dane (ang. raw data).
  Aby go zainstalowa\u0107, wpisz npm install body-parser --save.  Pierwsza aplikacja
  w ExpressJS Sprawd\u017Amy teraz, czy wszystko dzia\u0142a tak jak powinno. Testowa
  aplikacja, jak\u0105 stworzymy przy u\u017Cyciu Expressa, b\u0119dzie przedstawia\u0142a
  podstawow\u0105 zasad\u0119 dzia\u0142ania tego frameworka. Aplikacja uruchomi serwer
  oraz b\u0119dzie nas\u0142uchiwa\u0107 na porcie 3000 w oczekiwaniu na po\u0142\u0105czenie
  - dok\u0142adnie w taki sam spos\xF3b, jak w przypadku serwera HTTP napisanego w
  \u201Cczystym\" Node.js. Nas\u0142uchiwanie oznacza nic innego jak oczekiwanie na
  po\u0142\u0105czenie - po wyst\u0105pieniu \u017C\u0105dania, serwer odpowie nam
  klasycznym \u201CHello world\".  Zanim zaczniemy tworzy\u0107 aplikacj\u0119, musimy
  wyt\u0142umaczy\u0107 sobie pewne poj\u0119cia.  Opis poj\u0119cia routingu Routing
  to spos\xF3b okre\u015Blania jak aplikacja b\u0119dzie odpowiada\u0107 na \u017C\u0105dania
  klienta na dane endpointy przy u\u017Cyciu konkretnych metod HTTP. Przypomnijmy
  sobie w jaki spos\xF3b wygl\u0105da\u0142y metody HTTP:  GET - najprostsza z metod
  HTTP - s\u0142u\u017Cy do pobierania zasob\xF3w z serwera. Pobranymi zasobami mog\u0105
  by\u0107 np. pliki HTML, CSS, JavaScript czy obiekty JSON / XML. POST - ta metoda
  jest u\u017Cywana do wysy\u0142ania danych do serwera. Stosuje si\u0119 j\u0105
  np. przy formularzach lub przy wstawianiu zdj\u0119\u0107 i wysy\u0142aniu ich jako
  za\u0142\u0105cznik. Zwykle dane te wysy\u0142ane s\u0105 jako para klucz-warto\u015B\u0107.
  PUT - dzia\u0142a podobnie jak POST, czyli r\xF3wnie\u017C s\u0142u\u017Cy do wysy\u0142ania
  danych. R\xF3\u017Cnic\u0105 jest ograniczenie do wys\u0142ania tylko jednej porcji
  danych - np. jednego pola. Metoda ta najcz\u0119\u015Bciej u\u017Cywana jest do
  aktualizacji istniej\u0105cych danych DELETE - metoda, kt\xF3ra s\u0142u\u017Cy
  do usuwania danych z serwera. Chodzi oczywi\u015Bcie o dane, kt\xF3re zosta\u0142y
  wskazane przy wysy\u0142aniu \u017C\u0105dania. Kolejnym poj\u0119ciem jest URI
  (nazywane r\xF3wnie\u017C PATH) - jest to w\u0142a\u015Bnie wspomniany wcze\u015Bniej
  endpoint, kt\xF3ry zawiera polecenia do wykonania gdy zostanie wywo\u0142any przez
  \u017C\u0105danie.  Czas start! Na pocz\u0105tek stw\xF3rzmy plik server.js w katalogu
  z projektem. Po zainstalowaniu powy\u017Cszych zale\u017Cno\u015Bci, drzewo projektu
  powinno wygl\u0105da\u0107 w nast\u0119puj\u0105cy spos\xF3b:   Aby mie\u0107 mo\u017Cliwo\u015B\u0107
  skorzystania z zainstalowanych zale\u017Cno\u015Bci, na pocz\u0105tku nale\u017Cy
  zadeklarowa\u0107 zmienn\u0105, w kt\xF3rej b\u0119dziemy przechowywa\u0107 funkcjonalno\u015Bci
  pakietu Expressa.  var express = require('express'); Jak widzisz, ka\u017Cda paczka
  JS'a dzia\u0142a dok\u0142adnie w taki sam spos\xF3b. Koncepcja modu\u0142\xF3w
  b\u0119dzie przewija\u0107 si\u0119 a\u017C do ko\u0144ca tego kursu. Nast\u0119pnym
  krokiem b\u0119dzie stworzenie aplikacji Express:  var app = express(); Nasz\u0105
  aplikacj\u0119 przypisali\u015Bmy do zmiennej app. Teraz mo\u017Cemy sprawi\u0107,
  aby odpowiada\u0142a prostym Hello world w momencie, w kt\xF3rym odbierzemy wys\u0142ane
  zapytanie GET na adres strony domowej:  app.get('/', function(req, res) {     res.send('Hello
  world'); }); Powy\u017Cszy kod rejestruje pierwszy routing (proces przetwarzania
  otrzymanego adresu \u017C\u0105dania i na jego podstawie decydowanie, co powinno
  zosta\u0107 uruchomione) na wys\u0142ane \u017C\u0105danie GET po wej\u015Bciu na
  stron\u0119 g\u0142\xF3wn\u0105 ( http://localhost:3000/ ). Jako callback na wyst\u0105pienie
  tego zdarzenia wywo\u0142ywana jest funkcja, kt\xF3ra w przypadku udanej odpowiedzi
  wy\u015Ble wiadomo\u015B\u0107 Hello world.  To jednak jeszcze nie koniec. Zarejestrowali\u015Bmy
  obs\u0142ug\u0119 pierwszego routingu, ale nale\u017Cy zainicjowa\u0107 nas\u0142uchiwanie
  serwera na to i inne zdarzenia. Dopiszmy wi\u0119c:  var server = app.listen(3000,
  function() {     console.log('Przyk\u0142adowa aplikacja nas\u0142uchuje na http://localhost:3000');
  }); Po zapisaniu powy\u017Cszego kodu, nale\u017Cy uruchomi\u0107 go komend\u0105
  node server.js (lub za pomoc\u0105 Nodemona, kt\xF3rego poznali\u015Bmy w pierwszym
  module) - teraz po ponownym wej\u015Bciu na adres http://localhost:3000/ powinni\u015Bmy
  zobaczy\u0107 nast\u0119puj\u0105cy widok:   Jest to znak, \u017Ce nasza aplikacja
  dzia\u0142a!  Je\u015Bli masz w\u0105tpliwo\u015Bci do powy\u017Cszego materia\u0142u,
  to - zanim zatwierdzisz - zapytaj na czacie :) Zapozna\u0142e(a)m si\u0119! 17.3.
  Route, czyli \u015Bcie\u017Cka wyznaczona dla u\u017Cytkownika aplikacji Wykorzystanie
  endpoint\xF3w Rozwi\u0144my teraz troch\u0119 aplikacj\u0119 stworzon\u0105 w poprzednim
  podrozdziale. Aktualnie kod w pliku server.js wygl\u0105da nast\u0119puj\u0105co:
  \ var express = require('express'); var app = express();  app.get('/', function
  (req, res) {     res.send('Hello world'); });  var server = app.listen(3000, function()
  {     console.log('Przyk\u0142adowa aplikacja nas\u0142uchuje na http://localhost:3000');
  }); Endpointy statyczne Na pocz\u0105tek zmodyfikujemy lekko \u017C\u0105danie GET
  i do strony g\u0142\xF3wnej zamiast Hello world! wpiszmy Hello GET! oraz dodamy
  linijk\u0119 drukuj\u0105c\u0105 otrzymane \u017C\u0105danie (po stronie serwera)
  jak poni\u017Cej:  app.get('/', function (req, res) {     console.log('Otrzyma\u0142em
  \u017C\u0105danie GET do strony g\u0142\xF3wnej');     res.send('Hello GET!'); });
  Warto w tym miejscu wspomnie\u0107 o narz\u0119dziu Postman - mo\u017Cesz pobra\u0107
  je ze strony https://www.getpostman.com/. U\u017Cywa si\u0119 go do testowania endpoint\xF3w.
  Postman jest prosty i intuicyjny w obs\u0142udze - wystarczy, \u017Ce podasz adres
  oraz metod\u0119 HTTP, jakiej chcesz u\u017Cy\u0107 w odpowiednich polach i\u2026
  ju\u017C :) Pozostaje tylko wys\u0142anie requesta i sprawdzenie czy response zgadza
  si\u0119 z naszymi oczekiwaniami.   Dodajmy te\u017C inne metody HTTP do naszej
  aplikacji. Zacznijmy od POST. Dla tej i kolejnej metody wykonamy podobne operacje.
  Chodzi tutaj o to, aby zaobserwowa\u0107 dzia\u0142anie zarejestrowanych endpoint\xF3w.
  \ app.post('/', function (req, res) {     console.log('Otrzyma\u0142em \u017C\u0105danie
  POST do strony g\u0142\xF3wnej');     res.send('Hello POST!'); }); Do tego czasu
  oba nasze zapytania kierowali\u015Bmy do strony domowej. Dodajmy teraz obs\u0142ug\u0119
  \u017C\u0105dania z metod\u0105 DELETE oraz inn\u0105 \u015Bcie\u017Ck\u0105:  app.delete('/del_user',
  function (req, res) {     console.log('Otrzyma\u0142em \u017C\u0105danie DELETE
  do strony /del_user');     res.send('Hello DELETE!'); }); DLA CH\u0118TNYCH: Przetestuj
  powy\u017Csze zapytanie w Postmanie! :)  Dla praktyki, dodajmy jeszcze kilka innych
  endpoint\xF3w, a nast\u0119pnie przejd\u017Amy do testowania.  app.get('/list_user',
  function (req, res) {     console.log('Otrzyma\u0142em \u017C\u0105danie GET do
  strony /list_user');     res.send('Strona z list\u0105 u\u017Cytkownik\xF3w!');
  });  app.get('/ab*cd', function(req, res) {     console.log('Otrzyma\u0142em \u017C\u0105danie
  GET do strony /ab*cd');     res.send('Wz\xF3r pasuje'); }); Po dodaniu powy\u017Cszych
  fragment\xF3w kodu zapisz plik server.js, a nast\u0119pnie ponownie u\u017Cyj komendy
  node server.js chyba, \u017Ce u\u017Cywasz Nodemona :)  Zerknijmy na endpoint /list_user
  \  Otrzymali\u015Bmy to, czego oczekiwali\u015Bmy. Sprawd\u017Amy jeszcze inne.
  \   Je\u015Bli jednak u\u017Cyli\u015Bmy endpointa, kt\xF3rego nie zdefiniowali\u015Bmy,
  otrzymamy odpowied\u017A jak na ostatnim obrazku.  Endpointy dynamiczne Istnieje
  r\xF3wnie\u017C inny typ endpoint\xF3w, kt\xF3re nazywa si\u0119 dynamicznymi. U\u017Cywanie
  ich pozwala na przekazywanie parametr\xF3w i bazowanie na nich. Wr\xF3\u0107my na
  moment do kodu stworzonego na samym pocz\u0105tku:  var express = require('express');
  var app = express();  app.get('/', function (req, res) {     res.send('Hello world');
  });  var server = app.listen(3000, function() {     console.log('Przyk\u0142adowa
  aplikacja nas\u0142uchuje na http://localhost:3000'); }); Najpierw zmodyfikujemy
  troch\u0119 bazowy kod. Usu\u0144my linijki 8-10, kt\xF3re mia\u0142y nam tylko
  pokaza\u0107 podstawowe informacje na temat serwera. Zamiast tego napiszmy po prostu:
  app.listen(3000);  Tworzenie dynamicznego routingu pozwala na przekazywanie parametr\xF3w,
  wi\u0119c spr\xF3bujmy najpierw z przyk\u0142adowym id. Zamiast odwo\u0142a\u0107
  si\u0119 do strony domowej ('/'), odwo\u0142ajmy si\u0119 do zmiennego parametru
  id. Parametr zmienny od statycznego rozr\xF3\u017Cnia si\u0119 poprzez dodanie dwukropka
  (:) przed nazw\u0119. W naszym przyk\u0142adzie endpoint b\u0119dzie wi\u0119c wygl\u0105da\u0142
  nast\u0119puj\u0105co:  /:id Zmie\u0144my jeszcze odpowied\u017A z Hello world na
  'Identyfikator, kt\xF3ry zosta\u0142 dopisany to ' + req.params.id.  Czym jest req.params.id?
  req jest obiektem reprezentuj\u0105cym zapytanie HTTP (ang. request). Posiada on
  r\xF3\u017Cne parametry, jak na przyk\u0142ad body (czyli cia\u0142o zapytania),
  nag\u0142\xF3wki HTTP oraz parametry (params), kt\xF3re mamy zamiar odczyta\u0107.
  \ Parametr, kt\xF3ry wstawili\u015Bmy jako cz\u0119\u015B\u0107 adresu w metodzie
  GET, przekazujemy jako id. W poni\u017Cszym przypadku wy\u015Bwietli si\u0119 komunikat
  Identyfikator kt\xF3ry zosta\u0142 dopisany to 123, o ile zapytanie wys\u0142ano
  na adres http://localhost:3000/123.   Popr\xF3buj z r\xF3\u017Cnymi innymi parametrami
  i sprawd\u017A czy aplikacja dzia\u0142a tak, jak tego oczekujesz.  Obs\u0142uga
  b\u0142\u0119du 404 za pomoc\u0105 ExpressJS Co je\u015Bli serwer nie rozpozna \u017C\u0105dania?
  W Expressie odpowied\u017A 404 nie jest wynikiem b\u0142\u0119du, wi\u0119c nie
  jest wy\u0142apywany w trakcie dzia\u0142ania aplikacji. Spowodowane jest to tym,
  \u017Ce 404 zwykle oznacza brak mo\u017Cliwo\u015Bci wykonania danej czynno\u015Bci,
  a nie b\u0142\u0105d wyst\u0119puj\u0105cy z powodu jakiej\u015B 'wpadki' programisty.
  Innymi s\u0142owy, Express wykona\u0142 wszystkie funkcje middleware (kt\xF3re poznamy
  w kolejnym rozdziale) oraz route'y i dopiero wtedy dowiedzia\u0142 si\u0119, \u017Ce
  \u017Caden z nich nie odpowiedzia\u0142 na \u017C\u0105danie - taki przypadek mo\u017Cemy
  obs\u0142u\u017Cy\u0107 poprzez dodanie funkcji middleware na samym ko\u0144cu (poni\u017Cej
  pozosta\u0142ych funkcji), aby obs\u0142ugiwa\u0142a status 404.  Powr\xF3\u0107my
  zn\xF3w do poprzedniego szablonu z metod\u0105 GET na stron\u0119 domow\u0105 ('/'),
  kt\xF3ra zwraca nam Hello world!. Dopiszmy teraz metod\u0119 middleware, kt\xF3ra
  obs\u0142u\u017Cy nam b\u0142\u0105d 404.  Na samym ko\u0144cu, poni\u017Cej fragmentu
  z nas\u0142uchiwaniem dodajmy obs\u0142ug\u0119 odpowiedzi 404:  app.use(function
  (req, res, next) {     res.status(404).send('Wybacz, nie mogli\u015Bmy odnale\u017A\u0107
  tego, czego \u017C\u0105dasz!') }); Po ponownym uruchomieniu skryptu, w przegl\u0105darce
  powiniene\u015B zobaczy\u0107 Hello world!. Spr\xF3buj teraz dopisa\u0107 co\u015B
  na koniec adresu (tak jak w poprzednim rozdziale dopisali\u015Bmy id). Powiniene\u015B
  otrzyma\u0107 nast\u0119puj\u0105cy komunikat:   Parametr next, kt\xF3ry przekazujemy
  do funkcji jest funkcj\u0105, kt\xF3ra pozwala \u201Ci\u015B\u0107 dalej\" do kolejnej
  funkcji middleware lub zako\u0144czenia \u017C\u0105dania.  Mo\u017Cna w ten spos\xF3b
  stworzy\u0107 tak\u017Ce obs\u0142ug\u0119 pozosta\u0142ych b\u0142\u0119d\xF3w.
  Najcz\u0119\u015Bciej obs\u0142ugiwane b\u0142\u0119dy to:  400 - bad request -
  wyst\u0119puje gdy serwer nie mo\u017Ce przetworzy\u0107 zapytania 401 - unauthorized
  - wyst\u0119puje gdy wymagane jest uwierzytelnienie, a nie zosta\u0142o dostarczone
  403 - forbidden - \u017C\u0105danie jest poprawne, jednak serwer odmawia odpowiedzi,
  mo\u017Ce to wyst\u0105pi\u0107 w przypadku gdy np. u\u017Cytkownik jest zalogowany
  ale nie ma uprawnie\u0144 do wykonania \u017C\u0105dania 404 - not found - zasoby
  nie zosta\u0142y znalezione 500 - internal server error - wyst\u0119puje gdy wyst\u0119puj\u0105
  nieznane warunki i nie ma \u017Cadnej konkretnej wiadomo\u015Bci Zadanie: Operacje
  CRUD na pliku JSON Stw\xF3rzmy teraz aplikacj\u0119, kt\xF3ra b\u0119dzie otwiera\u0107
  zewn\u0119trzne pliki .json oraz edytowa\u0107 je. Zanim zaczniemy, w folderze projektu
  stw\xF3rz plik server.js, a nast\u0119pnie zainicjalizuj projekt poprzez wpisanie
  npm init w konsoli.  Przejd\u017Amy do pobrania potrzebnych zale\u017Cno\u015Bci
  - tym razem b\u0119dzie nam potrzebny Express oraz body-parser. Jak si\u0119 zapewne
  domy\u015Blasz, mo\u017Cesz zainstalowa\u0107 je za pomoc\u0105 komendy npm install
  --save express body-parser. Po pobraniu paczek, mo\u017Cemy \u015Bmia\u0142o przej\u015B\u0107
  do pisania kodu - na pocz\u0105tek przypisz zale\u017Cno\u015Bci do zmiennych w
  pliku server.js. Dodaj tak\u017Ce linijk\u0119 var fs = require('fs') - fs b\u0119dzie
  nam potrzebny do operacji na plikach. Nie musimy go instalowa\u0107, bo jest on
  wbudowany w Node :)  Skoro zale\u017Cno\u015Bci mamy ju\u017C za\u0142atwione, zadeklaruj
  zmienn\u0105 app, kt\xF3ra wywo\u0142a funkcj\u0119 express() oraz zmienn\u0105
  stringifyFile (na razie bez zadeklarowanej warto\u015Bci).  Tu\u017C pod deklaracj\u0105
  zmiennych dodaj tak\u017Ce linijk\u0119 app.use(bodyParser.json()); - to pozwoli
  Ci wykorzysta\u0107 middleware body-parser, kt\xF3re zainstalowali\u015Bmy przed
  chwil\u0105. body-parser jest nam potrzebny, aby korzysta\u0107 z formatu application/json
  - p\xF3ki co nie przejmuj si\u0119 poj\u0119ciem middleware, zajmiemy si\u0119 nim
  nieco dalej w tym kursie :)  Stw\xF3rz teraz endpoint GET /getNote, gdzie po wywo\u0142aniu
  zostanie wczytany Tw\xF3j zewn\u0119trzny plik JSON oraz wy\u015Bwietlona zostanie
  jego zawarto\u015B\u0107. Przyk\u0142\u0105dowy plik test.json:  {\"menu\": {    \"id\":
  \"file\",    \"value\": \"File\",    \"popup\": {      \"menuitem\": [        {\"value\":
  \"New\", \"onclick\": \"CreateNewDoc()\"},        {\"value\": \"Open\", \"onclick\":
  \"OpenDoc()\"},        {\"value\": \"Close\", \"onclick\": \"CloseDoc()\"}      ]
  \   }  }} Metoda kt\xF3ra pozwoli nam na odczytanie pliku to readFile, kt\xF3r\u0105
  mo\u017Cna wywo\u0142a\u0107 z zadeklarowanego wcze\u015Bniej fs. Jako parametry
  przyjmuje ona najpierw plik, nast\u0119pnie opcje (np. kodowanie) i funkcj\u0119,
  kt\xF3ra wywo\u0142a si\u0119 po za\u0142adowaniu. W naszym przypadku b\u0119dzie
  to wi\u0119c nast\u0119puj\u0105cy kod: fs.readFile('./test.json', 'utf8', function(err,
  data) {     if (err) throw err;     stringifyFile = data     res.send(data); });
  Teraz pora na stworzenie endpointa, kt\xF3ry po wywo\u0142aniu nadpisze nam podany
  plik. Stworzymy do tego dynamiczny endpoint, kt\xF3ry dopisze do pliku string, kt\xF3ry
  przeka\u017Cemy jako parametr. Stw\xF3rz tym razem POST na /updateNote/:note. Po
  jego wywo\u0142aniu tekst, kt\xF3ry znajduje si\u0119 w miejscu /:note powinni\u015Bmy
  dopisa\u0107 do wczytanego pliku poprzez dodanie req.params.note do zmiennej stringifyFile,
  kt\xF3ra przechowuje aktualn\u0105 zawarto\u015B\u0107 pliku.  Po przypisaniu powy\u017Cszej
  zmiennej, nale\u017Cy ponownie odwo\u0142a\u0107 si\u0119 do modu\u0142u fs tym
  razem u\u017Cywaj\u0105c metody writeFile. Pomo\u017Ce nam w tym nast\u0119puj\u0105cy
  fragment kodu:  fs.writeFile('./test.json', stringifyFile, function(err) {     If
  (err) throw err;     console.log('file updated'); }); Na ko\u0144cu pliku dodaj
  nas\u0142uchiwanie na porcie 3000.  Zapisz plik i uruchom aplikacj\u0119 wpisuj\u0105c
  node server.js w konsoli.  Otw\xF3rz Postmana, ustaw metod\u0119 zapytania na GET,
  a w pole adresu wpisz http://localhost:3000/getNote. Jako response powiniene\u015B
  otrzyma\u0107 Tw\xF3j stworzony wcze\u015Bniej plik JSON. Po zmianie z GET na POST
  oraz wpisaniu /updateNote/test zamiast /getNote oraz wys\u0142aniu requesta, Tw\xF3j
  plik JSON powinien zosta\u0107 zaktualizowany o s\u0142owo test :)  Po uko\u0144czeniu
  zadania, wrzu\u0107 sw\xF3j kod na Githuba i przeka\u017C link do repozytorium mentorowi
  :)  Podgl\u0105d zadania  https://github.com/martinproxy0/Zadanie_17_3.git   Wyslij
  link  17.4. Serwowanie plik\xF3w statycznych Express posiada wbudowan\u0105 mo\u017Cliwo\u015B\u0107
  serwowania plik\xF3w statycznych - takimi plikami s\u0105 na przyk\u0142ad obrazki,
  pliki CSS czy JS. Aby serwowa\u0107 te pliki statycznie, wystarczy u\u017Cy\u0107
  express.static. Pliki statyczne to pliki, kt\xF3re zostaj\u0105 dostarczone do klienta
  bez generowania, modyfikacji czy przetwarzania - jedyne, co trzeba z nimi zrobi\u0107,
  to przekaza\u0107 nazw\u0119 katalogu, w kt\xF3rym s\u0105 przetrzymywane, do express.static
  - to wystarczy aby zacz\u0105\u0107 je serwowa\u0107. Spr\xF3bujmy przedstawi\u0107
  to sobie na przyk\u0142adzie.  Za\u0142\xF3\u017Cmy, \u017Ce przetrzymujesz swoje
  zdj\u0119cia i pliki CSS w katalogu assets/. Aby zacz\u0105\u0107 je serwowa\u0107,
  mo\u017Cesz wi\u0119c u\u017Cy\u0107 nast\u0119puj\u0105cej linijki:  app.use(express.static('assets'));
  Zmodyfikujmy wi\u0119c ca\u0142kowicie nasz\u0105 aplikacj\u0119. Najpierw stw\xF3rzmy
  w katalogu projektu nowy katalog o nazwie assets/. Wrzu\u0107my do niego jakiekolwiek
  zdj\u0119cie/obrazek. W pliku server.js wr\xF3\u0107my do poprzedniego stanu (zanim
  zacz\u0119li\u015Bmy zajmowa\u0107 si\u0119 routingiem):  var express = require('express');
  var app = express();  app.get('/', function (req, res) {     res.send('Hello world');
  });  var server = app.listen(3000, 'localhost', function() {     var host = server.address().address;
  \    var port = server.address().port;      console.log('Przyk\u0142adowa aplikacja
  nas\u0142uchuje na http://' + host + ':' + port); }); W tym przyk\u0142adzie sami
  definiujemy port i adres, ale w prawdziwej aplikacji mogliby\u015Bmy tych warto\u015Bci
  nie zna\u0107. Cz\u0119stym przyk\u0142adem jest sytuacja w kt\xF3rej adres i port
  s\u0105 zdefiniowane w osobnym pliku konfiguracyjnym. Ten plik by\u0142by inny na
  naszym komputerze ni\u017C na serwerze na kt\xF3rym b\u0119dziemy publikowa\u0107
  aplikacj\u0119 - ale nasz kod ma dzia\u0142a\u0107 w obu lokalizacjach. Dlatego
  do wy\u015Bwietlenia linka potrzebowaliby\u015Bmy pobrania tych danych za pomoc\u0105
  metody .address().  Pozostaje teraz jedynie w linii nr 3 doda\u0107 to, o czym powiedzieli\u015Bmy
  sobie chwilk\u0119 temu, czyli linijk\u0119 app.use(express.static('assets'));  Dla
  przypomnienia, w nawiasach do express.static przekazujemy katalog, w kt\xF3rym znajduj\u0105
  si\u0119 pliki, kt\xF3re chcemy serwowa\u0107. Po zapisaniu pliku server.js, mo\u017Cemy
  uruchomi\u0107 aplikacj\u0119. Teraz, aby zobaczy\u0107 nasz obrazek, wystarczy
  \u017Ce po http://localhost:3000/ podamy nazw\u0119 pliku z rozszerzeniem - u mnie
  wygl\u0105da to tak:   Stw\xF3rz sobie teraz prosty plik index.html, kt\xF3ry b\u0119dzie
  mia\u0142 formularz z dwoma inputami typu text (o nazwach first_name i last_name)
  oraz jednym typu submit. Element <form> posiada atrybuty takie jak action oraz method.
  Atrybut action pozwala okre\u015Bli\u0107, gdzie wys\u0142a\u0107 dane z formularza
  w momencie, gdy zostanie on zatwierdzony. W naszym przypadku b\u0119dzie to http://localhost:3000/userform.
  Atrybut method okre\u015Bla metod\u0119, jakiej chcemy u\u017Cy\u0107 - w naszym
  przypadku niech b\u0119dzie to GET.  Przyk\u0142adowo, Tw\xF3j index.html mo\u017Ce
  wygl\u0105da\u0107 tak:  <!DOCTYPE html> <html lang=\"en\">     <head>         <meta
  charset=\"UTF-8\">         <title>Node Hello world example</title>     </head>     <body>
  \        <form action=\"http://localhost:3000/userform\" method=\"GET\">             <p>
  \                First Name: <input type=\"text\" name=\"first_name\">             </p>
  \            <p>                 Last Name: <input type=\"text\" name=\"last_name\">
  \            </p>             <input type=\"submit\" value=\"Submit\">         </form>
  \    </body> </html> Gdy ju\u017C b\u0119dzie gotowy, wrzu\u0107 go do katalogu
  /assets.  Teraz czas na modyfikacj\u0119 pliku server.js. Najpierw zmie\u0144my
  to, co chcemy wysy\u0142a\u0107, gdy zostanie wys\u0142ane \u017C\u0105danie do
  strony domowej.  Zamie\u0144 wi\u0119c res.send('Hello world') na res.sendFile('/index.html')
  - jak si\u0119 zapewne domy\u015Blasz, res.sendFile() wysy\u0142a w odpowiedzi plik
  zamiast wiadomo\u015Bci.  Musimy r\xF3wnie\u017C doda\u0107 obs\u0142ug\u0119 \u017C\u0105dania
  na endpoint, do kt\xF3rego b\u0119dziemy kierowa\u0107 nasz formularz.  app.get('/userform',
  function (req, res) {     const response = {         first_name: req.query.first_name,
  \        last_name: req.query.last_name     };     res.end(JSON.stringify(response));
  }); W czasie przetwarzania \u017C\u0105dania, tworzymy nowy obiekt response, kt\xF3ry
  ma klucze first_name oraz last_name. Do poszczeg\xF3lnych w\u0142a\u015Bciwo\u015Bci
  przypisujemy dane, kt\xF3re otrzymujemy w obiekcie req (od ang. request), czyli
  w obiekcie z \u017C\u0105daniem. Na koniec wy\u015Bwietlamy nasz obiekt przetworzony
  na typ string za pomoc\u0105 metody JSON.stringify. Po zapisaniu pliku server.js,
  aplikacja powinna pokazywa\u0107 formularz, jak poni\u017Cej.   Po wpisaniu warto\u015Bci
  do input\xF3w i wys\u0142aniu ich, powiniene\u015B zosta\u0107 przekierowany do
  strony /userform, a po znaku zapytania powinny zosta\u0107 wy\u015Bwietlone parametry
  umieszczone przez Ciebie w inputach.   Zadanie: \u017Bonglujemy danymi pomi\u0119dzy
  endpointami Napisz kod obs\u0142uguj\u0105cy formularz zgodnie z wskaz\xF3wkami
  z tego submodu\u0142u, a nast\u0119pnie wy\u015Blij sw\xF3j kod na repozytorium
  oraz przeka\u017C go do sprawdzenia mentorowi.  Podgl\u0105d zadania  https://github.com/martinproxy0/Zadanie_17_4.git
  \  Wyslij link 17.5. Middleware - po\u015Brednik mi\u0119dzy \u017C\u0105daniem
  a odpowiedzi\u0105"
image: ""
specificationVersion: "0.14"
x-rank: "0"
x-alexaRank: 0
created: "2020-12-23"
modified: "2020-12-23"
url: http://api.specificationtoolbox.com/resources/tools/zadanie-17-5/
tags:
- Work
- View
- Uu
- Title
- System
- Submit
- Status
- SKU
- Sets
- Server
- Send
- Run
- Row
- Routing
- Require
- Redux
- React
- Query
- Proxy
- Popular
- Path
- Parser
- Parse
- Package
- Open
- Old
- NodeJS
- Node.js
- New
- My
- Modules
- Middleware
- Method
- Meta
- Me
- Low
- Local
- Listen
- Line
- Last
- JSON
- Jest
- JavaScript
- Java
- Internal
- Index
- IAM
- HTTPS
- HTTP
- HTML
- Host
- Go
- GitHub Postman Search
- GitHub
- Git
- Front
- Framework
- Express
- End
- Dynamic
- CRUD
- Controller
- Command Line Interface
- Command Line
- CLI
- Bid
- Author
- Assets
- Art
- API
- Analog
- Address
- Action
apis: []
x-common:
- type: x-github
  url: https://github.com/martinproxy0/Zadanie_17_5/
include: []
maintainers:
- FN: Kin Lane
  x-twitter: apievangelist
  email: info@apievangelist.com
---