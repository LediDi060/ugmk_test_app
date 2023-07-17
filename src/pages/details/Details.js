import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { MONTHS } from "../../utils/constants/constants";
import Piechart from "../../components/Piechart/Piechart";

const Details = () => {
    let { factoryId, monthNumber } = useParams();
    const { Title } = Typography;

    const getNameMonth = useMemo(() => {
        const month = MONTHS.find((item) => item.number == monthNumber)
        return month.name
    }, [monthNumber])

    return <div style={{ margin: "auto", width: "max-content" }}>
        <Title level={2} > Статистика по продукции фабрики {factoryId == 1 ? 'A' : 'B'} за {getNameMonth} </Title>
        <Piechart />
    </div>
}

export default Details