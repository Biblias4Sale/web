export const orderByPrice = (options, filtredByRaiting) => {
  if (options.orderBy === 'priceAsc') {
    return filtredByRaiting.sort(function (a, b) {
      if (a.price > b.price) {
        return 1
      }
      if (a.price < b.price) {
        return -1
      }
      return 0
    })
  }
  if (options.orderBy === 'priceDesc') {
    return filtredByRaiting.sort(function (a, b) {
      if (a.price < b.price) {
        return 1
      }
      if (a.price > b.price) {
        return -1
      }
      return 0
    })
  } else return filtredByRaiting
}
