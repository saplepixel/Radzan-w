// Wszystkie miejscowości ze wszystkich linii
const locations = [
    'Przytyk /01/02', 'Młodynie Dolne', 'Młodynie Górne', 'Bukowno przy kościele',
    'Kozłów', 'Ratoszyn', 'Radzanów', 'Zacharzów', 'Czarniecin', 'Gózd',
    'Gózd II', 'Żydy', 'Podlesie', 'Hłeszna I', 'Hłeszna II', 'Branica', 'Stawiszyn', 'Dąbrówka',
    'Sucha ul.Białobrzeska', 'Białobrzegi ul.Polwietnicy (Dworzec)', 
    'Białobrzegi ul.Kościelna Powiatowy Zarząd Dróg Publicznych',
    'Białobrzegi ul.Kościelna', 'Białobrzegi ul.Krakowska',
    'Rogolin', 'Kozłówka Wola', 'PSP Bukówno', 'Młodynie Dolne (Bagno)', 'PSP Czarnocin',
    'Młodynie Dolne (Remiza)', 'Grabina I', 'Grabina II', 'Ocieść', 'Łukaszów',
    'Studzienice/03/04', 'Maksymilianów/05/06', 'Smardzew', 'Błeszno I', 'Błeszno II',
    'Jasionna', 'Białobrzegi ul.Koscielna -Borki', 'Białobrzegi ul.Kościelna -przy Targowisku Miejskim',
    'Białobrzegi ul.Poświętna (Dworzec )', 'Grotki', 'Kadłubska Wola'
].sort();

const busConnections = [];

