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

var projects = '<li><h3>...</h3><div class="row"><div class="col-md-3"><img src="./img/%data1%.gif" alt="project-images" class="img-responsive"></div><div class="col-md-9"><h3>Languages(s): %data2%</h3><h5>%data3%</h5></div></div></li><hr>'
var projects_array = [
{
    name: '' ,
    img: '',
    language: '' ,
    info:''
    },
{
    name: '',
    img: '',
    language: '',
    info:''
    },
{
    name: 'Unity Game App',
    img: '',
    language: '',
    info:''
    }
];

var projects_new = '';

for(var i=0; i < projects_array.length; i += 1){
    projects_new = projects.replace('%data%', projects_array[i]['name']);
    projects_new = projects_new.replace('%data1%', projects_array[i]['img'
    ]);
    projects_new = projects_new.replace('%data2%', projects_array[i]['language']);
    projects_new = projects_new.replace('%data3%', projects_array[i]['info']);
    $('.projects-section-info').append(projects_new);

}