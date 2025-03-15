import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
        role: 'patient' | 'insurer';
    }): Promise<import("mongoose").Document<unknown, {}, import("./schemas/user.schema").UserDocument> & import("./schemas/user.schema").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
        role: "patient" | "insurer";
    }>;
    getProfile(req: any): any;
}
