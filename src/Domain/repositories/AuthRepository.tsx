// AQUI DECLAROMOS LOS METODOS QUE VAMOS USAR 
import { User } from "../entities/User";


export interface AuthRepository {

    register(user: User): Promise<any>


}