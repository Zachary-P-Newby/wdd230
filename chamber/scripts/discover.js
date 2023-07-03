function dayCount(date){
    let year = date.getFullYear() * 365;
    let rawMonth = date.getMonth()+1;

    if (rawMonth == 2){
        let month = 28;
    }
    else if(rawMonth in [1,3,5,7,8,10,12]){
        let month = 31;
    }
    else{
        let month = 30;
    }
    
    let result = year + month + date.getDate();

    return result;
}


function LastVisit(){

    const months = Array("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    
    if (!localStorage.getItem("prevVisit")){
    localStorage.setItem("prevVisit", new Date(Date.now()));
    document.getElementById("timeSinceLastVisit").textContent = "You have never been here before."
    }

    else{
        let currentVisit = new Date(Date.now());
        let prevVisit = new Date(Date.now())/* localStorage.getItem("prevVisit") */;
        
        
        let difference = dayCount(currentDate) - dayCount(prevVisit);

        let formattedPrevDate = `${months[prevVisit.getMonth()]}, ${prevVisit.getDate()}th, ${prevVisit.getFullYear()}`

        document.getElementById("timeSinceLastVisit").textContent = `You last visited on ${formattedPrevDate}. It has been ${difference} days since your last visit.`;

        localStorage.setItem("prevVisit", currentVisit);
    }
}



LastVisit();
