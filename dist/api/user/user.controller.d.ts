import { UserProvider } from './user.provider';
import { IResponse, IUserAuth } from 'src/interfaces';
import { UpdateUserDto } from './dtos';
export declare class UserController {
    private readonly userProvider;
    constructor(userProvider: UserProvider);
    getPatients(query: any, req: any): Promise<IResponse>;
    updateUser(updateUserDto: UpdateUserDto, id: string): Promise<IResponse>;
    getUser(userAuth: IUserAuth, req: any, id: string): Promise<IResponse>;
    deleteUser(userAuth: IUserAuth, req: any, user: string): Promise<IResponse>;
}
