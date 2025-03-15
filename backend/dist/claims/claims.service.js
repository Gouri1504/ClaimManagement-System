"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const claim_schema_1 = require("./schemas/claim.schema");
let ClaimsService = class ClaimsService {
    claimModel;
    constructor(claimModel) {
        this.claimModel = claimModel;
    }
    async create(claimData) {
        const newClaim = new this.claimModel(claimData);
        return newClaim.save();
    }
    async findAll() {
        return this.claimModel.find().exec();
    }
    async findByEmail(email) {
        return this.claimModel.find({ email }).exec();
    }
    async findById(id) {
        const claim = await this.claimModel.findById(id).exec();
        if (!claim) {
            throw new common_1.NotFoundException(`Claim with id ${id} not found`);
        }
        return claim;
    }
    async update(id, updateData) {
        const updatedClaim = await this.claimModel
            .findByIdAndUpdate(id, updateData, { new: true })
            .exec();
        if (!updatedClaim) {
            throw new common_1.NotFoundException(`Claim with id ${id} not found`);
        }
        return updatedClaim;
    }
    async delete(id) {
        const deletedClaim = await this.claimModel.findByIdAndDelete(id).exec();
        if (!deletedClaim) {
            throw new common_1.NotFoundException(`Claim with id ${id} not found`);
        }
        return { message: 'Claim deleted successfully' };
    }
};
exports.ClaimsService = ClaimsService;
exports.ClaimsService = ClaimsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(claim_schema_1.Claim.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ClaimsService);
//# sourceMappingURL=claims.service.js.map