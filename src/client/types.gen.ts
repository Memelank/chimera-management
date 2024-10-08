// This file is auto-generated by @hey-api/openapi-ts

export type ObjectId = string;

export type User = {
    id?: ObjectId;
    openId?: string;
    name?: string;
    hashedPassword?: string;
    school?: string;
    role?: string;
    jwt?: string;
    expend?: number;
    orderNum?: number;
    address?: string;
};

export type ProductCate = {
    id?: ObjectId;
    title?: string;
    status?: number;
    priority?: number;
};

export type Product = {
    id?: ObjectId;
    cateId?: ObjectId;
    name?: string;
    imgURL?: string;
    price?: number;
    describe?: string;
    short_desc?: string;
    status?: number;
    delete?: number;
    productOptionIds?: Array<ObjectId>;
};

export type Address = {
    id?: ObjectId;
    school?: string;
    address?: string;
};

export type Activity = {
    id?: ObjectId;
    title?: string;
    imgURL?: string;
    describe?: string;
};

export type OptionValue = {
    value?: string;
    priceAdjustment?: number;
};

export type ProductOption = {
    id?: ObjectId;
    name?: string;
    values?: Array<OptionValue>;
};

export type ProcessorMap = {
    id?: ObjectId;
    state?: string;
    event?: string;
    customerTypes?: Array<(string)>;
    scenes?: Array<(string)>;
    processorIds?: Array<(number)>;
};

export type Order = {
    id?: ObjectId;
    userId?: ObjectId;
    state?: string;
    customerType?: string;
    scene?: string;
    items?: Array<OrderItem>;
};

export type OrderItem = {
    productId?: ObjectId;
    optionIdToValue?: {
        [key: string]: (string);
    };
    quantity?: number;
    price?: number;
};

export type ServiceResultObjectObject = {
    data?: {
        [key: string]: unknown;
    };
    context?: {
        [key: string]: unknown;
    };
    msg?: string;
    success?: boolean;
};

export type GetAllUsersResponse = (Array<User>);

export type GetAllUsersError = unknown;

export type UpdateUserData = {
    body: User;
};

export type UpdateUserResponse = (User);

export type UpdateUserError = unknown;

export type CreateUserData = {
    body: User;
};

export type CreateUserResponse = (User);

export type CreateUserError = unknown;

export type GetProductCateData = {
    path: {
        id: string;
    };
};

export type GetProductCateResponse = (ProductCate);

export type GetProductCateError = unknown;

export type UpdateProductCateData = {
    body: ProductCate;
    path: {
        id: string;
    };
};

export type UpdateProductCateResponse = (ProductCate);

export type UpdateProductCateError = unknown;

export type DeleteProductCateData = {
    path: {
        id: string;
    };
};

export type DeleteProductCateResponse = (unknown);

export type DeleteProductCateError = unknown;

export type GetAllProductsResponse = (Array<Product>);

export type GetAllProductsError = unknown;

export type UpdateProductData = {
    body: Product;
};

export type UpdateProductResponse = (Product);

export type UpdateProductError = unknown;

export type CreateProductData = {
    body?: {
        product: Product;
        image: (Blob | File);
    };
};

export type CreateProductResponse = (Product);

export type CreateProductError = unknown;

export type GetAllAddressesResponse = (Array<Address>);

export type GetAllAddressesError = unknown;

export type UpdateAddressData = {
    body: Address;
};

export type UpdateAddressResponse = (Address);

export type UpdateAddressError = unknown;

export type CreateAddressData = {
    body: Address;
};

export type CreateAddressResponse = (Address);

export type CreateAddressError = unknown;

export type GetAllActivitiesResponse = (Array<Activity>);

export type GetAllActivitiesError = unknown;

export type UpdateActivityData = {
    body: Activity;
};

export type UpdateActivityResponse = (Activity);

export type UpdateActivityError = unknown;

export type CreateActivityData = {
    body?: {
        activity: Activity;
        image: (Blob | File);
    };
};

export type CreateActivityResponse = (Activity);

export type CreateActivityError = unknown;

export type GetAllProductCatesResponse = (Array<ProductCate>);

export type GetAllProductCatesError = unknown;

export type CreateProductCateData = {
    body: ProductCate;
};

export type CreateProductCateResponse = (ProductCate);

export type CreateProductCateError = unknown;

export type GetAllProductOptionsResponse = (Array<ProductOption>);

export type GetAllProductOptionsError = unknown;

export type CreateProductOptionData = {
    body: ProductOption;
};

export type CreateProductOptionResponse = (ProductOption);

export type CreateProductOptionError = unknown;

export type GetAllProcessorMapsResponse = (Array<ProcessorMap>);

export type GetAllProcessorMapsError = unknown;

export type CreateProcessorMapData = {
    body: ProcessorMap;
};

export type CreateProcessorMapResponse = (ProcessorMap);

export type CreateProcessorMapError = unknown;

export type GetAllOrdersResponse = (Array<Order>);

export type GetAllOrdersError = unknown;

export type CreateOrderData = {
    body: Order;
};

export type CreateOrderResponse = (ServiceResultObjectObject);

export type CreateOrderError = unknown;

export type LoginData = {
    query: {
        password: string;
        username: string;
    };
};

export type LoginResponse = (string);

export type LoginError = unknown;

export type GetUserByNameData = {
    path: {
        name: string;
    };
};

export type GetUserByNameResponse = (User);

export type GetUserByNameError = unknown;

export type GetAddressByNameData = {
    path: {
        school: string;
    };
};

export type GetAddressByNameResponse = (Array<Address>);

export type GetAddressByNameError = unknown;