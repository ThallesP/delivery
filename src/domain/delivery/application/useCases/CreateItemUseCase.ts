import { UniqueEntityId } from '@/shared/entities/UniqueEntityId'
import { Item } from '../../enterprise/entities/Item'
import { ItemsRepository } from '../repositories/ItemsRepository'

interface CreateItemInput {
  name: string
  restaurantId: string
  description: string
  price: number
}

interface CreateItemOutput {
  item: Item
}

export class CreateItemUseCase {
  constructor(private itemsRepository: ItemsRepository) {}

  async execute({
    description,
    name,
    price,
    restaurantId,
  }: CreateItemInput): Promise<CreateItemOutput> {
    const item = Item.create({
      description,
      name,
      price,
      restaurantId: new UniqueEntityId(restaurantId),
    })

    await this.itemsRepository.create(item)

    return { item }
  }
}
