

// @Xi
export default async function searchResult(name) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}search-products/${name}/`)
    let data = "";
    if (res) {
        data = await res.json();
    }
    console.log(data)
    return {
        props: {
            productName: data.data.product_name || "",
            farmAddress: data.data.farm_address || "",
            productPrice: data.data.product_price || "",
            unitWeight: data.data.unit_weight || "",
            unitName: data.data.unit_name || "",
            imageId: data.data.image_id || "",
            productImage: data.data.image || "",
            productStock: data.data.stock || "",
            productId: data.data.product_id || "",
            farmId: data.data.farm_id || "",
            farmName: data.data.farm_name || "",
            productDesc: data.data.product_desc || "",
            isFresh: data.data.is_fresh || "",
            productDiscount: data.data.discount || ""
        }
    }

}