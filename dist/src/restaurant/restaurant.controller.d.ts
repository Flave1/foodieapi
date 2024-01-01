import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto, EditRestaurantDto } from './dto';
import { Request } from "express";
export declare class RestaurantController {
    private restaurantService;
    constructor(restaurantService: RestaurantService);
    getRestaurant(req: Request): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    getRestaurantById(restaurantId: number, req: Request): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
    }>;
    createRestaurant(file: any, dto: CreateRestaurantDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
    }>;
    editRestaurantById(file: any, dto: EditRestaurantDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        deleted: boolean;
        status: boolean;
        phoneNumber: string;
        address: string;
        openingTime: string;
        closingTime: string;
        hasFreeDelivery: boolean;
        freeDeliveryAmount: import("@prisma/client/runtime/library").Decimal;
    }>;
    deleteRestaurantById(restaurantId: number): Promise<void>;
}
