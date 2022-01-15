export interface Product {
    notification_type: string,
    notification_id: number,
    product_id: string,
    product_type: "CAR" | "MOTORCYCLE",
    vin: string,
    created_at: string,
}