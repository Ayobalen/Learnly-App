export interface IMongoUpdate {
  $push?: { [key: string]: any };
  $set?: { [key: string]: any };
  $incr?: { [key: string]: any };
}
