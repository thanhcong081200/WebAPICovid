
var linkApi = ('https://coronavirus-tracker-api.herokuapp.com/v2/locations/');

function start(){
    ReadOnTheWorld();
    ReadOnSelect();
    // Combobox();
}

start();

function ReadOnTheWorld(){
    fetch(linkApi)
        .then(function(response){
            return response.json();
        })
        .then(function(readall){
            var html = readall.locations.map(covid => {
                var id = covid.id;
                var quocgia = covid.country;
                var danso =covid.country_population;
                var socanhiem = covid.latest.confirmed;
                var socatuvong = covid.latest.deaths;
                var socaphuchoi = covid.latest.recovered;
                var capnhatgannhat = covid.last_updated;

                return `
                <tbody id="list">
                    <tr>
                    <td id="id">${id}</td>
                    <td id="quocgia">${quocgia}</td>
                    <td id="danso">${new Intl.NumberFormat().format(danso)}</td>
                    <td id="soca-nhiem">${socanhiem.toLocaleString('en')}</td>
                    <td id="soca-tuvong">${socatuvong.toLocaleString('en')}</td>
                    <td id="soca-phuchoi">${socaphuchoi.toLocaleString('en')}</td>
                    <td id="capnhat-gannhat">${capnhatgannhat.substring(0,10)}</td>
                    </tr>
                </tbody>
                `;
            }).join('');
            document.getElementById('list').insertAdjacentHTML("afterbegin",html);
        })
}

function ReadOnSelect(){
    // locations/274 : 274 là quốc gia VN 
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/274')
    .then(res => res.json())
    .then(function(data){
            let id = data.location.id;
            let quocgia = data.location.country;
            let danso =data.location.country_population;
            let socanhiem = data.location.latest.confirmed;
            let socatuvong = data.location.latest.deaths;
            let socaphuchoi = data.location.latest.recovered;
            let capnhatgannhat = data.location.last_updated;
            
            document.querySelector('#id').innerHTML=id.toLocaleString('en');
            document.querySelector('#quocgia').innerHTML=quocgia.toLocaleString('en');
            document.querySelector('#danso').innerHTML=danso.toLocaleString('en');
            document.querySelector('#soca-nhiem').innerHTML=socanhiem.toLocaleString('en');
            document.querySelector('#soca-tuvong').innerHTML=socatuvong.toLocaleString('en');
            document.querySelector('#soca-phuchoi').innerHTML=socaphuchoi.toLocaleString('en');
            document.querySelector('#capnhat-gannhat').innerHTML=capnhatgannhat.substring(0,10);
        })
        
}

// function Combobox(){
//     fetch(linkApi)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(readall){
//             var html = readall.locations.map(covid => {
//                 var quocgia = covid.country;
    
//                 return `
//                 <select id="quocgiacb">
//                     <option>${quocgia}</option>
//                 </select>
//                 `;
//             }).join('');
//             document.getElementById('quocgiacb').insertAdjacentHTML("afterbegin",html);
//         })
// }
