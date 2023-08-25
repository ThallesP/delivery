import { ItemsRepository } from '@/domain/delivery/application/repositories/ItemsRepository'
import { Item } from '@/domain/delivery/enterprise/entities/Item'

export class InMemoryItemsRepository implements ItemsRepository {
  public items: Item[] = []

  async create(item: Item): Promise<void> {
    this.items.push(item)
  }
}
