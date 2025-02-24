import config from "../config/config";
import {Client,Account,ID} from "appwrite";

export class AuthService{

    client = new Client();
    

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectID);

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const userAccount = await this.client.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                return userAccount;
            } else {
                error = new Error("User account not created");
                throw error;
            }
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;