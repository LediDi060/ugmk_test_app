import { useCallback, useState } from "react";
import { observer } from "mobx-react";
import Filter from "../../components/Filter/Filter";
import Barchart from "../../components/ Barchart/Barchart";
import { DEFAULT_FILTER_OPTIONS } from "../../utils/constants/constants";

const Main = observer(() => {
    const [selectOptions, setSelectOptions ] = useState(localStorage.getItem("FILTER") || DEFAULT_FILTER_OPTIONS)

    const onSelect = useCallback((value) => {
        localStorage.setItem("FILTER", value);
        setSelectOptions(value)
    }, [])

    return <div style={{ margin: "auto", width: "max-content" }}>
        <Filter selectOptions={selectOptions} onSelect={onSelect}/>
        <Barchart filter={selectOptions}/>
    </div>
})

export default Main