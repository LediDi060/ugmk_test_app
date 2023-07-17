export const getProductsStatistics = (factoryId, monthNumber, fabricsStore) => {
    fabricsStore.fabricsData.find((item) => {
        if (item.number == monthNumber ) {
            if (factoryId == 1) {
                fabricsStore.setProductsData([
                    {name: "Продукт 1", value: item.product1_FabricA},
                    {name: "Продукт 2", value: item.product2_FabricA},
                    {name: "Продукт 3", value: item.product3_FabricA},
                ])
            }

            if (factoryId == 2) {
                fabricsStore.setProductsData([
                    {name: "Продукт 1", value: item.product1_FabricB},
                    {name: "Продукт 2", value: item.product2_FabricB},
                    {name: "Продукт 3", value: item.product3_FabricB},
                ])
            }
        }
    })
}

