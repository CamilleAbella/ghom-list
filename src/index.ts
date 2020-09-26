class Collection<T> extends Array<T> {
  constructor(
    iterator?: Array<T> | Map<any, T> | Set<T> | IterableIterator<T>
  ) {
    if (iterator) {
      if (iterator instanceof Map) {
        super(...iterator.values())
      } else {
        super(...iterator)
      }
    } else {
      super()
    }
  }

  slice(start?: number, end?: number): Collection<T> {
    return new Collection(super.slice(start, end))
  }

  divide(itemCountByDivision: number): Collection<Collection<T>> {
    const divided = new Collection<Collection<T>>()
    const divisionCount = Math.ceil(this.length / itemCountByDivision)
    for (let i = 0; i < divisionCount; i++) {
      divided.push(
        this.slice(itemCountByDivision * i, itemCountByDivision * (i + 1))
      )
    }
    return divided
  }
}

module.exports = Collection
