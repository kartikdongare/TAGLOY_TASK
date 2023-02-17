import TreeView from "react-treeview"
import { useState } from 'react'
import 'react-treeview/react-treeview.css'
import { CheckBoxData } from '../CheckBoxData'
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

const CheckBox = () => {
    const [selectedCity, setSelectedCity] = useState([]);
    const [selectedAminity, setSelectedAminity] = useState([]);
    const [selectedArea, setSelectedArea] = useState([]);

    const handleAminity = (e) => {
        console.log('selecteAminity', e.target.checked, e.target.value)
        let clonedArr = [...selectedArea];
        if (e.target.checked === true) {
            clonedArr.push(e.target.value)
            setSelectedArea(clonedArr);
        } else {
            let filtered = selectedArea.filter((name) => {
                return name !== e.target.value;
            });

            clonedArr = filtered;
            selectedArea(clonedArr);
        }
    }

    const handleArea = (e) => {

        let clonedArr = [...selectedAminity];
        if (e.target.checked === true) {
            clonedArr.push(e.target.value)
            setSelectedAminity(clonedArr);
        } else {
            let filtered = selectedAminity.filter((name) => {
                return name !== e.target.value;
            });

            clonedArr = filtered;
            selectedAminity(clonedArr);
        }
    }

    const handleSelected = (e) => {
        let clonedArr = [...selectedCity];
        if (e.target.checked === true) {
            clonedArr.push(e.target.value)
            setSelectedCity(clonedArr);
        } else {
            let filtered = selectedCity.filter((name) => {
                return name !== e.target.value;
            });

            clonedArr = filtered;
            selectedCity(clonedArr);
        }
    }
    const data = CheckBoxData.result
    return (
        <div className="MainDiv">
            <div className="container">
                {data.map((node, i) => {
                    const name = node.name
                    const label = <span className="node">
                        <ListItem button key={i}>
                            <Checkbox
                                checked={(selectedCity.indexOf(i) > -1) ? true : false}
                                name="Checkbox"
                                onChange={handleAminity}
                                value={node.name}
                                color="primary"
                                inputProps={{ 'aria-label': 'aminity checkbox' }}
                            />
                            <ListItemText primary={node.name} /></ListItem>
                    </span>
                    return (
                        <TreeView key={name + '|' + i} nodeLabel={label} defaultCollapsed={true}>
                            {node.advertisers.map((city) => {
                                const label3 = <span className="node">
                                    <ListItem button key={i}>
                                        <Checkbox
                                            checked={(selectedCity.indexOf(i) > -1) ? true : false}
                                            name="Checkbox"
                                            onChange={handleAminity}
                                            value={city.area}
                                            color="primary"
                                            inputProps={{ 'aria-label': 'area checkbox' }}
                                        />
                                        <ListItemText primary='city' /></ListItem>
                                </span>
                                return (
                                    <div>
                                        <TreeView nodeLabel={label3} key={city.city_id} defaultChecked={true}>
                                            <div className="info"> <ListItem button key={i}>
                                                <Checkbox
                                                    checked={(selectedCity.indexOf(i) > -1) ? true : false}
                                                    name="Checkbox"
                                                    onChange={handleSelected}
                                                    value={city.city.name}
                                                    color="primary"
                                                    inputProps={{ 'aria-label': 'city checkbox' }}
                                                />
                                                <ListItemText primary={city.city.name} /></ListItem></div>
                                        </TreeView>
                                        {(city.area).map((areas) => {
                                            
                                            const label4 = <span className="node">
                                                <ListItem button key={i}>
                                                    <Checkbox
                                                        checked={(selectedCity.indexOf(i) > -1) ? true : false}
                                                        name="Checkbox"
                                                        onChange={handleArea}
                                                        value={areas}
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'area checkbox' }}
                                                    />
                                                    <ListItemText primary='area' /></ListItem>
                                            </span>
                                            return (<>
                                                <TreeView key={'as' + 9} nodeLabel={label4} defaultCollapsed={true}>
                                                    <ListItem button key={i}>
                                                        <Checkbox
                                                            checked={(selectedCity.indexOf(i) > -1) ? true : false}
                                                            name="Checkbox"
                                                            onChange={handleSelected}
                                                            value={areas}
                                                            color="primary"
                                                            inputProps={{ 'aria-label': 'area checkbox' }}
                                                        />
                                                        <ListItemText primary={areas.area} /></ListItem>
                                                </TreeView>
                                            </>);
                                        })}
                                    </div>
                                )
                            })}
                        </TreeView>
                    )

                })}

            </div>
        </div>
    )
}

export default CheckBox