// LINIA 1 - Przytyk-Białobrzegi przez: Radzanów, Sucha (według rozkładu)
busConnections.push(
{line:'1',busNumber:'1',schedule:{'Przytyk /01/02':'4:30','Studzienice/03/04':'4:35','Maksymilianów/05/06':'4:38','Młodynie Dolne':'4:41','Bukowno przy kościele':'4:44','Młodynie Górne':'4:48','Kadłubska Wola':'4:51','Rogolin':'4:54','Radzanów':'4:57','Smardzew':'5:01','Zacharzów':'5:04','Błeszno I':'5:06','Błeszno II':'5:07','Branica':'5:11','Stawiszyn':'5:14','Dąbrówka':'5:15','Sucha ul.Białobrzeska':'5:19','Białobrzegi ul.Krakowska':'5:23','Białobrzegi ul.Poświętna (Dworzec )':'5:24'}},
{line:'1',busNumber:'2',schedule:{'Przytyk /01/02':'9:08','Studzienice/03/04':'9:13','Maksymilianów/05/06':'9:16','Młodynie Dolne':'9:19','Bukowno przy kościele':'9:22','Młodynie Górne':'9:26','Kadłubska Wola':'9:29','Rogolin':'9:32','Radzanów':'9:35','Smardzew':'9:39','Zacharzów':'9:42','Błeszno I':'9:44','Błeszno II':'9:45','Branica':'9:49','Stawiszyn':'9:52','Dąbrówka':'9:53','Sucha ul.Białobrzeska':'9:57','Białobrzegi ul.Krakowska':'10:01','Białobrzegi ul.Poświętna (Dworzec )':'10:02'}},
{line:'1',busNumber:'3',schedule:{'Przytyk /01/02':'11:13','Studzienice/03/04':'11:18','Maksymilianów/05/06':'11:21','Młodynie Dolne':'11:24','Bukowno przy kościele':'11:27','Młodynie Górne':'11:31','Kadłubska Wola':'11:34','Rogolin':'11:37','Radzanów':'11:40','Smardzew':'11:44','Zacharzów':'11:47','Błeszno I':'11:49','Błeszno II':'11:50','Branica':'11:54','Stawiszyn':'11:57','Dąbrówka':'11:58','Sucha ul.Białobrzeska':'12:02','Białobrzegi ul.Krakowska':'12:06','Białobrzegi ul.Poświętna (Dworzec )':'12:07'}},
{line:'1',busNumber:'4',schedule:{'Przytyk /01/02':'16:08','Studzienice/03/04':'16:13','Maksymilianów/05/06':'16:16','Młodynie Dolne':'16:19','Bukowno przy kościele':'16:22','Młodynie Górne':'16:26','Kadłubska Wola':'16:29','Rogolin':'16:32','Radzanów':'16:35','Smardzew':'16:39','Zacharzów':'16:42','Błeszno I':'16:44','Błeszno II':'16:45','Branica':'16:49','Stawiszyn':'16:52','Dąbrówka':'16:53','Sucha ul.Białobrzeska':'16:57','Białobrzegi ul.Krakowska':'17:01','Białobrzegi ul.Poświętna (Dworzec )':'17:02'}},
{line:'1',busNumber:'5',schedule:{'Przytyk /01/02':'21:09','Studzienice/03/04':'21:14','Maksymilianów/05/06':'21:17','Młodynie Dolne':'21:20','Bukowno przy kościele':'21:23','Młodynie Górne':'21:27','Kadłubska Wola':'21:30','Rogolin':'21:33','Radzanów':'21:36','Smardzew':'21:40','Zacharzów':'21:43','Błeszno I':'21:45','Błeszno II':'21:46','Branica':'21:50','Stawiszyn':'21:53','Dąbrówka':'21:54','Sucha ul.Białobrzeska':'21:58','Białobrzegi ul.Krakowska':'22:02','Białobrzegi ul.Poświętna (Dworzec )':'22:03'}},
// POWROTY Linia 1
{line:'1',busNumber:'6',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'5:31','Białobrzegi ul.Krakowska':'5:32','Sucha ul.Białobrzeska':'5:36','Dąbrówka':'5:40','Stawiszyn':'5:41','Branica':'5:44','Błeszno II':'5:48','Błeszno I':'5:49','Zacharzów':'5:51','Smardzew':'5:54','Radzanów':'5:58','Rogolin':'6:01','Kadłubska Wola':'6:04','Młodynie Górne':'6:07','Bukowno przy kościele':'6:11','Młodynie Dolne':'6:14','Maksymilianów/05/06':'6:17','Studzienice/03/04':'6:20','Przytyk /01/02':'6:25'}},
{line:'1',busNumber:'7',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'10:12','Białobrzegi ul.Krakowska':'10:13','Sucha ul.Białobrzeska':'10:17','Dąbrówka':'10:21','Stawiszyn':'10:22','Branica':'10:25','Błeszno II':'10:29','Błeszno I':'10:30','Zacharzów':'10:32','Smardzew':'10:35','Radzanów':'10:39','Rogolin':'10:42','Kadłubska Wola':'10:45','Młodynie Górne':'10:48','Bukowno przy kościele':'10:52','Młodynie Dolne':'10:55','Maksymilianów/05/06':'10:58','Studzienice/03/04':'11:01','Przytyk /01/02':'11:06'}},
{line:'1',busNumber:'8',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'12:14','Białobrzegi ul.Krakowska':'12:15','Sucha ul.Białobrzeska':'12:19','Dąbrówka':'12:23','Stawiszyn':'12:24','Branica':'12:27','Błeszno II':'12:31','Błeszno I':'12:32','Zacharzów':'12:34','Smardzew':'12:37','Radzanów':'12:41','Rogolin':'12:44','Kadłubska Wola':'12:47','Młodynie Górne':'12:50','Bukowno przy kościele':'12:54','Młodynie Dolne':'12:57','Maksymilianów/05/06':'13:00','Studzienice/03/04':'13:03','Przytyk /01/02':'13:08'}},
{line:'1',busNumber:'9',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'17:19','Białobrzegi ul.Krakowska':'17:20','Sucha ul.Białobrzeska':'17:24','Dąbrówka':'17:28','Stawiszyn':'17:29','Branica':'17:32','Błeszno II':'17:36','Błeszno I':'17:37','Zacharzów':'17:39','Smardzew':'17:42','Radzanów':'17:46','Rogolin':'17:49','Kadłubska Wola':'17:52','Młodynie Górne':'17:55','Bukowno przy kościele':'17:59','Młodynie Dolne':'18:02','Maksymilianów/05/06':'18:05','Studzienice/03/04':'18:08','Przytyk /01/02':'18:13'}},
{line:'1',busNumber:'10',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'22:15','Białobrzegi ul.Krakowska':'22:16','Sucha ul.Białobrzeska':'22:20','Dąbrówka':'22:24','Stawiszyn':'22:25','Branica':'22:28','Błeszno II':'22:32','Błeszno I':'22:33','Zacharzów':'22:35','Smardzew':'22:38','Radzanów':'22:42','Rogolin':'22:45','Kadłubska Wola':'22:48','Młodynie Górne':'22:51','Bukowno przy kościele':'22:55','Młodynie Dolne':'22:58','Maksymilianów/05/06':'23:01','Studzienice/03/04':'23:04','Przytyk /01/02':'23:09'}}
);

