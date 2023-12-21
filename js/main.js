var quotes=[`<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="image/my_photo.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8 info bg-light">
    <div class="card-body">
      <h2 class="card-title text-info">About Me</h2>
      <p class="card-text">I'm abdelhamed mohamed <br /> student at kfs university faculty of computers and
        information IS department </p>

    </div>
  </div>
</div>
</div>`,



`<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="image/1.JPG" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8 info bg-light">
    <div class="card-body">
      <h2 class="card-title text-info">Some Skills</h2>
      <p class="card-text">HTML , CSS , BootStrap and Basic JS <br /><br /> I have worked on some project using
        these skills </p>

    </div>
  </div>
</div>
</div>`,



`<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="image/2.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8 info bg-light">
    <div class="card-body">
      <h2 class="card-title text-info">MY Projects</h2>
      <p class="card-text"><a href="file:///C:/Users/Paragon/Desktop/assignments/task%20bootstrap/index.html"
          target="_blank">DANIELS</a> <br /><a
          href="file:///C:/Users/Paragon/Desktop/assignments/assignment%205/index.html"
          target="_blank">Mealify</a> <br /><a
          href="file:///C:/Users/Paragon/Desktop/assignments/assignment%204/index.html"
          target="_blank">fokir</a>
        <br /><a href="file:///C:/Users/Paragon/Desktop/assignments/assignment%203/index.html"
          target="_blank">Bakery</a>
      </p>


    </div>
  </div>
</div>
</div>`,



`<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="image/3.jpg" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8 info bg-light">
    <div class="card-body">
      <h2 class="card-title text-info">About Me</h2>
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores tempore explicabo
        eveniet maxime illum? Laborum, eligendi? Quisquam in adipisci nesciunt?</p>

    </div>
  </div>
</div>
</div>`,


`
<div class="card mb-3">
<div class="row g-0">
  <div class="col-md-4">
    <img src="image/4.JPG" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8 info bg-light">
    <div class="card-body">
      <h2 class="card-title text-info">About Me</h2>
      <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur doloribus
        obcaecati voluptatibus, corrupti exercitationem eos? </p>

    </div>
  </div>
</div>
</div>`,];



var quotePlace = document.getElementById("quotePlace");
var checkNum;
function showQuotes() {
    var randomNum = Math.floor(Math.random()*4);

    if (checkNum !== randomNum) {
      quotePlace.innerHTML = quotes[randomNum];
    } else {
        if (randomNum === 4) {
            randomNum -= 1;
            quotePlace.innerHTML = quotes[randomNum];
        } else {
            randomNum += 1;
            quotePlace.innerHTML = quotes[randomNum];
        }
    }

    checkNum = randomNum;
}