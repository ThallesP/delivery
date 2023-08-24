import { UniqueEntityId } from './UniqueEntityId'

export class Entity<Props> {
  protected props: Props
  private _id: UniqueEntityId

  constructor(props: Props, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }
}
