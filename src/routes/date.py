def oneMonthPrior(date):
    dateArr = date.split("/")

    print(dateArr)
    newMonth = int(dateArr[0])-1
    newDate = str(newMonth) + "/" + dateArr[1] + "/" +dateArr[2]
    
    print(newDate)


oneMonthPrior("8/19/2022  3:25:04 PM")