var skills =

var skills_array = ['1','2','3','4','5','6','7','8','9','10','11','12']

var skills_new = '';

for(var i=0; i < skills_array.length; i += 1){
    skills_new = skills.replace('%data%', skills_array[i]);
    $('.skills-section-images').append(skills_new);

}