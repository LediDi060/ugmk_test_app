import { Bar, BarChart, Legend, XAxis, YAxis } from 'recharts'
import { COLOR_CHART, MONTHS } from "../../utils/constants/constants";
import { useStores } from "../../context/StoreContext";
import { useCallback, useEffect, useState } from "react";

import {observer} from "mobx-react";
import { useNavigate } from "react-router-dom";
import { getFactoryStatistics } from "../../utils/getFactoryStatistics";

const newArray = [...MONTHS]
newArray.forEach(
    (item) =>
        Object.assign(item, {
            ...item,
            all_FabricA: 0,
            product1_FabricA: 0,
            product2_FabricA: 0,
            product3_FabricA: 0,
            product1_FabricB: 0,
            product2_FabricB: 0,
            product3_FabricB: 0,
            all_FabricB: 0,
        })
)

const Barchart = observer(({ filter }) => {
    const [dataKey, setDataKey] = useState([])
    const [array, setArray] = useState(newArray)

    const { fabricsStore, layoutStore } = useStores();
    const navigate = useNavigate();

    useEffect(() => {
        layoutStore.setShowLoader(true)
        getFactoryStatistics(array, setArray, fabricsStore, layoutStore)
    }, [])

    useEffect(() => {
        switch (filter) {
            case "all":
                setDataKey(["all_FabricA", "all_FabricB"]);
                break;
            case "product1":
                setDataKey(["product1_FabricA", "product1_FabricB"]);
                break;
            case "product2":
                setDataKey(["product2_FabricA", "product2_FabricB"]);
                break;
            case "product3":
                setDataKey(["product3_FabricA", "product3_FabricB"]);
                break;
            default:
                setDataKey(["all_FabricA", "all_FabricB"]);
        }
    }, [fabricsStore.fabricsData, filter])

    const onClick = useCallback((data, fabric_id) => {
        if (data && data.number) {
            navigate(
                `/details/${fabric_id}/${data.number}`
            );
        }
    }, [])

    return <BarChart
        width={900}
        height={300}
        data={fabricsStore.fabricsData}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
        }}
    >
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar
            dataKey={dataKey[0]}
            fill={COLOR_CHART.RED}
            name="Фабрика А"
            onClick={(data) => onClick(data, 1)}
        />
        <Bar
            dataKey={dataKey[1]}
            fill={COLOR_CHART.BLUE}
            name="Фабрика Б"
            onClick={(data) => onClick(data, 2)}
        />
    </BarChart>
})

export default Barchart