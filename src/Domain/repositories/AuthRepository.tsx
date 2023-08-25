// AQUI DECLAROMOS LOS METODOS QUE VAMOS USAR 
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { User } from "../entities/User";


export interface AuthRepository {

    register(user: User): Promise<ResponseApiDelivery>


}