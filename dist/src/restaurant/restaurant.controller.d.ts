import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto, EditRestaurantDto } from './dto';
import { Request } from "express";
import { DeleteDto } from 'src/dto/delete.dto';
import { CreateQrCodeDto } from '../customer/dto/create-qrcode.dto';
export declare class RestaurantController {
    private restaurantService;
    constructor(restaurantService: RestaurantService);
    getRestaurant(req: Request): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        email: string;
        image: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
        clientId: number;
        latitude: import("@prisma/client/runtime/library").Decimal;
        longitude: import("@prisma/client/runtime/library").Decimal;
        countryId: number;
    }[]>;
    getRestaurantById(restaurantId: number, req: Request): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        email: string;
        image: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
        clientId: number;
        latitude: import("@prisma/client/runtime/library").Decimal;
        longitude: import("@prisma/client/runtime/library").Decimal;
        countryId: number;
    }>;
    createRestaurant(file: any, dto: CreateRestaurantDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        email: string;
        image: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
        clientId: number;
        latitude: import("@prisma/client/runtime/library").Decimal;
        longitude: import("@prisma/client/runtime/library").Decimal;
        countryId: number;
    }>;
    editRestaurantById(file: any, dto: EditRestaurantDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        email: string;
        image: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
        clientId: number;
        latitude: import("@prisma/client/runtime/library").Decimal;
        longitude: import("@prisma/client/runtime/library").Decimal;
        countryId: number;
    }>;
    deleteRestaurant(dto: DeleteDto): Promise<import("../dto/api-response").APIResponse<any>>;
    createQrCode(restaurantId: string, dto: CreateQrCodeDto, req: Request): Promise<string[]>;
}
