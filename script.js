// default tab 
let defaultTab = "All";

// container selection 
const allContainer =document.getElementById('all-Container');
const interviewContainer =document.getElementById('Interview-Container');
const rejectedContainer =document.getElementById('Rejected-Container');
const emptycontainer =document.getElementById('empty-container');

// troggle btn style 
const activetorggle = [ 'bg-[#3B82F6]'];
const inactivetroggle = ['bg-[#FFFFFF]'];

// troglle btn active and inactive 
function btn(btnSelect) {
  const idNickNames =[ 'All','Interview','Rejected'];

  defaultTab=btnSelect;

//   btn style change
  for (const nickName of idNickNames ) {
          const statusElement = document.getElementById('status' + nickName);

// if nickName equal btnSelect add activetorggle and remove inactivetroggle
          if (nickName === btnSelect) {
                  
                  statusElement.classList.remove(...inactivetroggle);
                  statusElement.classList.add(...activetorggle);
          }
// if nickName not equal btnSelect remove activetorggle and add inactivetroggle
          else{
                    statusElement.classList.add(...inactivetroggle) ;
                    statusElement.classList.remove(...activetorggle) 
                    
          }
  }

  emptycontainer.classList.add('hidden');

// connecting troggle btn with data 
  const pages =[allContainer, interviewContainer, rejectedContainer];
  for(const page of pages){
        page.classList.add('hidden');  
  }

  if (btnSelect ==='All') {
        allContainer.classList.remove('hidden');

        if (allContainer.children.length < 1) {
            emptycontainer.classList.remove('hidden');
        }
  }
  else if(btnSelect==='Interview'){
        interviewContainer.classList.remove('hidden');
        if (interviewContainer.children.length < 1) {
            emptycontainer.classList.remove('hidden');
        }
  }
  else {
        rejectedContainer.classList.remove('hidden');
        if (rejectedContainer.children.length < 1) {
            emptycontainer.classList.remove('hidden');
        }
  }
  countStatus();
} 


// count section
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const containerCount =document.getElementById("container-count");



btn(defaultTab);
// tatal job count 

document.getElementById('full-data').addEventListener('click',function (jobData) {
        const jobElement = jobData.target;
        const jobCard = jobElement.closest('.job-card');
        const cardnode = jobCard.parentNode;
        const status = jobCard.querySelector('.status');
           

     if (jobElement.classList.contains('interview')) {
        status.innerText = 'Interviewed';
        interviewContainer.appendChild(jobCard);
        countStatus();  
        btn(defaultTab)
     }

     if (jobElement.classList.contains('rejected')) {
        status.innerText = 'Rejectected';
        rejectedContainer.appendChild(jobCard);
        countStatus();
        btn(defaultTab)
     }

     if (jobElement.classList.contains('delete')) {
        cardnode.removeChild(jobCard);
        countStatus();
        btn(defaultTab)
     }


})
countStatus()
btn(defaultTab);
function countStatus() {
      const countvalue ={
            All : allContainer.children.length,
            Interview : interviewContainer.children.length,
            Rejected : rejectedContainer.children.length
      };
      totalCount.innerText= countvalue.All;
      interviewCount.innerText=countvalue.Interview;
      rejectedCount.innerText=countvalue.Rejected;

      containerCount.innerText = countvalue[defaultTab];

}


countStatus();






