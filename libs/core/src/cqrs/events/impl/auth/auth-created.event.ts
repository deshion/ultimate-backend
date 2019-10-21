import { IEvent } from '@nestjs/cqrs';
import {AuthEntity} from '../../../../data/entities';

export class AuthCreatedEvent implements IEvent {
  constructor(
    public readonly auth: AuthEntity) {}
}