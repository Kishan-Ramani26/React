import config from "../config/config";
import { Storage, ID, Client, Databases, Query, Account } from "appwrite";

export class service {
  client = new Client();
  database;
  bucket;
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectID);

    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({titale,slug,content,featuredIamge,status,userID}){
    try {
        config.appwriteDataBaseID,
        config.appwriteCollectionID,
        slug,
        {
            titale,
            content,
            featuredIamge,
            status,
            userID,
        }
    } catch (error) {
        throw error
    }
  }
}

const Service = new service();

export default Service;
