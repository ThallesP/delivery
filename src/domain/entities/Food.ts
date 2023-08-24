import { Optional } from '@/shared/types/Optional'
import { Entity } from '@/shared/entities/Entity'
import { UniqueEntityId } from '@/shared/entities/UniqueEntityId'
import { Slug } from './value-objects/Slug'

export type FoodProps = {
  name: string
  slug: Slug
  description: string
  price: number
  createdAt: Date
  updatedAt?: Date
}

export class Food extends Entity<FoodProps> {
  static create(
    props: Optional<FoodProps, 'createdAt' | 'slug'>,
    id?: UniqueEntityId,
  ) {
    return new Food(
      {
        ...props,
        slug: props.slug ?? Slug.createFromText(props.name),
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

  public get slug() {
    return this.props.slug
  }

  public get description() {
    return this.props.description
  }

  public set description(description: string) {
    this.props.description = description
    this.touch()
  }

  public get price() {
    return this.props.price
  }

  public set price(price: number) {
    this.props.price = price
    this.touch()
  }

  public get createdAt() {
    return this.props.createdAt
  }

  public get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
