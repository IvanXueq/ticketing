import { Publisher, Subjects, TicketUpdatedEvent } from '@ixtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
