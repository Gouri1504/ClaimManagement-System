import { Model } from 'mongoose';
import { Claim, ClaimDocument } from './schemas/claim.schema';
export declare class ClaimsService {
    private claimModel;
    constructor(claimModel: Model<ClaimDocument>);
    create(claimData: Partial<Claim>): Promise<Claim>;
    findAll(): Promise<Claim[]>;
    findByEmail(email: string): Promise<Claim[]>;
    findById(id: string): Promise<Claim>;
    update(id: string, updateData: Partial<Claim>): Promise<Claim>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
