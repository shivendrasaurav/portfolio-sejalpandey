function oneMonthPrior(date){
    var dateArr = date.split("/")

    dateArr[0] = parseInt(dateArr[0])-1
    var newDate = dateArr[0] + "/" + dateArr[1] + "/" +dateArr[2]
    
    console.log(newDate)
}

oneMonthPrior("8/19/2022  3:25:04 PM")