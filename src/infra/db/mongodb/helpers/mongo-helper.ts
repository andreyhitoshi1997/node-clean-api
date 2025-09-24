import { Collection, MongoClient } from "mongodb";
import { AccountModel } from "../../../../domain/models/account";

export const MongoHelper = {
  client: null as MongoClient,
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri);
  },

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
      this.client = null;
    }
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name);
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithouthId } = collection;
    return {
      id: _id.toHexString(),
      name: collectionWithouthId.name,
      email: collectionWithouthId.email,
      password: collectionWithouthId.password,
    };
  },
};
