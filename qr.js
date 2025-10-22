let UserId = localStorage.getItem("UserId");
let Token = localStorage.getItem("token");

if(localStorage.getItem("UserId") && localStorage.getItem("token")){

  let ul = document.querySelector("ul")
  ul.innerHTML = `
  

  <img style="margin-top: -13px;" src="../apple-touch-icon.png" alt="Logo" width="34" height="28" class="d-inline-block align-text-top">
  <span style="color: red; font-size: 25px; font-weight: bold;">MagicLix</span> 
<li id="kino">Kinolar</li>
<li id="aktyor">Aktyorlar</li>
<li id="qr">Qr code Generator</li>
<li id="obhavo">Ob-havo</li>
   <li id="addactors">Add actors</li>
<li id="addmovies">Add movies</li>
<svg id="search" style="color: white; cursor:pointer; " xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
     <li class = "close"><button id="btn" class="btn ">To exit</button></li>
  `
  // append the ul to the document body
  }
  
  // document.querySelector("#exitt").addEventListener("click", function(e){
  //   localStorage.clear()
  // })
  
  
  
  
  document.addEventListener("click", async function(e){
  if(e.target.closest(".close")){
  localStorage.clear()
  window.location.href = "../login.html"
  let ul = document.querySelector("ul")
  ul.innerHTML = `
  
  <img style="margin-top: -13px;" src="../apple-touch-icon.png" alt="Logo" width="34" height="28" class="d-inline-block align-text-top">
            <span style="color: red; font-size: 25px; font-weight: bold;">MagicLix</span> 
        <li id="kino">Kinolar</li>
          <li id="aktyor">Aktyorlar</li>
          <li id="qr">Qr code Generator</li>
          <li id="obhavo">Ob-havo</li>
          <li id="login">Login</li>
          <svg id="search" style="color: white; cursor:pointer; " xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        
  `
  let auth = document.querySelector('#formAuth') 
    auth.innerHTML=`
    <label for="" style="color: white;">Login</label>
  <input type="login" id="nimajon" class="form-control">
  <label for="" style="color: white;">Parol</label>
  <input type="password" id="password" class="form-control">
  <button class="btn btn-outline-warning mt-3">Login</button>
    `
  }
  })
  
  



