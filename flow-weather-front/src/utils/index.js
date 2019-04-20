export const returnTempOrDoubleDash = (temp) => {
  if(temp) {
    return temp + '°'
  } else {
    return '--'
  }
}

const dateDictionary = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

export const returnDayFromUnix = (unix) => {
  const dateFromUnix = new Date(unix*1000);
  const dayNumber = dateFromUnix.getDay()
  const dateToday = new Date()
  const todayNumber = dateToday.getDay()

  if(dayNumber === todayNumber) return 'Today'
  return dateDictionary[dayNumber]
}