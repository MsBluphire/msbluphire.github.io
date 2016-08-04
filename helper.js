var skills = '<div class="col-md-3"><img src="./img/img1.png" alt="my skills" class="img-responsive img-circle"/></div>';

var skills_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12'];

var skills_new = '';

for(var i=0; i < skills_array.length; i += 1){
    skills_new = skills.replace('%data%', skills_array[i]);
    $('.skills-section-images').append(skills_new);

}

//experience section

var experience = '<li><h4>%data% &nbsp; &nbsp; &nbsp; ( %data1% ) </h4><h5>%data2%</h5></li>';

var experience_array = [
   {},
   {},
   {}
]