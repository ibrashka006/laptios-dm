//EVENT LOOP
//setTimeout, setInterval

const btn=document.querySelector('#laptops')
const olTag=document.querySelector('.list')
const btnAcer=document.querySelector('#Acer')
const searchInput=document.querySelector('#search')
const btnHP=document.querySelector('#HP')
const btnLenovo=document.querySelector('#Lenovo')
const btnDell=document.querySelector('#Dell')
const btnAsus=document.querySelector('#Asus')
const btnMacbook=document.querySelector('#Macbook')
const spinner=document.querySelector('#spinner')
const btnHuawei=document.querySelector('#Huawei')



    const laptops=[
        {title:'Acer', ssd:512, vCard:true, ram:16, price:53000, year:2022, img:'https://object.pscloud.io/cms/cms/Photo/img_0_62_2757_0_6.png'},
        {title:'HP', ssd:256, vCard:true, ram:8, price:43000, year:2020, img:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06571301.png'},
        {title:'Lenovo', ssd:128, vCard:false, ram:8, price:20000, year:2019, img:'https://static.lenovo.com/ww/img/new-homepage/default/lenovo-pcs-tablets-hover.jpg'},
        {title:'Dell', ssd:512, vCard:true, ram:32, price:80000, year:2021, img:'https://blogs.windows.com/wp-content/uploads/prod/sites/2/2016/09/Dell-Sept-14.jpg'},
        {title:'Asus', ssd:1000, vCard:true, ram:32, price:120000, year:2023, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsp73-0ktwsI-FdIQ5wuPyy6z07Sd4vGq6w&usqp=CAU'},
        {title:'MacBook', ssd:512, vCard:true, ram:32, price:90000, year:2022, img:'https://antimonopolia.gov.kg/wp-content/uploads/2023/03/macbook-pro.jpg'},
        {title:'Huawei', ssd:512, vCard:true, ram:11, price:70000, year:2020, img:'https://tv-it.com/storage/huawei-matebook-d15-laptop-intel-ci5-1135g7-8gb-ram-256gb-ssd-intel-iris-xe-graphics-156-inch-fhd-win11-silver-2-years-warranty-1-1.png'},
    ]
    function showLaptops(array){
      olTag.innerHTML=''
      for (const laptop of array) {
          olTag.innerHTML+=`
          <li>
              <h4>${laptop.title}</h4>
              <img width='250px' src='${laptop.img}' />
              <p> ОЗУ ${laptop.ram} GB</p>
              <p> Память ${laptop.ssd} гиги</p>
              <P>Цена ${laptop.price} Сом </P>
              <p>  ${laptop.year}-год выпуска</p>
          </li>
        `   
      }
  }
 
  function searchLaptops() {
      const searchInput = document.getElementById('search').value.toUpperCase();
      const filteredLaptops = laptops.filter((laptop)=>
      laptop.title.toUpperCase().startsWith(searchInput)
      );
      showLaptops(filteredLaptops)
  }
 btn.onclick=()=>{
     spinner.style.display='block'
     setTimeout(()=>{
         showLaptops(laptops)
         spinner.style.display='none'
     }, 2000)
 }
//  
//  laptops.onclick=()=>{
//    setTimeout(()=>{
//      console.log(laptops);
//      renderLaptops(laptops)
//    }
//    
//    )
//  }
//  function renderLaptops(array){
//    olTag.innerHTML=''
//    for (const laptop of array){
//      olTag.innerHTML+=`
//      <li>
//      <img src=${laptop.img} alt=""/>
//      <p>${title}</p>
//      <p>${title}</p>
//      <p>${title}</p>
//      </li>`
//    }
//  }
//  function searchLaptops(){
//    const searchInput=document.getElementById('search').value.toUpperCase();
//    const filteredLaptops=laptops.filter((laptop)=>
//    laptop.name.toUpperCase().startsWith(searchInput)
//    );
//    renderLaptops(filteredLaptops)
//  }
  btnAcer.onclick=()=>{
      spinner.style.display='block'
      setTimeout(()=>{
          spinner.style.display='none'
      Acer=laptops.filter((acer) => acer.title==='Acer')
      showLaptops(Acer)
  }, 1000)
  }
  btnHP.onclick=()=>{
      spinner.style.display='block'
      setTimeout(()=>{
          spinner.style.display='none'
      HP=laptops.filter((hp) => hp.title==='HP')
      showLaptops(HP)
  }, 1000)
  }
  btnLenovo.onclick=()=>{
      spinner.style.display='block'
      setTimeout(()=>{
          spinner.style.display='none'
      Lenovo=laptops.filter((lenovo) => lenovo.title==='Lenovo')
      showLaptops(Lenovo)
  }, 1000)
  }
  btnDell.onclick=()=>{
      spinner.style.display='block'
      setTimeout(()=>{
          spinner.style.display='none'
      Dell=laptops.filter((dell) => dell.title==='Dell')
      showLaptops(Dell)
  }, 1000)
  }
  btnAsus.onclick=()=>{
      spinner.style.display='block'
      setTimeout(()=>{
          spinner.style.display='none'
      Asus=laptops.filter((asus) => asus.title==='Asus')
      showLaptops(Asus)
  }, 1000)
  }
  btnMacbook.onclick=()=>{
      spinner.style.display='block'
      setTimeout(()=>{
          spinner.style.display='none'
          macbook=laptops.filter((asus) => asus.title==='MacBook')
      showLaptops(macbook)
  }, 1000)
  }
  btnHuawei.onclick=()=>{
    spinner.style.display='block'
    setTimeout(()=>{
        spinner.style.display='none'
        Huawei=laptops.filter((asus) => asus.title==='Huawei')
    showLaptops(Huawei)
}, 1000)
  }