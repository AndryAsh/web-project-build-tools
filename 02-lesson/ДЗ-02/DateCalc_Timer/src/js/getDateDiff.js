import DateTime from 'luxon/src/datetime';

function getDateDiff(dateFrom, dateTo) {

  if (dateFrom < dateTo) {
    [dateFrom, dateTo] = [dateTo, dateFrom]
  }

  const dateFromObject = DateTime.fromISO(dateFrom)
  const dateToObject = DateTime.fromISO(dateTo)

  return dateFromObject.diff(dateToObject, ['years', 'months', 'days']).toObject()
}

export default getDateDiff;