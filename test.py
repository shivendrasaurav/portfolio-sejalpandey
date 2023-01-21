def oneMonthPrior(date):
    dateArr = date.split("/")
    yearArr = dateArr[2].split(" ")
    newYear = int(yearArr[0])
    newMonth = int(dateArr[0])-1
    newDate = int(dateArr[1])
    print(dateArr)
    if(newMonth == 0):
        newMonth = 12
        newYear = newYear - 1
    elif(newMonth == 2 and newDate > 28):
        newDate = 28
    newDate = str(newDate) + "/" + str(newMonth) + "/" + str(newYear) + " " + yearArr[1]
    return newDate


print(oneMonthPrior('3/30/2023 21:27'))