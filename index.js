 var employlistholder = document.querySelector(".employlist");
 var interviewlistholder = document.querySelector(".interList");
 var addEmployModal = document.querySelector("#employmodel1");
 var addInterviewModal = document.querySelector("#employmodel2");

 addEmployModal.style.display = "none";
 addInterviewModal.style.display = "none";

 var blured = document.querySelector("#blur");


 function addEmployee() {
     var title = document.querySelector("#title").value;
     var subtitle = document.querySelector("#subtitle").value;
     var post = document.querySelector("#post").value;
     var dept = document.querySelector("#dept").value;


     var newItem =
         `<ul>
         <div class="employee-card">
                  <img  class="user" src="./804501_people_512x512 (1).png" alt="bad connection">
                  <span>
                  <div class="employment" id="employ1">

                    <span class="name">` + title + `</span>
                    <br>
                    <span >` + subtitle + `</span>
                    <br>
                    <span>` + post + `</span>
                    <br>
                    <span>` + dept + `</span>
                    <br>
                    
                  </div>
                </span>
                </div>
              </ul>
               `;

     employlistholder.insertAdjacentHTML('beforeend', newItem);
     addEmployModal.style.display = "none";

     if (!title || !subtitle || !post || !dept) {
         alert("Title or Description cannot be blank");
     }

 }







 function showAddEmpModal() {
     addEmployModal.style.display = "block";
     addInterviewModal.style.display = "none";
 }



 function delet() {
     addEmployModal.style.display = "none";
 }