document.addEventListener("DOMContentLoaded", async function(e){
    document.querySelector("#yarat").addEventListener("click", async function(e){
        let p = document.querySelector("#qrcode")
        p.innerHTML = ""
        let input = document.querySelector("#inputt").value.trim()


        // let request = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`)
        // let response = await request.text()
        // console.log(response);

        p.innerHTML = `
        <center>
         <img src="https://api.qrserver.com/v1/create-qr-code/?data=${input}&amp;size=100x100" alt="" title="" style="z-index: 99; position: absolute; margin-top: 140px; margin-left: 95px;" />

<svg fill="none" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><g transform="translate(10, 15)"><path d="M77.8839 104.403C86.1528 98.8825 111.6 73.7519 120.726 76.5037C123.217 79.2462 121.895 87.2101 118.153 99.6211C113.474 115.135 92.1491 141.558 74.8831 149.293C57.6171 157.029 32.9818 157.565 27.4335 142.95C22.9948 131.257 27.7309 116.194 35.8117 113.884C45.9802 110.977 68.6386 110.575 77.8839 104.403Z" fill="#AA80F9"></path><path d="M46.2672 134.868C46.793 140.004 49.0001 148.349 45.7452 148.303C41.9449 148.249 37.5488 142.393 36.7447 134.538C35.9406 126.683 39.3254 121.731 41.956 121.462C45.9271 121.056 45.4631 127.013 46.2672 134.868Z" fill="#FFF8EE"></path><path d="M33.1637 130.03C33.2627 130.997 32.7578 133.168 31.7147 133.204C30.4968 133.245 29.2441 132.054 29.0927 130.575C28.9413 129.096 30.0392 127.8 30.8864 127.713C32.1653 127.582 33.0123 128.551 33.1637 130.03Z" fill="#FFF8EE"></path><path d="M33.8549 138.324C33.9677 139.425 33.4379 141.894 32.3152 141.927C31.0043 141.966 29.6481 140.603 29.4756 138.918C29.3032 137.233 30.4768 135.765 31.3883 135.672C32.7644 135.531 33.6824 136.639 33.8549 138.324Z" fill="#FFF8EE"></path><path d="M37.5557 144.69C38.0283 145.55 38.4659 147.738 37.5863 148.14C36.5593 148.608 35.0087 147.949 34.286 146.633C33.5634 145.317 33.9845 143.73 34.6756 143.35C35.719 142.777 36.833 143.374 37.5557 144.69Z" fill="#FFF8EE"></path><path d="M197 102.888C188.285 98.2948 160.633 76.1353 151.922 79.7819C149.747 82.7397 151.866 90.4527 156.825 102.3C163.025 117.11 186.747 140.965 204.555 146.82C222.363 152.675 246.695 150.68 250.666 135.708C253.843 123.731 247.799 111.455 239.599 110.005C229.28 108.182 206.743 108.024 197 102.888Z" fill="#AA80F9"></path><path d="M228.217 126.98C228.224 131.674 225.921 142.034 229.801 141.685C234.332 141.278 238.514 134.936 238.503 127.757C238.492 120.578 233.921 114.899 230.747 114.904C225.956 114.911 228.206 119.801 228.217 126.98Z" fill="#FFF8EE"></path><path d="M241.381 122.718C241.648 123.862 243.052 126.151 244.222 125.79C245.587 125.368 246.511 123.524 246.103 121.774C245.694 120.025 243.973 118.965 243.001 119.192C241.533 119.534 240.972 120.968 241.381 122.718Z" fill="#FFF8EE"></path><path d="M241.654 130.418C241.439 131.574 241.807 134.234 243.023 134.373C244.442 134.535 246.029 133.218 246.358 131.451C246.687 129.685 245.536 128.023 244.555 127.84C243.073 127.564 241.983 128.652 241.654 130.418Z" fill="#FFF8EE"></path><path d="M239.191 137.783C238.584 138.789 237.992 141.409 239.081 141.966C240.353 142.618 242.302 141.942 243.231 140.404C244.16 138.866 243.668 136.906 242.813 136.389C241.523 135.61 240.12 136.245 239.191 137.783Z" fill="#FFF8EE"></path><path d="M206.358 199.031C198.873 194.041 185.582 178.176 177.077 179.601C174.526 181.778 160.272 206.624 162.21 218.191C164.633 232.651 190.199 246.849 204.81 255.768C224.926 268.048 244.834 265.62 253.203 249.917C258.526 239.931 257.17 221.19 250.182 218.191C241.388 214.418 223.379 210.379 206.358 199.031Z" fill="#AA80F9"></path><path d="M227.228 235.27C225.48 240.348 224.298 252.258 228.181 253.18C232.715 254.256 239.132 248.8 241.805 241.034C244.479 233.268 242.181 225.598 239.109 224.54C234.472 222.944 229.901 227.504 227.228 235.27Z" fill="#FFF8EE"></path><path d="M247.661 231.908C247.309 232.93 247.335 235.419 248.497 235.735C249.854 236.104 251.556 235.148 252.094 233.584C252.632 232.021 251.723 230.324 250.793 230.004C249.391 229.521 248.199 230.345 247.661 231.908Z" fill="#FFF8EE"></path><path d="M245.037 241.174C244.688 242.189 244.72 244.662 245.881 244.979C247.237 245.349 248.936 244.401 249.471 242.849C250.005 241.297 249.093 239.608 248.163 239.288C246.761 238.805 245.572 239.622 245.037 241.174Z" fill="#FFF8EE"></path><path d="M240.828 249.667C240.447 250.774 240.41 253.447 241.574 253.757C242.933 254.12 244.674 253.048 245.257 251.355C245.84 249.661 244.966 247.86 244.037 247.541C242.635 247.058 241.411 247.974 240.828 249.667Z" fill="#FFF8EE"></path><path d="M69.6423 196.968C77.1272 191.978 90.4178 176.113 98.9234 177.538C101.474 179.714 115.728 204.56 113.79 216.128C111.367 230.588 85.801 244.786 71.1897 253.705C51.0739 265.984 31.1658 263.557 22.7965 247.854C17.4743 237.868 18.8298 219.127 25.8181 216.128C34.6119 212.355 52.6213 208.316 69.6423 196.968Z" fill="#AA80F9"></path><path d="M48.772 233.207C50.5201 238.285 51.702 250.195 47.8186 251.117C43.2844 252.193 36.8681 246.737 34.1947 238.971C31.5212 231.205 33.8191 223.535 36.8906 222.477C41.5276 220.881 46.0985 225.441 48.772 233.207Z" fill="#FFF8EE"></path><path d="M28.3389 229.845C28.6907 230.867 28.6646 233.356 27.5028 233.672C26.1464 234.041 24.4443 233.084 23.9062 231.521C23.3681 229.958 24.2774 228.26 25.2065 227.941C26.6092 227.458 27.8008 228.282 28.3389 229.845Z" fill="#FFF8EE"></path><path d="M30.9625 239.111C31.3119 240.126 31.2804 242.599 30.1188 242.916C28.7626 243.286 27.0638 242.338 26.5294 240.786C25.995 239.234 26.9074 237.545 27.8365 237.225C29.2391 236.742 30.4281 237.559 30.9625 239.111Z" fill="#FFF8EE"></path><path d="M35.1716 247.604C35.5528 248.711 35.5902 251.384 34.4262 251.694C33.0673 252.056 31.3257 250.985 30.7428 249.291C30.1598 247.598 31.0337 245.797 31.9628 245.477C33.3654 244.995 34.5887 245.911 35.1716 247.604Z" fill="#FFF8EE"></path><path d="M200.299 162.555C204.398 190.455 201.407 209.96 192.861 222.787C184.471 235.381 170.003 242.58 148.513 244.268C105.478 245.116 85.0422 233.333 75.4864 217.154C65.5766 200.376 66.2233 177.243 69.4829 152.727C71.7893 135.38 78.0348 119.583 88.7743 107.767C99.442 96.0303 114.834 87.8939 136.149 86.2445C152.045 85.0145 166.408 93.3551 177.834 107.75C189.263 122.148 197.296 142.117 200.299 162.555Z" fill="#FFF8EE" stroke="#AA80F9" stroke-width="9.59142"></path><ellipse cx="89.6126" cy="29.6043" rx="16.5907" ry="15.3209" transform="rotate(-4.4247 89.6126 29.6043)" fill="#AA80F9"></ellipse><ellipse cx="91.501" cy="31.7232" rx="13.0704" ry="12.07" transform="rotate(-4.4247 91.501 31.7232)" fill="#FFF8EE"></ellipse><ellipse cx="164.578" cy="18.4778" rx="15.5871" ry="15.3209" transform="rotate(-4.4247 164.578 18.4778)" fill="#AA80F9"></ellipse><ellipse cx="163.188" cy="21.7186" rx="11.706" ry="11.5061" transform="rotate(-4.4247 163.188 21.7186)" fill="#FFF8EE"></ellipse><path d="M183.978 51.0296C185.912 76.0238 166.001 97.6031 135.141 99.991C104.281 102.379 80.6675 88.5468 78.3738 58.9035C76.4397 33.9093 97.277 11.8669 128.137 9.47892C158.997 7.09097 182.044 26.0354 183.978 51.0296Z" fill="#AA80F9"></path><path d="M150.774 72.9969C151.62 83.9313 141.362 93.6423 127.861 94.687C114.361 95.7316 102.73 87.7144 101.884 76.78C101.038 65.8456 109.086 59.8017 122.586 58.7571C136.087 57.7124 149.928 62.0625 150.774 72.9969Z" fill="#FFF8EE"></path><path d="M121.852 72.3618C122.101 75.5777 119.084 78.4337 115.113 78.7409C111.142 79.0482 107.722 76.6903 107.473 73.4744C107.224 70.2586 109.722 69.6255 113.693 69.3182C117.663 69.011 121.603 69.146 121.852 72.3618Z" fill="black"></path><ellipse rx="2.67867" ry="2.63293" transform="matrix(-0.99702 0.0771489 0.0771489 0.99702 141.271 53.8614)" fill="black"></ellipse><ellipse rx="2.67867" ry="2.63293" transform="matrix(-0.99702 0.0771489 0.0771489 0.99702 109.038 56.9506)" fill="black"></ellipse><rect x="55.5" y="106.5" width="171" height="141" rx="6.5" fill="white" stroke="#8859C2" stroke-width="3"></rect><g transform="translate(75, 110)scale(0.45)" fill="none"></g></g></svg>
</center>
`

        
    })
})

