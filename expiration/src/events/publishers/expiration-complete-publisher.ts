import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ixtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
