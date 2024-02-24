export class SentryException extends Error {
  name = 'SentryException';

  constructor(public readonly err: Error, message?: string, name?: string) {
    super(message);
    this.name = name || this.name;
  }
}
