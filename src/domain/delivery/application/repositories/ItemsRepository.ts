import { Item } from '../../enterprise/entities/Item'

export interface ItemsRepository {
  create(item: Item): Promise<void>
}