// LINIA 2 - Przytyk-Białobrzegi przez: Czarniecin, Jastrzębia (według rozkładu)
busConnections.push(
{line:'2',busNumber:'1',schedule:{'Przytyk /01/02':'6:20','Studzienice/03/04':'6:36','Maksymilianów/05/06':'6:39','Młodynie Dolne':'6:42','Bukowno przy kościele':'6:45','Czarnocin':'6:49','Ocieść':'6:51','Grotki':'6:54','Żydy':'6:56','Podlesie':'6:58','Ratoszyn':'7:01','Radzanów':'7:05','Smardzew':'7:08','Zacharzów':'7:11','Błeszno I':'7:14','Błeszno II':'7:15','Branica':'7:19','Jasionna':'7:23','Białobrzegi ul.Kościelna Powiatowy Zarząd Dróg Publicznych':'7:26','Białobrzegi ul.Koscielna -Borki':'7:29','Białobrzegi ul.Kościelna -przy Targowisku Miejskim':'7:30','Białobrzegi ul.Poświętna (Dworzec )':'7:31'}},
{line:'2',busNumber:'2',schedule:{'Przytyk /01/02':'13:39','Studzienice/03/04':'13:53','Maksymilianów/05/06':'13:56','Młodynie Dolne':'13:59','Bukowno przy kościele':'14:02','Czarnocin':'14:06','Ocieść':'14:08','Grotki':'14:11','Żydy':'14:13','Podlesie':'14:15','Ratoszyn':'14:18','Radzanów':'14:22','Smardzew':'14:25','Zacharzów':'14:28','Błeszno I':'14:31','Błeszno II':'14:32','Branica':'14:36','Jasionna':'14:40','Białobrzegi ul.Kościelna Powiatowy Zarząd Dróg Publicznych':'14:43','Białobrzegi ul.Koscielna -Borki':'14:46','Białobrzegi ul.Kościelna -przy Targowisku Miejskim':'14:47','Białobrzegi ul.Poświętna (Dworzec )':'14:48'}},
{line:'2',busNumber:'3',schedule:{'Przytyk /01/02':'18:10','Studzienice/03/04':'18:24','Maksymilianów/05/06':'18:27','Młodynie Dolne':'18:30','Bukowno przy kościele':'18:33','Czarnocin':'18:37','Ocieść':'18:39','Grotki':'18:42','Żydy':'18:44','Podlesie':'18:46','Ratoszyn':'18:49','Radzanów':'18:53','Smardzew':'18:56','Zacharzów':'18:59','Błeszno I':'19:02','Błeszno II':'19:03','Branica':'19:07','Jasionna':'19:11','Białobrzegi ul.Kościelna Powiatowy Zarząd Dróg Publicznych':'19:14','Białobrzegi ul.Koscielna -Borki':'19:17','Białobrzegi ul.Kościelna -przy Targowisku Miejskim':'19:18','Białobrzegi ul.Poświętna (Dworzec )':'19:19'}},
// POWROTY Linia 2
{line:'2',busNumber:'4',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'7:38','Białobrzegi ul.Kościelna -przy Targowisku Miejskim':'7:39','Białobrzegi ul.Koscielna -Borki':'7:40','Białobrzegi ul.Kościelna Powiatowy Zarząd Dróg Publicznych':'7:43','Jasionna':'7:46','Branica':'7:50','Błeszno II':'7:54','Błeszno I':'7:55','Zacharzów':'7:58','Smardzew':'8:01','Radzanów':'8:04','Ratoszyn':'8:08','Podlesie':'8:11','Żydy':'8:13','Grotki':'8:15','Ocieść':'8:18','Czarnocin':'8:20','Bukowno przy kościele':'8:24','Młodynie Dolne':'8:27','Maksymilianów/05/06':'8:30','Studzienice/03/04':'8:33','Przytyk /01/02':'8:38'}},
{line:'2',busNumber:'5',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'14:58','Białobrzegi ul.Kościelna -przy Targowisku Miejskim':'14:59','Białobrzegi ul.Koscielna -Borki':'15:00','Białobrzegi ul.Kościelna Powiatowy Zarząd Dróg Publicznych':'15:03','Jasionna':'15:06','Branica':'15:10','Błeszno II':'15:14','Błeszno I':'15:15','Zacharzów':'15:18','Smardzew':'15:21','Radzanów':'15:24','Ratoszyn':'15:28','Podlesie':'15:31','Żydy':'15:33','Grotki':'15:35','Ocieść':'15:38','Czarnocin':'15:40','Bukowno przy kościele':'15:44','Młodynie Dolne':'15:47','Maksymilianów/05/06':'15:50','Studzienice/03/04':'15:53','Przytyk /01/02':'15:58'}},
{line:'2',busNumber:'6',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'19:59','Białobrzegi ul.Kościelna -przy Targowisku Miejskim':'20:00','Białobrzegi ul.Koscielna -Borki':'20:01','Białobrzegi ul.Kościelna Powiatowy Zarząd Dróg Publicznych':'20:04','Jasionna':'20:07','Branica':'20:11','Błeszno II':'20:15','Błeszno I':'20:16','Zacharzów':'20:19','Smardzew':'20:22','Radzanów':'20:25','Ratoszyn':'20:29','Podlesie':'20:32','Żydy':'20:34','Grotki':'20:36','Ocieść':'20:39','Czarnocin':'20:41','Bukowno przy kościele':'20:45','Młodynie Dolne':'20:48','Maksymilianów/05/06':'20:51','Studzienice/03/04':'20:54','Przytyk /01/02':'20:59'}}
);

