import { FILTER_OPTIONS } from "../../utils/constants/constants";
import { Select } from "antd";

const Filter = ({ selectOptions, onSelect }) => {

    return <div style={{ margin: "auto", width: "50%" }}>
        Фильтр по типу продукции
        <Select
            style={{
                minWidth: "150px",
                marginLeft: "20px"
            }}
            allowClear
            onSelect={onSelect}
            defaultValue={selectOptions}
            options={FILTER_OPTIONS}
        />
    </div>
}

export default Filter