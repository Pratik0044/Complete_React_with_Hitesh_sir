import conf from "../config/conf";
import {Client, Account, ID} from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl )
                    .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount) {
                //call another Method (Direct login Kara denge)
            }
            else{
                return userAccount;
            }
        }
        catch(error){
            throw error;
        }
    }


}

const authService = new AuthService();

export default AuthService;

