import { Entity } from '@/shared/entities/Entity'
import { UniqueEntityId } from '@/shared/entities/UniqueEntityId'
import { Optional } from '@/shared/types/Optional'

export type CustomerProps = {
  name: string
  createdAt: Date
  updatedAt?: Date
}

export class Customer extends Entity<CustomerProps> {
  static create(
    props: Optional<CustomerProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    return new Customer(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )
  }

  public get name() {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
    this.touch()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
