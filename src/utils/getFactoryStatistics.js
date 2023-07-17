import FabricsApi from "../api/fabrics";

export const getFactoryStatistics = (array, setArray, fabricsStore, layoutStore) => {
    const localArray = JSON.parse(JSON.stringify(array))

    FabricsApi.getFabricsData()
        .then((data) => {
            data.forEach((item) => {
                let date
                if (item.date) {
                    date = item.date.split("/")[1]
                }

                for (let i = 0; i < localArray.length; i++) {
                    if (localArray[i].number == date) {
                        if (item.factory_id == 1) {
                            localArray[i] = {
                                ...localArray[i],
                                all_FabricA: localArray[i].all_FabricA + ((item.product1 + item.product2 + item.product3)/1000),
                                product1_FabricA: localArray[i].product1_FabricA + (item.product1 /1000),
                                product2_FabricA: localArray[i].product2_FabricA + (item.product2 /1000),
                                product3_FabricA: localArray[i].product3_FabricA + (item.product3 /1000),

                            }
                        }
                        if (item.factory_id == 2) {
                            localArray[i] = {
                                ...localArray[i],
                                all_FabricB: localArray[i].all_FabricB + ((item.product1 + item.product2 + item.product3)/1000),
                                product1_FabricB: localArray[i].product1_FabricB + (item.product1 /1000),
                                product2_FabricB: localArray[i].product2_FabricB + (item.product2 /1000),
                                product3_FabricB: localArray[i].product3_FabricB + (item.product3 /1000),
                            }
                        }
                        return localArray
                    }
                }
                setArray(localArray);
                fabricsStore.setFabricsData(localArray)
            })
        })
        .finally(() => layoutStore.setShowLoader(false))
}