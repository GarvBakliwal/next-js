export default async function ReviewPage (
    {params} :
    {params : Promise <{
        productId : string
    }>}
) {
    return <>
        <div>
            <h1>
                All Reviews for Product {(await params).productId}
            </h1>
        </div>
    </>
}