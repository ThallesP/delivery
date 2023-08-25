import { describe } from 'node:test'
import { CreateItemUseCase } from './CreateItemUseCase'
import { ItemsRepository } from '../repositories/ItemsRepository'
import { InMemoryItemsRepository } from 'tests/repositories/InMemoryItemsRepository'

describe('CreateItemUseCase', () => {
  let itemsRepository: ItemsRepository
  let createItemUseCase: CreateItemUseCase

  beforeEach(() => {
    itemsRepository = new InMemoryItemsRepository()
    createItemUseCase = new CreateItemUseCase(itemsRepository)
  })

  it('should be able to create an item', async () => {
    const { item } = await createItemUseCase.execute({
      description: 'any_description',
      name: 'any_name',
      price: 10,
      restaurantId: 'any_restaurant_id',
    })

    expect(item.id).toBeTruthy()
  })
})