// LINIA 3 - Rogolin-Białobrzegi przez: Radzanów, Sucha (według rozkładu)
busConnections.push(
{line:'3',busNumber:'1',schedule:{'Rogolin':'8:10','Kadłubska Wola':'8:13','Młodynie Górne':'8:16','Bukowno przy kościele':'8:20','Kozłów':'8:22','Grotki':'8:25','Żydy':'8:28','Podlesie':'8:30','Ratoszyn':'8:33','Radzanów':'8:37','Zacharzów':'8:40','Błeszno I':'8:42','Błeszno II':'8:43','Branica':'8:47','Stawiszyn':'8:50','Dąbrówka':'8:52','Sucha ul.Białobrzeska':'8:56','Białobrzegi ul.Krakowska':'9:00','Białobrzegi ul.Poświętna (Dworzec )':'9:05'}},
// POWROTY Linia 3
{line:'3',busNumber:'2',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'9:05','Białobrzegi ul.Krakowska':'9:07','Sucha ul.Białobrzeska':'9:09','Dąbrówka':'9:13','Stawiszyn':'9:15','Branica':'9:18','Błeszno II':'9:22','Błeszno I':'9:23','Zacharzów':'9:25','Radzanów':'9:28','Ratoszyn':'9:32','Podlesie':'9:35','Żydy':'9:37','Grotki':'9:40','Kozłów':'9:43','Bukowno przy kościele':'9:45','Młodynie Górne':'9:49','Kadłubska Wola':'9:52','Rogolin':'9:55'}},
{line:'3',busNumber:'3',schedule:{'Białobrzegi ul.Poświętna (Dworzec )':'10:55','Białobrzegi ul.Krakowska':'10:57','Sucha ul.Białobrzeska':'10:59','Dąbrówka':'11:03','Stawiszyn':'11:05','Branica':'11:08','Błeszno II':'11:12','Błeszno I':'11:13','Zacharzów':'11:15','Radzanów':'11:18','Ratoszyn':'11:22','Podlesie':'11:25','Żydy':'11:27','Grotki':'11:30','Kozłów':'11:33','Bukowno przy kościele':'11:35','Młodynie Górne':'11:39','Kadłubska Wola':'11:42','Rogolin':'11:45'}}
);

