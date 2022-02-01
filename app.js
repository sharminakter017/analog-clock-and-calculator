
const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');


setInterval(function(){
    
let date = new Date()
let current_sec = date.getSeconds();
let current_min = date.getMinutes()
let current_hour = date.getHours();
let net_hour = current_hour > 12 ? current_hour - 12 : current_hour ;

sec.style.transform = `rotate(${thankU(60, current_sec)}deg)`;
min.style.transform = `rotate(${thankU(60,  current_min)}deg)`;
hour.style.transform = `rotate(${thankU(12,  net_hour)}deg)`;

}, 1000);





function thankU(date,curr){
    return (360 * curr)/date;
}








//=================== skill checkbox select ==================>


const skills = document.querySelectorAll('.skills');
const skill_all = document.querySelector('#skill_all');

skills.forEach(skill =>{
    skill.addEventListener('change', function(){

        let all_data = document.querySelectorAll('.skills:checked');

        let skill_arr = [];
        all_data.forEach(data =>{
            skill_arr.push(data.value);
        })

        let list = '';

        skill_arr.map(lists =>{
            list += `<li class="list-group-item">${lists}</li>`
        })


        skill_all.innerHTML = list;





    })
});





//================ calculator part ====================>

  let cal_data = [];

  function valGet(val){

    cal_data.push(val)
    document.querySelector('.top_monitor').innerHTML = cal_data.join('');
    document.querySelector('.main_monitor').innerHTML = 0;

  };


  function finalresult(){

      let cal_string = cal_data.join('');
      document.querySelector('.main_monitor').innerHTML = eval(cal_string);


  };

  function allclear(){

    cal_data ='';

    document.querySelector('.top_monitor').innerHTML = 0;
    document.querySelector('.main_monitor').innerHTML = '';

  };

  function  back(){
      cal_data.pop();
      document.querySelector('.top_monitor').innerHTML = cal_data.join('');

  }

  function musa(){
    document.querySelector('.top_monitor').innerHTML = '';
    document.querySelector('.main_monitor').innerHTML = '';

  }