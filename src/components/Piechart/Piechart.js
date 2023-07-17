import { LabelList, Pie, PieChart as PieChartComponent } from "recharts";
import { useStores } from "../../context/StoreContext";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { getProductsStatistics } from "../../utils/getProductsStatistics";
import { useEffect } from "react";
import Cell from "antd/es/descriptions/Cell";
import { COLOR_CHART } from "../../utils/constants/constants";

const Piechart = observer(() => {
    const { fabricsStore } = useStores()
    let { factoryId, monthNumber } = useParams();

    useEffect(() => {
        getProductsStatistics(factoryId, monthNumber, fabricsStore)
    }, [])

   return <PieChartComponent width={400} height={400}>
        <Pie
            data={fabricsStore.productsData}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
        >
            <Cell name="Продукт 1" fill={COLOR_CHART.GREEN} />
            <Cell name="Продукт 2" fill={COLOR_CHART.YELLOW} />
            <Cell name="Продукт 3" fill={COLOR_CHART.BROWN} />
            <LabelList dataKey="name" position="outside" />
        </Pie>
   </PieChartComponent>
})

export default Piechart