// LINIA 4 - Czarnocin-Białobrzegi przez: Radzanów, Sucha (według rozkładu)
busConnections.push(
{line:'4',busNumber:'1',schedule:{'Czarnocin':'9:45','Gózd':'9:47','Żydy':'9:52','Podlesie':'9:54','Ratoszyn':'9:57','Radzanów':'10:01','Zacharzów':'10:04','Stawiszyn':'10:07','Branica':'10:11','Sucha ul.Białobrzeska':'10:14','Białobrzegi ul.Krakowska':'10:24','Białobrzegi ul.Polwietnicy (Dworzec)':'10:26'}},
// POWROTY Linia 4
{line:'4',busNumber:'2',schedule:{'Białobrzegi ul.Polwietnicy (Dworzec)':'12:21','Białobrzegi ul.Krakowska':'12:23','Sucha ul.Białobrzeska':'12:33','Branica':'12:36','Stawiszyn':'12:40','Zacharzów':'12:43','Radzanów':'12:46','Ratoszyn':'12:50','Podlesie':'12:53','Żydy':'12:55','Gózd':'13:00','Czarnocin':'13:02'}},
{line:'4',busNumber:'3',schedule:{'Białobrzegi ul.Polwietnicy (Dworzec)':'12:14','Białobrzegi ul.Krakowska':'12:16','Sucha ul.Białobrzeska':'12:26','Branica':'12:29','Stawiszyn':'12:33','Zacharzów':'12:36','Radzanów':'12:39','Ratoszyn':'12:43','Podlesie':'12:46','Żydy':'12:48','Gózd':'12:53','Czarnocin':'12:55'}}
);

// LINIA 5 - PSP Bukówno - PSP Czarnocin przez: Młodynie (według rozkładu)
busConnections.push(
{line:'5',busNumber:'1',schedule:{'PSP Bukówno':'13:15','Bukówno przy kościele':'13:18','Kozłów':'13:20','Młodynie Dolne':'13:24','Młodynie Dolne (Bagno)':'13:28','Młodynie Górne':'13:31','PSP Czarnocin':'13:41'}}
);

// LINIA 6 - Bukówno - Łukaszów przez: Młodynie (według rozkładu)
busConnections.push(
{line:'6',busNumber:'1',schedule:{'Bukówno':'15:00','Młodynie Górne':'15:06','Młodynie Dolne (Remiza)':'15:08','Młodynie Dolne (Bagno)':'15:11','Młodynie Dolne':'15:13','Bukówno':'15:16','Kozłów':'15:19','PSP Czarnocin':'15:22','Gózd':'15:27','Żydy':'15:34','Grabina I':'15:37','Ocieść':'15:39','Łukaszów':'15:40'}}
);

// LINIA 7 - PSP Bukówno - Rogolin przez Młodynie (według rozkładu)
busConnections.push(
{line:'7',busNumber:'1',schedule:{'PSP Bukówno':'12:15','Bukówno przy kościele':'12:20','Kozłów':'12:23','Młodynie Dolne':'12:28','Młodynie Dolne (Bagno)':'12:33','Młodynie Dolne (Remiza)':'12:35','Młodynie Górne':'12:38','Rogolin':'12:41'}}
);

// LINIA 8 - PSP Czarnocin - PSP Bukówno przez: Grabina II (według rozkładu)
busConnections.push(
{line:'8',busNumber:'1',schedule:{'PSP Czarnocin':'15:25','Ocieść':'15:29','Gózd':'15:34','Grabina II':'15:36','Żydy':'15:38','Gózd':'15:42','PSP Bukówno':'15:49'}}
);

