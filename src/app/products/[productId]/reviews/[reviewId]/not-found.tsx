"use client"
import { usePathname } from "next/navigation"
export default function NotFoundPage (){
    const pathName = usePathname();
    const productId = pathName.split('/')[2]
    const reviewId = pathName.split('/')[4]
    return <div>
        <center>
            <h1>
                Review {reviewId} of Product {productId} Not Found
            </h1>
        </center>
    </div>
}