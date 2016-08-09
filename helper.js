var skills = '<div class="col-md-3"><img src="./img/%data%.png" alt="my skills" class="img-responsive img-circle"/></div>';

var skills_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12'];

var skills_new = '';

for(var i=0; i < skills_array.length; i += 1){
    skills_new = skills.replace('%data%', skills_array[i]);
    $('.skills-section-images').append(skills_new);
}

//experience section

var experience = '<li><h4>%data% &nbsp; &nbsp; &nbsp; ( %data1% ) </h4><h5>%data2%</h5></li>';

var experience_array = [
   {
       name:'Company Name' ,
       years: 2010-2016, 
       info:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   },
   {
       name:'Company Name' ,
       years:2008-2010, 
       info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   },
   {
       name:'Company Name',
       years: 2000-2008, 
       info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   }
]

var experience_new = '';
for (var i = 0; i < experience_array.length; i += 1) {
    experience_new = experience.replace('%data%', experience_array[i][
        'name']);
    experience_new = experience_new.replace('%data1%', experience_array[i][
        'years']);
    experience_new = experience_new.replace('%data2%', experience_array[i]['info']);
    $('.experience-section-info').append(experience_new);
}


// projects section
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
    name:'Unity Breakout Game',
    img: 'a',
    language: 'C#',
    info:'A video game built using the Unity and C#.'
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