// LINIA 9 - PSP Czarnocin - Gózd przez: Grabina II (według rozkładu)
busConnections.push(
{line:'9',busNumber:'1',schedule:{'PSP Czarnocin':'14:40','Łukaszów':'14:45','Ocieść':'14:48','Gózd':'14:53','Grabina II':'14:56','Żydy':'14:59','Gózd':'15:02'}}
);

// Funkcja generująca wszystkie połączenia
function generateAllConnections(){const c=[];busConnections.forEach(b=>{const s=Object.keys(b.schedule);for(let i=0;i<s.length;i++){for(let j=i+1;j<s.length;j++){const f=s[i],t=s[j],dt=b.schedule[f],at=b.schedule[t];const[dh,dm]=dt.split(':').map(Number),[ah,am]=at.split(':').map(Number);const dur=(ah*60+am)-(dh*60+dm),h=Math.floor(dur/60),m=dur%60;c.push({line:b.line,busNumber:b.busNumber,from:f,to:t,departureTime:dt,arrivalTime:at,duration:h>0?`${h}h ${m}min`:`${m} min`,direct:j===i+1,stops:s.slice(i,j+1)});}}});return c;}
const allConnections=generateAllConnections();

// DOM
const fromInput=document.getElementById('from'),toInput=document.getElementById('to'),dateInput=document.getElementById('date'),searchBtn=document.getElementById('search'),swapBtn=document.getElementById('swap'),resultsDiv=document.getElementById('results'),fromSuggestions=document.getElementById('from-suggestions'),toSuggestions=document.getElementById('to-suggestions'),favoritesDiv=document.getElementById('favorites');
dateInput.valueAsDate=new Date();

// Sugestie
function showSuggestions(input,div,q){if(!q){div.classList.remove('active');return;}const f=locations.filter(l=>l.toLowerCase().includes(q.toLowerCase()));if(!f.length){div.classList.remove('active');return;}div.innerHTML=f.map(l=>{const r=new RegExp(`(${q})`,'gi');return `<div class="suggestion-item" data-value="${l}">${l.replace(r,'<strong>$1</strong>')}</div>`;}).join('');div.classList.add('active');div.querySelectorAll('.suggestion-item').forEach(i=>{i.addEventListener('click',()=>{input.value=i.dataset.value;div.classList.remove('active');});});}
fromInput.addEventListener('input',e=>showSuggestions(fromInput,fromSuggestions,e.target.value));
toInput.addEventListener('input',e=>showSuggestions(toInput,toSuggestions,e.target.value));
document.addEventListener('click',e=>{if(!fromInput.contains(e.target)&&!fromSuggestions.contains(e.target))fromSuggestions.classList.remove('active');if(!toInput.contains(e.target)&&!toSuggestions.contains(e.target))toSuggestions.classList.remove('active');});
swapBtn.addEventListener('click',()=>{const t=fromInput.value;fromInput.value=toInput.value;toInput.value=t;});

// Guzik Dworzec
const setDworzecBtn=document.getElementById('set-dworzec');
setDworzecBtn.addEventListener('click',()=>{toInput.value='Białobrzegi ul.Poświętna (Dworzec )';toSuggestions.classList.remove('active');});

// Wyszukiwanie
function searchConnections(){const from=fromInput.value.trim(),to=toInput.value.trim();if(!from||!to){resultsDiv.innerHTML='<div class="no-results">Proszę wypełnić pola wyszukiwania</div>';return;}if(from.toLowerCase()===to.toLowerCase()){resultsDiv.innerHTML='<div class="no-results">Miejscowość początkowa i końcowa nie mogą być takie same</div>';return;}let r=allConnections.filter(c=>c.from.toLowerCase()===from.toLowerCase()&&c.to.toLowerCase()===to.toLowerCase());const fd=document.getElementById('filter-direct').checked,fm=document.getElementById('filter-morning').checked,fa=document.getElementById('filter-afternoon').checked,fe=document.getElementById('filter-evening').checked;if(fd)r=r.filter(c=>c.direct);if(fm||fa||fe)r=r.filter(c=>{const h=parseInt(c.departureTime.split(':')[0]);return(fm&&h>=6&&h<12)||(fa&&h>=12&&h<18)||(fe&&h>=18&&h<22);});displayResults(r,from,to);}

