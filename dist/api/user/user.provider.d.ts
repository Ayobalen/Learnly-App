import { UtilService } from 'src/helpers';
import { IResponse } from 'src/interfaces';
import { AuthService, UserService } from 'src/services';
import { UpdateUserDto } from './dtos';
export declare class UserProvider {
    private readonly userService;
    private readonly authService;
    private readonly utilService;
    constructor(userService: UserService, authService: AuthService, utilService: UtilService);
    updateUsers(user: string, data: UpdateUserDto): Promise<IResponse>;
    deleteUser(user: string): Promise<IResponse>;
    getOneUser(user: string): Promise<IResponse>;
    getUsers(query: any): Promise<IResponse>;
}
