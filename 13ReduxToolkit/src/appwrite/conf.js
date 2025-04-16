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

  async getPost(slug) {
    try {
      // get only one data

      return await this.database.getDocument(
        config.appwriteDataBaseID,
        config.appwriteCollectionID,
        slug
      );
    } catch (error) {
      throw error;
    }
  }
  async listPost() {
    try {
      // get all the post

      return await this.database.listDocuments(
        config.appwriteDataBaseID,
        config.appwriteCollectionID,
        [Query.equal("status", "active")]
      );
    } catch (error) {
      throw error;
    }
  }

  // file upload methods

  async uplodFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwrtiteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(
        config.appwrtiteBucketID
        , fileID
    );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async filePreview(fileID){
    try {
        return await this.bucket.getFilePreview(
            config.appwrtiteBucketID,
            fileID
        )
        return true
        
    } catch (error) {
        throw error
        return false
    }
  }
  
}

const Service = new service();

export default Service;