// Wyświetlanie
function displayResults(r,from,to){if(!r.length){resultsDiv.innerHTML='<div class="no-results">Nie znaleziono połączeń 😔<br><small>Sprawdź nazwy przystanków</small></div>';return;}resultsDiv.innerHTML=`<h2>Znaleziono ${r.length} ${r.length===1?'połączenie':r.length<5?'połączenia':'połączeń'}</h2><p style="color:#666;margin-bottom:20px;">Trasa: ${from} → ${to}</p>${r.map(c=>`<div class="result-item"><button class="favorite-btn" onclick="toggleFavorite('${from.replace(/'/g,"\\'")}','${to.replace(/'/g,"\\'")}')"> ${isFavorite(from,to)?'⭐':'☆'}</button><div class="result-header"><div class="bus-number">Linia ${c.line}</div><div class="duration">⏱️ ${c.duration}</div></div><div class="route-info"><div><div class="time">${c.departureTime}</div><div class="location">${c.from}</div></div><div class="arrow">→</div><div><div class="time">${c.arrivalTime}</div><div class="location">${c.to}</div></div></div><div style="margin-top:10px;"><span class="badge ${c.direct?'direct':'transfer'}">${c.direct?'✓ Bezpośredni':'↻ Przez '+(c.stops.length-2)+' '+(c.stops.length-2===1?'przystanek':'przystanki')}</span><details style="margin-top:10px;"><summary style="cursor:pointer;color:#667eea;font-weight:600;">📍 Wszystkie przystanki (${c.stops.length})</summary><div style="margin-top:10px;padding:10px;background:#f5f5f5;border-radius:5px;font-size:14px;">${c.stops.map((s,i)=>{const t=busConnections.find(b=>b.line===c.line&&b.busNumber===c.busNumber).schedule[s];return `<div style="padding:5px 0;${i<c.stops.length-1?'border-bottom:1px solid #e0e0e0;':''}"><strong style="color:#667eea;">${t}</strong> - ${s}</div>`;}).join('')}</div></details></div></div>`).join('')}`;}

// Ulubione
function getFavorites(){const f=localStorage.getItem('favorites');return f?JSON.parse(f):[];}
function saveFavorites(f){localStorage.setItem('favorites',JSON.stringify(f));}
function isFavorite(from,to){return getFavorites().some(f=>f.from===from&&f.to===to);}
function toggleFavorite(from,to){let f=getFavorites();const i=f.findIndex(x=>x.from===from&&x.to===to);i>=0?f.splice(i,1):f.push({from,to});saveFavorites(f);displayFavorites();searchConnections();}
function displayFavorites(){const f=getFavorites();if(!f.length){favoritesDiv.innerHTML='<p style="color:#666;">Brak ulubionych tras</p>';return;}favoritesDiv.innerHTML=f.map((fav,i)=>`<div class="favorite-item" onclick="loadFavorite('${fav.from.replace(/'/g,"\\'")}','${fav.to.replace(/'/g,"\\'")}')"><span>⭐ ${fav.from} → ${fav.to}</span><button class="remove-favorite" onclick="event.stopPropagation();removeFavorite(${i})">Usuń</button></div>`).join('');}
function loadFavorite(from,to){fromInput.value=from;toInput.value=to;searchConnections();window.scrollTo({top:0,behavior:'smooth'});}
function removeFavorite(i){let f=getFavorites();f.splice(i,1);saveFavorites(f);displayFavorites();}

// Events
searchBtn.addEventListener('click',searchConnections);
fromInput.addEventListener('keypress',e=>{if(e.key==='Enter')searchConnections();});
toInput.addEventListener('keypress',e=>{if(e.key==='Enter')searchConnections();});
document.querySelectorAll('.filters input[type="checkbox"]').forEach(c=>{c.addEventListener('change',()=>{if(fromInput.value&&toInput.value)searchConnections();});});

// Init
displayFavorites();
resultsDiv.innerHTML='<div class="no-results">Wpisz miejscowości i kliknij "Szukaj połączeń" 🔍</div>';
