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

  async createPost({ titale, slug, content, featuredIamge, status, userID }) {
    try {
      return await this.database.createDocument(
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
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { titale, content, featuredIamge, status, userID }) {
    try {
      return await this.database.updateDocument(
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
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appwriteDataBaseID,
        config.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPost(slug){
    try {
        return await this.database.getDocument(
            config.appwriteDataBaseID,
            config.appwriteCollectionID,
            slug
        )
    } catch (error) {
        throw error
    }
  }
}

const Service = new service();

export default Service;
