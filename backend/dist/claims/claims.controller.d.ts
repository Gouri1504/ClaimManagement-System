import { ClaimsService } from './claims.service';
import { Claim } from './schemas/claim.schema';
import { Response } from 'express';
export declare class ClaimsController {
    private readonly claimsService;
    constructor(claimsService: ClaimsService);
    createClaim(req: any, claimData: Partial<Claim>, file: Express.Multer.File): Promise<Claim>;
    getAllClaims(req: any): Promise<Claim[]>;
    updateClaim(id: string, updateData: Partial<Claim>): Promise<Claim>;
    getFile(filename: string, res: Response): Promise<void>;
}
