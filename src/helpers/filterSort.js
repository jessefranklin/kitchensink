
export const filterByCategory = (orderItems, { category = '' }) => {
    if(!category) return orderItems;
    return orderItems.filter((orderItem) => orderItem.category.indexOf(category) !== -1 )
        .sort((a,b)=> a-b);
};